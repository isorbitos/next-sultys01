import React from 'react'
import Image from 'next/image'

const Products = () =>(
    <section className="page-section bg-light" id="portfolio">
    <div className="container">
        <div className="text-center">
            <h2 className="section-heading text-uppercase">MŪSŲ SULTYS</h2>
        </div>
        <div className="row">

            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="assets/img/portfolio/pexels-ylanite-koppens-5564404.jpg" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">OBUOLIŲ-KRIAUŠIŲ SULTYS</div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <div className="img-fluid">
                        {/* <Image src={`/img/products/pexels-polina-tankilevitch-4110507.jpg`} alt="antaniniai obuoliai"  height="300" width="400"/> */}
                            <img  src="/img/products/pexels-polina-tankilevitch-4110507.jpg" alt="" />
                        </div>
                        
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">OBUOLIŲ SULTYS</div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <div className="img-fluid">
                        <Image src={`/img/products/antaniniai.jpg`} alt="antaniniai obuoliai"  height="300" width="400"/>
                        </div>
                        
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">ANTANINIŲ OBUOLIŲ SULTYS</div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="assets/img/portfolio/pexels-pixabay-162672.jpg" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">OBUOLIŲ-VYNUOGIŲ SULTYS</div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="assets/img/portfolio/pexels-kristina-paukshtite-112353.jpg" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">OBUOLIŲ-MOLIŪGŲ SULTYS</div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-sm-6">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="assets/img/portfolio/pexels-susanne-jutzeler-1366883.jpg" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">OBUOLIŲ-MOLIŪGŲ-MORKŲ SULTYS</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
);

export default Products; 