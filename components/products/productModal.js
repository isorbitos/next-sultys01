import Image from 'next/image'

function ProductModal(props){
    const {id, name, picture, taste, composition } = props.juice


    return(
        <div className="portfolio-modal modal fade" id={id} tab="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="close-modal" data-dismiss="modal"><img src="img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="modal-body">
                                {/* <!-- Project Details Go Here--> */}
                                <h2 className="text-uppercase">{name}</h2>
                                <div className="img-fluid d-block mx-auto">
                                    <Image src={`/img/products/${picture}`} alt={name}  height="470" width="700"/>
                                </div>
                                
                                <p>{composition}</p>
                                <p>Pakaitintos 78º-80º C temperatūros</p>
                                <p>Be cukraus</p>
                                <p>Be pridėtinio vandens</p>   
                                <ul className="list-inline">
                                    <li>Galioja iki: 2021 10 mėn.</li>
                                    <li>Talpa: 5 l.</li>
                                    <li>Skonis: {taste}</li>
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
    )      
    
};

export default ProductModal;