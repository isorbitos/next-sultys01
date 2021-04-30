import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const NewMap = withScriptjs(withGoogleMap((props) => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 55.03657, lng: 24.70356 }}>
    <Marker position={{ lat: 55.03657, lng: 24.70356 }} />
  </GoogleMap>
)));

export default NewMap;


// 55.036576747425116, 24.703562503951236
