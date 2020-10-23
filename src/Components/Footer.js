import React from 'react'
import './Footer.css'

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
                            <div className="text-white old-font font-wight-bold h5 text-md-right text-center">
                                About
                            </div>
                            <div className="text-white old-font font-wight-bold h5 text-md-right text-center">
                                contact
                            </div>
                            <div className="text-white old-font font-wight-bold h5 text-md-right text-center">
                                service
                            </div>

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
