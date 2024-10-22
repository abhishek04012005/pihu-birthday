import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tree from '../../assests/tree.png'
import './Story.css'
import PhotoFrameContainer from '../Custom/PhotoFrameContainer/PhotoFrameContainer'
import Cards from './Cards';

const Story = () => {
    return (
        <>

            <div id='story-section'></div>
            <div className="story">
                <div className="title">
                    <div className="heading"><span><img src={Tree} alt="" /></span><h1>Story</h1><span><img src={Tree} alt="" /></span></div>
                </div>

                <div>

                    <div className="story-container">
                        <div className="story-container-inner">
                            <Container
                                maxWidth={false}
                                style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}

                                sx={{
                                    width: 'auto',
                                    padding: 0,
                                    bgcolor: '#F6EFD3',

                                }}
                            >



                                <Grid container justifyContent="space-around" alignItems="center"  >
                                    {Cards.map(card => (
                                        <Grid item xs={10} sm={11} md={5} key={card.id}>
                                            <PhotoFrameContainer
                                                cardTitle={card.cardTitle}
                                                cardContent={card.cardContent}
                                                babyImage={card.babyImage}
                                                framePhotoUrl={card.framePhotoUrl}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>

                            </Container>

                        </div>
                    </div>

                </div>
            </div >

        </>
    )
}

export default Story