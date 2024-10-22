import React from 'react'
import './PhotoFrameContainer.css'
import TopBannerImage from '../../../assests/card/top_banner.png'
import BottomGrassShadow from '../../../assests/card/bottom_grass_shadow.png'
import BottomGrassGreen from '../../../assests/card/bottom_grass_green.png'


const PhotoFrameContainer = (props) => {
    return (
        <>
            <>

                <div className="card">
                    <div className="card-body" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                        <div className="top-image">
                            <img src={TopBannerImage} alt="" />
                        </div>



                        <div className="photo-frame">
                            <div className='grid-header photo-frame-title'><h1>{props.cardTitle}</h1></div>
                            <div className="inner-photo-frame">
                                <img src={props.babyImage} alt="" />
                            </div>
                            <div className="photo-paragraph"><p>{props.cardContent}</p></div>
                        </div>


                        <div className="bottom-image">
                            <img className='image1' src={BottomGrassShadow} alt="" />

                            <img id='testImage' src={props.framePhotoUrl} alt="" />

                            <img className='image2' src={BottomGrassGreen} alt="" />
                        </div>
                    </div>
                </div>

            </>
        </>
    )
}

export default PhotoFrameContainer