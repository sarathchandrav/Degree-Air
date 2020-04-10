import axios from 'axios';


export default axios.create({
    baseURL: 'http://api.airpollutionapi.com/1.0/aqi?lat=28.7040590&lon=77.10249&APPID=h1v08vttjgi90hfgrn4o46ooa7'
})