import React, {Component} from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {  //a way to make this 3rd party library work in React
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }
    render() {
        //this.refs.map
        return <div ref="map"/>
    }
}

export default GoogleMap