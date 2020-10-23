import React from 'react'
import { useEffect, useState, useRef } from "react"

import './Navbar.css'
import logodark from '../images/logo-dark.png'

export default function Navbar(props) {


    return (
        <>
            <div className="nav-header  p-2">
                <div className="space-50"></div>
                <div className="space-50 mobile-yes-display"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 text-dark">
                            <img className="nav-logo" src={logodark} />
                        </div>
                        <div className="col-12 col-md-6 mobile-no-display">
                            <div className="row">
                                <div className="col-4  old-font">
                                    <div className="h6  font-weight-bold">
                                        <svg fill="#cdba6d" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                                        &nbsp;
                                        OUR ADDRESS
                                    </div> 
                                    <div className="h6 text-center">
                                        123 street,Kochi
                                    </div>

                                </div>
                                <div className="col-4">
                                    <div className="h6  font-weight-bold">
                                            <svg fill="#cdba6d" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                                            &nbsp;
                                            Call us
                                    </div> 
                                    <div className="h6 text-center">
                                            7869786754
                                    </div>
                                </div>
                                
                                <div className="col-4 ">
                                    <div className="btn-box-gold text-gold text-center">
                                            CONSULTATION
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========================= */}
            <div className="space-20"></div>
            <div className="nav-bar">
                <div className="nav-bar-body">
                    <div className="space-20"></div>
                    <div className="container">
                        <div className="nav-drop-container">
                            <div className="nav-dropdown ">
                                <div className="navbar-link p-2 mr-3 ">
                                    HOME
                                </div>
                                <div className="navbar-link p-2 mr-3 ">
                                    ABOUT
                                </div>
                                <div className="navbar-link p-2 mr-3 ">
                                    SERVICE
                                </div>
                                <div className="navbar-link p-2 mr-3 ">
                                    CONTACT
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-20"></div>
                </div>
            </div>
        
        </>
    )
}
