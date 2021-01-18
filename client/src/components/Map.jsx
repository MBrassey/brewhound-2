import React from "react";
import GoogleMapReact from "google-map-react";
import MapPoint from "./MapPoint";
import MapEmoji from "./MapEmoji";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDau5v5tTs6axw_ZN0OZZzyntxGELn3kHY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
