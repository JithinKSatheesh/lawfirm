import React from 'react'
import './Carousal.css'
import {Link} from 'react-router'

import slider1 from '../images/slider1.jpg'

function Image1(){
    return(<>
        <div style={{backgroundImage:`url(${slider1})`}} className="carousal_container">
            <div className="carousal_content">
                <div className="space-100"></div>
                <div className="space-50"></div>
                <div className="container">
                    <div className="display-4 old-font text-white">
                    “Well Branded is Half Done”
                    </div>
                    <div className="h5 old-font text-white p-2">
                    Business opportunities are like seasons, there's always another one coming,
                    <br/>
                    So play by the rules, but be ferocious.

                    </div>
                    <div className="space-20"></div>
                    <div style={{cursor:"pointer"}} className="box-btn">Learn more</div>
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
