import { useState } from 'react';
import ReactMapGL, {Marker,Popup} from 'react-map-gl';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"

function Mapboxgl() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "400px",
    latitude: 55.036631,
    longitude: 24.704114,
    zoom: 14
  });

  const [isClicked, setIsClicked] = useState(false)
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.mapbox_token}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      <Marker latitude={55.036631} longitude={24.704114}>
        <button onClick={(e)=>{
          e.preventDefault();
          setIsClicked(true)
        }}>
        <FontAwesomeIcon icon={faMapMarkerAlt}/>
        </button>
        {/* {isClicked && <Popup latitude={55.036} longitude={24.704}>
          <div>
            Naturalios Sultys
          </div>
          </Popup>} */}
       
      </Marker>
    </ReactMapGL>
  );
}

export default Mapboxgl;

