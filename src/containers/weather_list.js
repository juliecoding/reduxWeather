import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp * 9/5 - 459.67)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        const {lat, lon} = cityData.city.coord

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color='blue' units="F" /></td>
                <td><Chart data={humidities} color='green' units="%" /></td>                
                <td><Chart data={pressures} color='grey' units="hPa" /></td>
            </tr>
        )

    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (in degrees Fahrenheit)</th>
                        <th>Humidity (%)</th>                                                
                        <th>Pressure (in HPA)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps ({weather}) {  //like const weather = state.weather
    return {weather}  //{weather} === {weather: weather}
}

// mapStateToProps(){
// 	return {
// 		callthiswhatever : weather	
// 	}
// }

export default connect(mapStateToProps)(WeatherList)