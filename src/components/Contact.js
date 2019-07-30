import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';



class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Teddy Smith</h2>
                        <img
                        src="./../img/avatar.jpg"
                        alt="avatar"
                        className='avatar-img'
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Insert biography here</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                                    <i className='fa fa-phone-square' aria-hidden='true'></i>
                                    910-274-4925</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                                    <i className='fas fa-envelope-square' aria-hidden='true'></i>
                                    teddysmithdev@gmail.com</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                                    <i className='fab fa-linkedin-in' aria-hidden='true'></i>
                                    @teddysmithdev</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                                    <i className='fab fa-twitter' aria-hidden='true'></i>
                                    @teddysmithnc</ListItemContent>
                            </ListItem>
                           
                        </List>
                        </div>
                    </Cell>

                </Grid>
            </div>
        );
    }
}

export default Contact;
