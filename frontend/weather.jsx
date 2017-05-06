import React from 'react';

class Weather extends React.Component{
  constructor(){
    super();

    this.state = {latitude: undefined, longitude: undefined, weather: {name: undefined, main: {temp: undefined}}};
  }

  componentDidMount(){
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = (response)=>{
      // console.log(response.target.response);
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        let weather = JSON.parse(response.target.response);
        this.setState({weather});
        console.log(weather);

      }
    };
    navigator.geolocation.getCurrentPosition((response) =>{
      let {latitude, longitude} = response.coords;
      this.state.latitude = latitude;
      this.state.longitude = longitude;
      httpRequest.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=f520e9058826fdd8e56a01ce8aff1a07`, true );
      httpRequest.send();
    });

  }



  render(){
    console.log(this.state);
    const name = this.state.weather.name;
    const temp = Math.floor((this.state.weather.main.temp - 273)*9/5 +32);


    return (
      <div className="weather">
      <ul>
        <li>{name}</li>
        <li>Temperature {temp}F</li>
      </ul>
    </div>
    );
  }
}

export default Weather;
