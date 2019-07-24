import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src='../../img/avatar.jpg' alt="avatar" className="avatar-img"></img>
                    <div className="banner-text">
                        <h1>Full-Stack Web Developer</h1>
                        <hr/>
                        <p>HTML/CSS | BootStrap | JavaScript | React | NodeJS | Cisco CCENT | SEO </p>
                    <div className="social-links">
                        <a href="http://www.google.com" target="_blank="noopener noreferrer>
                            <i className="fab fa-linkedin" aria-hidden="true"/>
                        </a>
                        <a href="http://www.google.com" target="_blank="noopener noreferrer>
                            <i className="fab fa-github" aria-hidden="true"/>
                        </a>
                        <a href="http://www.google.com" target="_blank="noopener noreferrer>
                            <i className="fab fa-free-code-camp" aria-hidden="true"/>
                        </a>
                    </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;
