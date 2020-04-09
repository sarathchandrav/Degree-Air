import React from 'react';
import HomepageLayout from './HomepageLayout';
import {BrowserRouter, Route} from 'react-router-dom';
import MainPage from './MainPage';
import WeatherReport from './WeatherReport';
import AirQuality from './AirQuality';
import Header from './Header';
import inputLocationWeather from './inputLocationWeather';
import Hourly from './Hourly';
import Daily from './Daily';

const HomePage =() =>{
  return <div><HomepageLayout /></div>
}

const Mainpage =() =>{
  return <div><MainPage /></div>
}

function App() {
  return (
    <div>      
      <BrowserRouter>
      <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/Mainpage" exact component={Mainpage} />
        <Route path="/WeatherReport" exact component={WeatherReport} />
        <Route path="/AirQuality" exact component={AirQuality} />
        <Route path="/WeatherReport/Search/:cityname" component={inputLocationWeather} />
        <Route path="/WeatherReport/hourly/:cityname" component={Hourly} />
        <Route path="/WeatherReport/daily/:cityname" component={Daily} />
        {/* <Route path="/WeatherReport/today" component={Today} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
