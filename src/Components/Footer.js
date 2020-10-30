import React from 'react'
import './Footer.css'

import Scrollspy from 'react-scrollspy'

import logo from '../images/logo-dark.png'

export default function Footer(props) {


    return (
        <>
            <div className="footer_container">
                <div className="container">
                    <div className="space-100"></div>
                    <div className="row">
                        <div className="col col-12 col-lg-6 text-center text-md-left">
                            <img className="nav-logo" src={logo} alt="" />
                        </div>
                        <div className="col col-12 col-lg-6">
                        <Scrollspy items={ ['about', 'contact', 'service'] } currentClassName="is-current">
                            <div className="text-white old-font font-wight-bold h5 text-md-right text-center">
                            <a style={{textDecoration:"none",color:"white"}} href="#about">
                                About
                            </a>
                            </div>
                            <div className="text-white old-font font-wight-bold h5 text-md-right text-center">
                            <a style={{textDecoration:"none",color:"white"}} href="#contact">
                                contact
                            </a>
                                
                            </div>
                            <div className="text-white old-font font-wight-bold h5 text-md-right text-center">
                               <a style={{textDecoration:"none",color:"white"}} href="#service">
                                service   
                                </a> 
                            </div>
                        </Scrollspy>

                        </div>
                    </div>
                    <div className="space-20"></div>
                    <hr/>
                    <div className="row">
                        <div className="col-12 text-center text-white">
                            Copyright © 2020
                        </div>
                    </div>
                    <div className="space-20"></div>
                </div>
            </div>
        </>
    )
}
