import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { TextField, Button, Typography, Link } from '@mui/material';
import { WhatsApp, Phone, Home, Email } from '@mui/icons-material';
import './ContactUs.css';
import PageContainer from '../Custom/PageContainer/PageContainer';
import '../../index.css';

const ContactUs = () => {

    const [formData, setFormData] = useState({

        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, subject, message } = formData;
        const whatsappURL = `https://api.whatsapp.com/send?phone=8368877024&text=${encodeURIComponent(`Name: ${name}\n\n Subject: ${subject}\n\n Message: ${message}`)}`;
        window.open(whatsappURL, '_blank');
    };
    

    return (
        <div id='contact-section'>

            <PageContainer title="Contact Us">
                <Grid container justifyContent="space-around">
                    <Grid item xs={10} md={4}>
                        <div className="grid-header">
                            <h1>Send Your Wish</h1>
                        </div>
                        <div className="contact_gap">
                            <form onSubmit={handleSubmit}>
                                <TextField label="Name" className="custom-label" required name="name" value={formData.name} onChange={handleChange} variant="outlined" margin="normal" fullWidth />
                                <TextField label="Subject" className="custom-label" required name="subject" value={formData.subject} onChange={handleChange} variant="outlined" margin="normal" fullWidth />
                                <TextField label="Message" className="custom-label" required name="message" value={formData.message} onChange={handleChange}
                                variant="outlined" margin="normal" fullWidth multiline rows={4} />
                                <Button type='submit' variant="contained" sx={{ backgroundColor: '#244E3C', color: 'white', mt: 2 }} fullWidth>
                                    <WhatsApp /> &nbsp; Send
                                </Button>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={10} md={4} className="grid-header">
                        <div className="contact-container-section">
                            <h1>Contact</h1>
                            <div className="contact-item contact_gap">
                                <Typography variant="body1">
                                    <h4 style={{ display: 'flex' }}><Phone />&nbsp;<span>+91-8368877024</span></h4>
                                </Typography>
                                <Typography variant="body1">
                                    <h4 style={{ display: 'flex' }}><Home />&nbsp;<span>Block-B, 701, Ratan Orbit, Indra Nagar Road, Kalayanpur, Kanpur, Uttar Pradesh-208026</span></h4>
                                </Typography>
                                <Typography variant="body1">
                                    <h4 style={{ display: 'flex' }}><Email />
                                        &nbsp;<Link href="mailto:theabhishekchoudhary01@gmail.com" underline="none">
                                            <span> theabhishekchoudhary0401</span>
                                        </Link>
                                    </h4>
                                </Typography>
                                <Typography variant="body1">
                                    <h4 style={{ display: 'flex' }}><WhatsApp />&nbsp;<span>+91-8368877024</span></h4>
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </PageContainer>
        </div>
    );
};

export default ContactUs;
