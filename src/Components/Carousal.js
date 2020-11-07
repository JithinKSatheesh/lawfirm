import React from 'react'
import Flip from 'react-reveal/Flip';
import './Carousal.css'



import slider1 from '../images/slider1.jpg'

function Image1(){
    return(<>
        <div style={{backgroundImage:`url(${slider1})`}} className="carousal_container">
            <div className="carousal_content" id="home" >
                <div className="space-100"></div>
                <div className="space-50"></div>
                <div className="container">
                    <div className="display-4 old-font text-white">
                    <Flip bottom >
                    “Well Branded is Half Done”
                    </Flip>
                    </div>
                    <div className="h5 old-font text-white p-2">
                    <Flip top >
                    Business opportunities are like seasons, there's always another one coming,
                    <br/>
                    So play by the rules, but be ferocious.
                    </Flip>
                    </div>
                    <div className="space-20"></div>
                    <div  className="box-btn"><a style={{cursor:"pointer"}} className="text-white p-3" href="#contact"> Contact&nbsp;us </a> </div>
                    <div className="space-50"></div>
                </div>
            </div>
            {/* <img src={slider1} className="carousal-img" alt=""/> */}
        </div>
    </>)
}


export default function Carousal(props) {

    

    return (
        <>
          <Image1 />  
        </>
    )
}
