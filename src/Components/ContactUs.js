import React from 'react'
import './ContactUs.css'

export default function Contactus(props) {
    

    return (
        <>
            <div className="container" id="contact">
                <div className="contact-card p-3">
                    <div className="row">
                        <div className="col col-md-6 col-12 p-3 text-center text-md-left">
                            <div className="h2 old-font text-dark">
                                <div className="space-20"></div>
                                LET US HELP YOU
                                
                            </div>
                            {/* <div className="text-secondary">
                                CALL NOW +1-800-234-1345
                            </div> */}
                        </div>
                        <div className="col col-md-6 col-12 p-3 text-center text-md-right">
                            <div className="space-20"></div>
                            <span className="box-btn-dark" style={{cursor:"pointer"}}>
                            <svg fill="#5bc456" width="24" height="24" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
                            &nbsp;&nbsp;
                            Chat with us</span>
                        </div>
                    </div>
                </div>

                <div className="space-50"></div>
                <div className="contact-card p-3">
                    <div className="row">
                        <div className="col col-12 col-md-6 p-2 text-center text-md-left">
                            <div className="h6  font-weight-bold">
                                <svg fill="#cdba6d" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                                &nbsp;
                                OUR ADDRESS
                            </div> 
                            <div className="h6  p-2">
                                Trademark BPO, <br/> Kacherippadi, Manjeri, Kerala, PIN 676121
                            </div>

                        </div>
                        <div className="col col-12 col-md-6 p-2 text-center text-md-left">
                            <div className="h6  font-weight-bold">
                                    <svg  fill="#cdba6d" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
                                    &nbsp;
                                    Call us
                                    <br/>
                            </div> 
                            <div className="h6 ">
                                &nbsp;
                                9446061947
                                &nbsp;
                                9446061948
                                &nbsp;
                                9446061958
                                &nbsp;
                               
                                
                            </div>
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
