import Image from 'next/image'

function Product(props){

    const {id, name, picture } = props.juice
    const idName="#"+id

    return(
        <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href={idName}>
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <div className="img-fluid">
                                <Image src={`/img/products/${picture}`} alt={name}  height="300" width="400"/>
                                </div>
                                
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading text-uppercase">{name}</div>
                            </div>
                        </div>
             </div>
    )
};

export default Product;