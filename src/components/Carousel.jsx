import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";


// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [count,setCount]=useState(0)
    
    const faces={
        backgroundImage:`url(${images[count].img})`,
    }
    return(
        <>
    
    <div className="container" style={faces}>
                <div className="left-arrow" onClick={()=>{
                    if(count!=0){
                        setCount(count-1)
                    }
                    
                }}><ArrowBackIosIcon id="arrow" /></div>
                <div className="container-2">
                    <div className="title-box">{images[count].title}</div>
                    <div className="subtitle-box">{images[count].subtitle}</div>
                </div>
                <div className="right-arrow" onClick={()=>{
                    if (count!=2){
                        setCount(count+1)
                    }
                    
                }}><ArrowForwardIosIcon  id="arrow"/></div>
    </div>
    </>
        
    )
}

export default Carousel;