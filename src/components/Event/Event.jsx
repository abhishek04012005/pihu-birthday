import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Cake, Home, AccessTimeFilled, CalendarMonth } from '@mui/icons-material';
import PageContainer from '../Custom/PageContainer/PageContainer'
import GirafeImage from '../../assests/animals/girafe.png'
import LionImage from '../../assests/animals/lion.png'
import ElephantImage from '../../assests/animals/Elephant.png'
import PandaImage from '../../assests/animals/panda.png'
import './Event.css'

const Event = () => {

    return (
        <>
            <div id='event-section'>
                <PageContainer title='Event' >
                    <Grid container justifyContent="space-around" alignItems="center"   >
                        <Grid item xs={10} md={3} >
                            <div className="event-image-section">
                                <div className='event-image-section-inner'>
                                    <img src={GirafeImage} alt="" />
                                </div>
                                <div className='event-image-section-inner'>
                                    <img src={LionImage} alt="" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10} md={4} >
                            <div className="grid-header">
                                <h1 >Birthday Celebration</h1>
                                <div className="contact-item contact_gap">
                                    <Typography variant="body1">
                                        <h4 style={{ display: 'flex' }}><CalendarMonth />&nbsp;<span>22th of October 2024</span></h4>
                                    </Typography>
                                    <Typography variant="body1">
                                        <h4 style={{ display: 'flex' }}><AccessTimeFilled />&nbsp;<span>7:00 PM (IST)</span></h4>
                                    </Typography>
                                    <Typography variant="body1">
                                        <h4 style={{ display: 'flex' }}>
                                            <Home />&nbsp;<span> Block-B, 701, Ratan Orbit, Indra Nagar Road, Kalayanpur, Kanpur, Uttar Pradesh-208026 </span>
                                        </h4>
                                    </Typography>
                                    <Typography variant="body1">
                                        <h4 style={{ display: 'flex' }}>

                                            <Cake />&nbsp;<span>Wild Animal Party Theme</span>

                                        </h4>
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10} md={3} >
                            <div className="event-image-section">
                                <div className='event-image-section-inner'>
                                    <img src={ElephantImage} alt="" />
                                </div>
                                <div className='event-image-section-inner'>
                                    <img src={PandaImage} alt="" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </PageContainer>
            </div>
        </>
    )
}

export default Event