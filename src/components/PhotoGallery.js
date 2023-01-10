import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import image1 from "../static/photo-one.jpg"
import image2 from "../static/photo-two.jpg"
import image4 from "../static/photo-three.JPG"
import image6 from "../static/photo-four.jpg"
import image9 from "../static/photo-five.jpg"
import image10 from "../static/photo-six.jpg"
import "../styles/App.scss"; 
import { LazyLoadImage } from 'react-lazy-load-image-component';

class PhotoGallery extends React.Component {
    render(){
        const handleOnDragStart = (e) => e.preventDefault()
    
        const imageNames = [image1, image2, image4, image6, image9, image10]
        const images = imageNames.map(image => <div id="slider-img-container">
                                                    <LazyLoadImage src={image} id="slider-img" onDragStart={handleOnDragStart}  alt=""/>
                                               </div>)
        const responsiveObject =  {
            0: { items:2 },
            450: { items:3 },
            768: { items:4 },
            992: { items:5 },
            1200: { items:6 }
        }
        return (
            <AliceCarousel items={images} mouseTrackingEnabled buttonsDisabled={true} autoPlay={true} 
                           responsive={responsiveObject} autoPlayInterval={1000}/>
            )
    }
}
export default PhotoGallery