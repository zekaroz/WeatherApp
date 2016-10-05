import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{

  renderWeather(cityData){
    const cityName = cityData.city.name;
    const temps = cityData.list.map( weather => weather.main.temp);
    const humidities = cityData.list.map( weather => weather.main.humidity);
    const pressures = cityData.list.map( weather => weather.main.pressure);

    const width = 180;
    const height = 120;

      console.log(temps);

    return (
        <tr key={cityName}>
          <td>
            {cityName}
          </td>
          <td> <Chart color="orange" units="K" data={temps} width={width} height={height} /> </td>
          <td> <Chart color="green" units="hPa" data={pressures} width={width} height={height}/></td>
          <td> <Chart color="blue" units="%" data={humidities} width={width} height={height}/></td>
        </tr>
    ) ;
  }

  render(){

    if(!this.props.weather )
      return (<div>Search for a city...</div>);

      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>
                City
              </th>
              <th>
                Temperature (K)
              </th>
              <th>
                Pressure (hPa)
              </th>
              <th>
                Humidity (%)
              </th>
            </tr>
          </thead>
          <tbody>
              { this.props.weather.map(this.renderWeather) }
          </tbody>
        </table>

      );
  }
}

// with {weather} we are pulling just the
// weather from state parameter
function mapStateToProps(  {weather} ){
//    return { weather: state.weather }
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
