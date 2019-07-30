import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img
                        src="./../img/avatar.jpg"
                        alt="avatar"
                        className='avatar-img'
                        />
                        </div>
                        <h2 style={{padding: '0em'}}>Teddy Smith</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr stle={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                        <p>Dummy Text</p>
                        <hr stle={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                        <h5>Address</h5>
                        <p>321 South Kerr Ave #113, Wilmington, NC 28403</p>
                        <h5>Phone</h5>
                        <p>910-274-4925</p>
                        <h5>Email</h5>
                        <p>teddysmithdev@gmail.com</p>
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                    <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />
               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;
