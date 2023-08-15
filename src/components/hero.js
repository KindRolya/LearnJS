import "./hero.css"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {Products} from "./Product-list"


export default function Hero (){


    
    return(
        <>
            <div className="hero"></div>
            <Slider className="slidershow" autoplay="10">
                {Products.map((item, index) =>(
                    <div key={index} className="slideshow" 
                    style={{background: `url('${item.image}') no-repeat center center`}} />
                 ))}
            </Slider>
        </>
    )
}
