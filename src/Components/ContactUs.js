import React from 'react'
import './ContactUs.css'

export default function Contactus(props) {
    

    return (
        <>
            <div className="container">
                <div className="contact-card p-3">
                    <div className="row">
                        <div className="col col-6 p-3">
                            <div className="h2 old-font text-dark">
                                <div className="space-20"></div>
                                LET US HELP YOU
                                
                            </div>
                            <div className="text-secondary">
                                CALL NOW +1-800-234-1345
                            </div>
                        </div>
                        <div className="col col-6 p-3 text-right">
                            <div className="space-50"></div>
                            <span className="box-btn-dark">Contact us</span>
                        </div>
                    </div>
                </div>
                <div className="space-50"></div>
                <div className="contact-card p-3">
                    <div className="space-50"></div>
                    <div className="text-center h3 old-font">
                        Drop a message
                    </div>
                    <div className="space-20"></div>
                    <div className="form">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Message"/>
                        </div>
                        <div className="space-50"></div>
                        <div className="form-group">
                            <span className="box-btn-dark">Contact us</span>
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}
