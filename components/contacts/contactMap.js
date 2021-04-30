import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPhone, faEnvelope, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"
import Mapboxgl from './mapBoxGl';

const ContactMap = () => (

    <div >
        <div className ="row">
            <Mapboxgl />
        </div>
    <br />
        <div className="row text-center map-info">
            <div className="col-md-4">
                <a className="btn-floating blue accent-1"><FontAwesomeIcon icon={faMapMarkerAlt}/></a>
                <p>Sultis pristatome Vilniuje, dėl kitų miestų parašykite mums žinutę</p>
            </div>

            <div className="col-md-4">
                <a className="btn-floating blue accent-1"><FontAwesomeIcon icon={faPhone}/></a>
                <p>+37067485711</p>
                <p>Pirmadieniais - Sekmadieniais</p>
            </div>

            <div className="col-md-4">
                <a className="btn-floating blue accent-1"><FontAwesomeIcon icon={faEnvelope}/></a>
                <p>info@naturaliossultys.lt</p>
            </div>
        </div>
    </div>

);

export default ContactMap;