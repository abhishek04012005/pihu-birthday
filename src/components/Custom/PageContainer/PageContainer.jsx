import React from 'react';
import Tree from '../../../assests/tree.png'
import './PageContainer.css';

const PageContainer = (props) => {


    return (
        <>

            <div className="title">
                <div className="heading"><span><img src={Tree} alt="" /></span><h1>{props.title}</h1><span><img src={Tree} alt="" /></span></div>
            </div>

            <div className="page">
                <div className="page-container">
                    <div className="top-image-page-container">
                    </div>


                    <div className="bottom-image-page-container">

                        <div className='middle-page-container'>
                            {props.children}
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
};

export default PageContainer;
