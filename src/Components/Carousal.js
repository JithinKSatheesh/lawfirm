import React from 'react'
import './Carousal.css'

import slider1 from '../images/slider1.jpg'

function Image1(){
    return(<>
        <div style={{backgroundImage:`url(${slider1})`}} className="carousal_container">
            <div className="carousal_content">
                <div className="space-100"></div>
                <div className="space-50"></div>
                <div className="container">
                    <div className="display-2 old-font text-white">
                        Legal Insight.
                    </div>
                    <div className="h3 old-font text-white">
                        Smart approach to legal solutions with exceptional service
                    </div>
                    <div className="space-20"></div>
                    <div className="box-btn">Learn more</div>
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
