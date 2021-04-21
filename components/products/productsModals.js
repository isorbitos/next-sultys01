import React from 'react'
import Image from 'next/image'

const ProductsModals = () => (
    <div>
        <div className="portfolio-modal modal fade" id="portfolioModal1" tab="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src="img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project Details Go Here--> */}
                                    <h2 className="text-uppercase">OBUOLIŲ-KRIAUŠIŲ SULTYS</h2>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/pexels-ylanite-koppens-5564404-full.jpg" alt="" />
                                    <p>80 % obuolių ir 20 % kriaušių sultys</p>
                                    <p>Pakaitintos 78º-80º C temperatūros</p>
                                    <p>Be cukraus</p>
                                    <p>Be pridėtinio vandens</p>   
                                    <ul className="list-inline">
                                        <li>Galioja iki: 2021 10 mėn.</li>
                                        <li>Talpa: 5 l.</li>
                                        <li>Skonis: pačios saldžiausios ir populiariausios mūsų sultys</li>
                                    </ul>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                                        <i className="fas fa-times mr-1"></i>
                                Close Project
                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Modal 2--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal2" tab="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project Details Go Here--> */}
                                    <h2 className="text-uppercase">OBUOLIŲ SULTYS</h2>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/pexels-polina-tankilevitch-4110507-full.jpg" alt="" />
                                    <p>100 % obuolių sultys</p>
                                    <p>Pakaitintos 78º-80º C temperatūros</p>
                                    <p>Be cukraus</p>
                                    <p>Be pridėtinio vandens</p>   
                                    <ul className="list-inline">
                                        <li>Galioja iki: 2021 10 mėn.</li>
                                        <li>Talpa: 5 l.</li>
                                        <li>Skonis: saldžiarūgščių ir saldžių obuolių</li>
                                    </ul>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                                        <i className="fas fa-times mr-1"></i>
                                Close Project
                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Modal 3--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal3" tab="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src="img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project Details Go Here--> */}
                                    <h2 className="text-uppercase">ANTANINIŲ OBUOLIŲ SULTYS</h2>
                                    <div className="img-fluid d-block mx-auto">
                                        <Image src={`/img/products/antaniniai.jpg`} alt="antaniniai obuoliai"  height="470" width="700"/>
                                    </div>
                                    
                                    <p>100 %  antaninių obuolių sultys</p>
                                    <p>Pakaitintos 78º-80º C temperatūros</p>
                                    <p>Be cukraus</p>
                                    <p>Be pridėtinio vandens</p>   
                                    <ul className="list-inline">
                                        <li>Galioja iki: 2021 10 mėn.</li>
                                        <li>Talpa: 5 l.</li>
                                        <li>Skonis: saldžiarūgščių ir saldžių obuolių</li>
                                    </ul>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                                        <i className="fas fa-times mr-1"></i>
                                Close Project
                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Modal 4--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal4" tab="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project Details Go Here--> */}
                                    <h2 className="text-uppercase">OBUOLIŲ-VYNUOGIŲ SULTYS</h2>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/pexels-pixabay-162672-full.jpg" alt="" />
                                    <p>90 % obuolių ir 10 % vynuogių sultys</p>
                                    <p>Pakaitintos 78º-80º C temperatūros</p>
                                    <p>Be cukraus</p>
                                    <p>Be pridėtinio vandens</p>  
                                    <ul className="list-inline">
                                        <li>Galioja iki: 2021 10 mėn.</li>
                                        <li>Talpa: 5 l.</li>
                                        <li>Skonis: lietuviškų vynuogių gaiva persipynusi su saldžiarūgščiais obuoliais</li>
                                    </ul>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                                        <i className="fas fa-times mr-1"></i>
                                Close Project
                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Modal 5--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal5" tab="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project Details Go Here--> */}
                                    <h2 className="text-uppercase">OBUOLIŲ-MOLIŪGŲ SULTYS</h2>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/pexels-kristina-paukshtite-112353-full.jpg" alt="" />
                                    <p>90 % obuolių ir 10 % moliūgų sultys</p>
                                    <p>Pakaitintos 78º-80º C temperatūros</p>
                                    <p>Be cukraus</p>
                                    <p>Be pridėtinio vandens</p>   
                                    <ul className="list-inline">
                                        <li>Galioja iki: 2021 10 mėn.</li>
                                        <li>Talpa: 5 l.</li>
                                        <li>Skonis: gaivus, saldžiarūgščių ir saldžių obuolių.</li>
                                    </ul>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                                        <i className="fas fa-times mr-1"></i>
                                Close Project
                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Modal 6--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal6" tab="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project Details Go Here--> */}
                                    <h2 className="text-uppercase">OBUOLIŲ-MOLIŪGŲ-MORKŲ SULTYS</h2>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/pexels-susanne-jutzeler-1366883-full.jpg" alt="" />
                                    <p>85 % obuolių , 10 % moliūgų ir 5 % morkų sultys</p>
                                    <p>Pakaitintos 78º-80º C temperatūros</p>
                                    <p>Be cukraus</p>
                                    <p>Be pridėtinio vandens</p>   
                                    <ul className="list-inline">
                                        <li>Galioja iki: 2021 10 mėn.</li>
                                        <li>Talpa: 5 l.</li>
                                        <li>Skonis: saldus, gaivus, su maloniu morkų poskoniu.</li>
                                    </ul>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                                        <i className="fas fa-times mr-1"></i>
                                Close Project
                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default ProductsModals;