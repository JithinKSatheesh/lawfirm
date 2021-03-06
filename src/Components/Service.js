import React from 'react'
import Zoom from 'react-reveal/Zoom';



import './Service.css'

export default function Service(props) {
    

    return (
        <>
            <div className="space-50"></div>
            <div className="service-container" id="service">
                <div className="container">
                    <div className="space-100"></div>
                    <div className="text-center text-gold font-weight-bold">
                        {/* OUR SERVICE */}
                    </div>
                    <div className="space-20"></div>
                    <div className="h2 text-center text-gold">
                    OUR SERVICE
                    </div>
                    <div className="space-100"></div>
                    <div className="row text-white">
                        <div className="col col-12 col-md-3 ">
                        <Zoom>
                            <div className="service-box">
                                <div className="h5 font-weight-bold old-font">
                                <svg fill="#cdba6d" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 9v6h-1.354v-3.315l-1.063 3.315h-1.48l-1.059-3.314v3.314h-1.354v-6h1.988l1.17 3.903 1.159-3.903h1.993zm-12 0v1.285h1.808v4.715h1.441v-4.715h1.762v-1.285h-5.011z"/></svg>
                                <br/><br/>
                                    Trademark
                                </div>
                                <br/>
                                <div className="h6">
                                  
                                </div>
                            </div>
                        </Zoom>
                        </div>
                        <div className="col col-12 col-md-3 ">
                        <Zoom>
                            
                       
                            <div className="service-box">
                                <div className="h5 font-weight-bold old-font">
                                    <svg fill="#cdba6d" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 15.781c1.179 0 2.31-.529 3.136-1.669l1.857 1.218c-1.27 1.811-3.112 2.67-4.993 2.67-3.308 0-6-2.692-6-6s2.691-6 6-6c1.861 0 3.713.844 4.994 2.67l-1.857 1.218c-.832-1.146-1.966-1.669-3.137-1.669-2.084 0-3.781 1.696-3.781 3.781s1.696 3.781 3.781 3.781z"/></svg>
                                    <br/><br/>
                                    Copyright 
                                </div>
                                <br/>
                                <div className="h6">
                                  
                                </div>
                            </div>
                            </Zoom>
                        </div>
                        <div className="col col-12 col-md-3 ">
                        <Zoom>
                            <div className="service-box">
                                <div className="h5 font-weight-bold old-font">
                                <svg fill="#cdba6d" width="24" height="24" viewBox="0 0 24 24"><path d="M11.329 19.6c-.185.252-.47.385-.759.385-.194 0-.389-.06-.558-.183-.419-.309-.509-.896-.202-1.315l1.077-1.456c.308-.417.896-.508 1.315-.199.421.306.511.895.201 1.313l-1.074 1.455zm-.825-2.839c.308-.418.217-1.007-.201-1.316-.421-.308-1.008-.216-1.317.203l-1.073 1.449c-.309.419-.217 1.009.202 1.317.417.307 1.007.218 1.315-.202l1.074-1.451zm-1.9-1.388c.309-.417.217-1.007-.203-1.315-.418-.307-1.007-.216-1.314.202l-1.083 1.461c-.308.419-.209.995.209 1.304.421.308 1 .229 1.308-.19l1.083-1.462zm-1.898-1.386c.308-.419.219-1.007-.203-1.315-.419-.309-1.007-.218-1.315.201l-1.075 1.451c-.308.418-.217 1.008.202 1.315.419.307 1.008.218 1.315-.202l1.076-1.45zm17.294-8.438s-1.555.301-2.667.479c-2.146.344-4.144-.416-6.361-1.562-.445-.229-.957-.466-1.458-.466-.461 0-.913.209-1.292.639-1.366 1.547-2.16 2.915-3.785 3.864-.801.468.14 1.934 1.86 1.331.878-.308 1.736-.895 2.706-1.677.762-.615 1.22-.524 1.879.135 1.238 1.238 5.404 5.351 5.404 5.351 1.317-.812 2.422-1.312 3.713-1.792v-6.302zm-10.524 12.662c-.158.459-.618 1.001-.953 1.455.297.235.608.334.882.334.717 0 1.188-.671.542-1.318l-.471-.471zm6.506-3.463c-1.07-1.055-4.732-4.667-5.803-5.713-.165-.161-.421-.18-.608-.044-.639.464-2.082 1.485-2.944 1.788-1.685.59-3.115-.222-3.422-1.359-.192-.712.093-1.411.727-1.781 1.008-.589 1.657-1.375 2.456-2.363-.695-.539-1.35-.732-1.991-.732-1.706 0-3.317 1.366-5.336 1.231-1.373-.09-3.061-.403-3.061-.403v6.333c1.476.321 2.455.464 3.92 1.199l.462-.624c.364-.496.949-.792 1.564-.792.87 0 1.622.578 1.861 1.388.951 0 1.667.602 1.898 1.387.826-.031 1.641.519 1.897 1.385 1.171 0 2.017.92 1.981 2.007l1.168 1.168c.367.368.963.367 1.331 0 .368-.368.368-.964 0-1.332l-1.686-1.687c-.22-.22.113-.553.333-.333l2.032 2.033c.368.368.963.368 1.331 0s.368-.963 0-1.331l-2.501-2.502c-.221-.218.113-.553.333-.333l2.7 2.701c.368.368.963.368 1.331 0 .358-.356.361-.922.027-1.291z"/></svg>
                                <br/><br/>
                                Partnership deed
                                </div>
                                <br/>
                                <div className="h6">
                                  
                                </div>
                            </div>
                        </Zoom>
                        </div>
                        <div className="col col-12 col-md-3 ">
                        <Zoom>
                            <div className="service-box">
                                <div className="h5 font-weight-bold old-font">
                                <svg fill="#cdba6d" width="24" height="24" viewBox="0 0 24 24"><path d="M17.677 16.879l-.343.195v-1.717l.343-.195v1.717zm2.823-3.324l-.342.195v1.717l.342-.196v-1.716zm3.5-7.602v11.507l-9.75 5.54-10.25-4.989v-11.507l9.767-5.504 10.233 4.953zm-11.846-1.757l7.022 3.2 1.7-.917-7.113-3.193-1.609.91zm.846 7.703l-7-3.24v8.19l7 3.148v-8.098zm3.021-2.809l-6.818-3.24-2.045 1.168 6.859 3.161 2.004-1.089zm5.979-.943l-2 1.078v2.786l-3 1.688v-2.856l-2 1.078v8.362l7-3.985v-8.151zm-4.907 7.348l-.349.199v1.713l.349-.195v-1.717zm1.405-.8l-.344.196v1.717l.344-.196v-1.717zm.574-.327l-.343.195v1.717l.343-.195v-1.717zm.584-.332l-.35.199v1.717l.35-.199v-1.717zm-16.656-4.036h-2v1h2v-1zm0 2h-3v1h3v-1zm0 2h-2v1h2v-1z"/></svg>
                                <br/><br/>
                                Export/import license
                                </div>
                                <br/>
                                <div className="h6">
                                  
                                </div>
                            </div>
                        </Zoom>
                        </div>
                        <div className="col col-12 col-md-3 ">
                        <Zoom>
                            <div className="service-box">
                                <div className="h5 font-weight-bold old-font">
                                <svg fill="#cdba6d" width="24" height="24" viewBox="0 0 24 24"><path d="M13.062 11.182h-2.917v-2.107h2.917c1.237 0 1.237 2.107 0 2.107zm10.938.818c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-7.313 5l-2.687-3.892c3.263-1.066 2.455-6.108-.938-6.108h-5.062v10h2.064v-3.743h1.503l2.629 3.743h2.491z"/></svg>
                                <br/><br/>
                                Patent
                                </div>
                                <br/>
                                <div className="h6">
                                  
                                </div>
                            </div>
                        </Zoom>
                        </div>
                        <div className="col col-12 col-md-3 ">
                        <Zoom>
                            <div className="service-box">
                                <div className="h5 font-weight-bold old-font">
                                <svg   fill="#cdba6d" width="24" height="24" viewBox="0 0 24 24"><path d="M19.099 11.136c-1.449 1.97-3.599 3.914-6.021 3.597-.655.916-1.387 2.194-2.199 3.678l-1.879.589c1.589-3.101 3.712-6.53 5.989-9.136-.986.642-2.606 2.023-4.016 3.479-1.271-2.656.069-5.115 2.012-6.994-.056.885.337 1.692.631 2.107-.05-.74.036-2.062.576-3.207 1.082-.913 2.039-1.57 3.132-2.145-.177.647-.025 1.423.182 1.907.095-.67.494-1.937.955-2.462 1.364-.88 3.384-1.584 5.539-1.548-.238 1.328-.936 3.484-1.877 4.821-.761.489-1.766.775-2.566.913.663.186 1.407.24 2.052.192-.469.987-.946 1.891-1.667 3-.995.555-2.267.8-3.135.846.607.319 1.714.505 2.292.363zm-1.099 4.009v5.855h-16v-12h6.875c.229-.673.547-1.342.979-2h-9.854v16h20v-9.788c-.574.679-1.239 1.355-2 1.933z"/></svg>
                                <br/><br/>
                                Legal Agreements
                                </div>
                                <br/>
                                <div className="h6">
                                  
                                </div>
                            </div>
                        </Zoom>
                        </div>
                        <div className="col col-12 col-md-3 ">
                        <Zoom>
                            <div className="service-box">
                                <div className="h5 font-weight-bold old-font">
                                <svg fill="#cdba6d" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 24h-23v-16h6v-8h11v12h6v12zm-12-5h-3v4h3v-4zm4 0h-3v4h3v-4zm6 0h-2v4h2v-4zm-17 0h-2v4h2v-4zm11-5h-2v2h2v-2zm-5 0h-2v2h2v-2zm11 0h-2v2h2v-2zm-17 0h-2v2h2v-2zm11-4h-2v2h2v-2zm-5 0h-2v2h2v-2zm-6 0h-2v2h2v-2zm11-4h-2v2h2v-2zm-5 0h-2v2h2v-2zm5-4h-2v2h2v-2zm-5 0h-2v2h2v-2z"/></svg>
                                <br/><br/>
                                Company Registration
                                </div>
                                <br/>
                                <div className="h6">
                                  
                                </div>
                            </div>
                        </Zoom>
                        </div>
                        <div className="col col-12 col-md-3 ">
                        <Zoom>
                            <div className="service-box">
                                <div className="h5 font-weight-bold old-font">
                               
                                <svg width="24" height="24" fill="#cdba6d" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 24h-24v-2h24v2zm-1-3h-22v-1h22v1zm-17-1.999h-4v-7.001c-.552 0-1-.448-1-1s.448-1 1-1h4c.552 0 1 .448 1 1s-.448 1-1 1v7.001zm8 0h-4v-7.001c-.552 0-1-.448-1-1s.448-1 1-1h4c.552 0 1 .448 1 1s-.448 1-1 1v7.001zm8 0h-4v-7.001c-.552 0-1-.448-1-1s.448-1 1-1h4c.552 0 1 .448 1 1s-.448 1-1 1v7.001zm-10-19.001l-12 9h24.001l-12.001-9zm0 3c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z"/></svg>
                                <br/><br/>
                                Legal Advice
                                </div>
                                <br/>
                                <div className="h6">
                                  
                                </div>
                            </div>
                            </Zoom>
                        </div>
                        <div className="col col-12 col-md-3 ">
                        <Zoom>
                            <div className="service-box">
                                <div className="h5 font-weight-bold old-font">
                                <svg fill="#cdba6d" width="24" height="24" viewBox="0 0 24 24"><path d="M10 8h-5v-1h5v1zm0 1h-5v1h5v-1zm0 2h-5v1h5v-1zm-2 2h-3v1h3v-1zm10.692-3.939c-.628-.436-.544-.327-.782-1.034-.099-.295-.384-.496-.705-.496h-.003c-.773.003-.64.044-1.265-.394-.129-.092-.283-.137-.437-.137s-.308.045-.438.137c-.629.442-.492.397-1.265.394h-.003c-.321 0-.606.201-.705.496-.238.71-.156.6-.781 1.034-.198.137-.308.353-.308.578l.037.222c.242.708.242.572 0 1.278l-.037.222c0 .224.11.441.309.578.625.434.545.325.781 1.033.099.296.384.495.705.495h.003c.773-.003.64-.044 1.265.394.129.093.283.139.437.139s.308-.046.438-.138c.625-.438.49-.397 1.265-.394h.003c.321 0 .606-.199.705-.495.238-.708.154-.599.782-1.033.197-.137.307-.355.307-.579l-.037-.222c-.242-.709-.24-.573 0-1.278l.037-.222c0-.225-.11-.443-.308-.578zm-3.192 3.189c-.967 0-1.75-.784-1.75-1.75 0-.967.783-1.751 1.75-1.751s1.75.784 1.75 1.751c0 .966-.783 1.75-1.75 1.75zm1.241 2.758l.021-.008h1.238v7l-2.479-1.499-2.521 1.499v-7h1.231c.415.291.69.5 1.269.5.484 0 .931-.203 1.241-.492zm-16.741-13.008v17h11v-2h-9v-13h20v13h-2v2h4v-17h-24z"/></svg>
                                <br/><br/>
                                Certification Mark Registration
                                </div>
                                <br/>
                                <div className="h6">
                                  
                                </div>
                            </div>
                        </Zoom>
                        </div>
                    </div>
                </div>
                <div className="space-100"></div>
                <div className="space-100"></div>
            </div>

        </>
    )
}
