import React from 'react'
import './WhyChooseus.css'
import img3 from '../images/img-3.jpg'
import sign from '../images/sign.jpg'

export default function Whychooseus(props) {


    return (
        <>
            <div className="container">
                <div className="row choose-box-container">

                    <div className=" col col-12 col-md-4 choose-box bg-light p-4">
                        <div className="space-20"></div>
                        <svg fill="#cdba6d" width="24" height="24" viewBox="0 0 24 24"><path d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z" /></svg>
                        <br /><br />
                        <div className="h4 old-font text-secondary">
                            Our speciality 1
                        </div>
                        <div className="space-20"></div>
                        <div className="h6 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                    </div>

                    <div className=" col col-12 col-md-4 choose-box bg-dark p-4 text-white">
                        <div className="space-20"></div>
                        <svg fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z" /></svg>
                        <br /><br />
                        <div className="h4 old-font ">
                            Our speciality 2
                        </div>
                        <div className="space-20"></div>
                        <div className="h6  ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                    </div>

                    <div className=" col col-12 col-md-4 choose-box bg-gold text-white p-4">
                        <div className="space-20"></div>
                        <svg fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z" /></svg>
                        <br /><br />
                        <div className="h4 old-font ">
                            Our speciality 3
                        </div>
                        <div className="space-20"></div>
                        <div className="h6  ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                    </div>
                </div>
            </div>

            {/* ======================================== */}
            {/* ======================================== */}
            <div className="space-100"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 ">
                        <img src={img3} className="img-fluid img-shadow"  alt="" />
                    </div>
                    <div className="col-12 col-md-6 p-3">
                        <div className="space-50"></div>
                        <div className="text-gold  h5 font-weight-bold">
                            WHY CHOOSE US
                        </div>
                        <div className="text-dark  h1 old-font  font-weight-old">
                            Some thing about Law
                        </div>
                        <div className="space-20"></div>
                        <div className="p h6 text-secondary">
                            <span className="text-gold h2">I</span> nteger maximus elit vulputate, ultrices lorem consectetur, 
                            ultricies purus. Vestibulum sollicitudin enim at turpis semper, 
                            non interdum velit vestibulum. Aliquam sed lacus est. 
                            Pellentesque a efficitur sem, vel consequat mauris. Nunc luctus nibh efficitur, 
                            dignissim nulla at,
                            
                            <br/><br/>
                            Curabitur porttitor erat et ullamcorper scelerisque. Vivamus metus nisl, condimentum ac turpis a, 
                            rhoncus commodo ligula. In hac habitasse platea dictumst.
                            <br/><br/>
                            <img  src={sign} alt=""/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
