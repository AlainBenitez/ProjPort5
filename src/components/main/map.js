import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'


const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 28.596556, lng: -81.301346 },
    zoom: 15
  }
render() {
    return (
      <div className='google-map' style={styles.container}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCy9Zo2nvaCsBLG8MUfO8Xz1AKr_GLD4uU'  }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 28.596556 }
            lng={ -81.301346 }
            text={ "Helllllloooooooooooooo" }
          />
        </GoogleMapReact>
      </div>
    )
  }
}

const styles = {
    container: {
      width: '500px',
      height: '500px',
      border: '2px solid black'
    }
  }