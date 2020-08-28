import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import image1 from "../static/photo-one.JPG"
import image2 from "../static/photo-two.JPG"
import image4 from "../static/photo-four.JPG"
import image6 from "../static/photo-six.JPG"
import image9 from "../static/photo-nine.JPG"
import image10 from "../static/photo-ten.JPG"
import "../styles/App.scss"; 

class PhotoGallery extends React.Component {
    render(){
        const handleOnDragStart = (e) => e.preventDefault()
        const responsiveObject =  {
            0: {
                items:2,
            },

            450: {
                items:3,
            },


            768: {
                items:4,
            },

            992: {
                items:5,
            },

            1200: {
                items:6,
            }

        }


        return (
            <AliceCarousel mouseTrackingEnabled buttonsDisabled={true} autoPlay={true} responsive={responsiveObject} autoPlayInterval={1000}>
                <img src={image1} onDragStart={handleOnDragStart}  alt="" className="sliderimg"  />
                <img src={image2} onDragStart={handleOnDragStart}  alt="" className="sliderimg"/>
                <img src={image4} onDragStart={handleOnDragStart}  alt="" className="sliderimg"/>
                <img src={image6} onDragStart={handleOnDragStart}  alt="" className="sliderimg"/>
                <img src={image9} onDragStart={handleOnDragStart}  alt="" className="sliderimg"/>
                <img src={image10} onDragStart={handleOnDragStart}  alt="" className="sliderimg"/>
            </AliceCarousel>
            )
    }
}
export default PhotoGallery