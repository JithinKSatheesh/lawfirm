import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

import './WhyChooseus.css'
import img3 from '../images/img-3.jpg'
import sign from '../images/sign.jpg'

export default function Whychooseus(props) {


    return (
        <>
            <div className="container" id="about">
                <div className="row choose-box-container">
                    <Zoom >
                    <div className=" col col-12 col-md-4 choose-box bg-light p-4">
                        <div className="space-20"></div>
                        <svg fill="#cdba6d" width="24" height="24" viewBox="0 0 24 24"><path d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z" /></svg>
                        <br /><br />
                        <div className="h4 old-font text-secondary">
                        
                            Branding and design
                            
                       
                        </div>
                        <div className="space-20"></div>
                        <div className="h6 text-secondary">
                            Branding makes a memorable impression on your customers and clients which distinguish
                            yourself from the competitors and clarifies what you offer to make you the better choice.


                        </div>
                    </div>

                    </Zoom>

                    <Zoom >
                    <div className=" col col-12 col-md-4 choose-box bg-dark p-4 text-white">
                        <div className="space-20"></div>
                        <svg fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z" /></svg>
                        <br /><br />
                        <div className="h4 old-font ">
                            Protects brands and businesses
                        </div>
                        <div className="space-20"></div>
                        <div className="h6  ">
                            Intellectual Property Rights provide protection for both businesses and consumers,
                            making them an important part of running a successful company.
                        </div>
                    </div>

                    </Zoom >

                    <Zoom >
                    <div className=" col col-12 col-md-4 choose-box bg-gold text-white p-4">
                        <div className="space-20"></div>
                        <svg fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z" /></svg>
                        <br /><br />
                        <div className="h4 old-font ">
                            Corporate and legal advice
                        </div>
                        <div className="space-20"></div>
                        <div className="h6  ">
                            An experienced, trustworthy corporate lawyer can help protect your business from serious legal
                            consequences and advocate for your interests if disputes and litigation arise.

                        </div>
                    </div>
                    </Zoom>
                </div>
            </div>

            {/* ======================================== */}
            {/* ======================================== */}
            <div className="space-100"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 ">
                    <Slide bottom>
                        <img src={img3} className="img-fluid img-shadow" alt="" />
                    </Slide>
                    </div>
                    <div className="col-12 col-md-6 p-3">
                        <div className="space-50"></div>
                        <div className="text-gold  h5 font-weight-bold">
                            {/* Message */}
                        </div>
                        <div className="text-dark  h1 old-font  font-weight-old">
                            Our message
                        </div>
                        <div className="space-20"></div>
                        <div className="p h6 text-secondary">
                        <Slide right>

                            <span className="text-gold h2">I</span>
                            " We believe in building upon and extending the strengths of the individuals to create a 
                            transformational business environment to inspire, prepare, and support entrepreneurial leaders to turn ideas into action in pursuing 
                            innovative solutions to the world’s most pressing problems.""

                            <div className="space-20"></div>
                            <img src={sign} alt="" />
                        </Slide>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
