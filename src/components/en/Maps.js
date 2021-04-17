import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import "./Maps.css";

const mapStyles = {
  position: "relative",
  width: "100%",
  height: "30vh",
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div
        className="container inMaps"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          initialCenter={{
            lat: 42.054747,
            lng: 25.591243,
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Счетоводна Кантора 'СВЕТОВИТ61 ООД'"}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
        <button className="btn btn-primary" style={{ bottom: "0" }}>
          <i className="fas fa-directions"></i>
          <a
            href="http://www.google.com/maps/place/42.054747,25.591243"
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            {" "}
            Direction
          </a>
        </button>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.MAPS_KEY,
})(MapContainer);
