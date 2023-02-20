function test() {
  //const weatherApiBaseUrl = 'http://api.weatherapi.com/v1/forecast.json';
  //const weatherApiParams = 'key=9b33d5eb16b648eab4f144457232002&q=39.2888846,9.0039813&days=4&aqi=no&alerts=no';
  /*const weatherApiParams = {
    key: '9b33d5eb16b648eab4f144457232002',
    q: '39.2888846,9.0039813',
    days: '4',
    aqi: 'no',
    alerts: 'no'
  };*/
  
  //disabled for local test
  //const weatherApiCompleteUrl = 'https://api.weatherapi.com/v1/forecast.json?key=9b33d5eb16b648eab4f144457232002&q=39.2888846,9.0039813&days=4&aqi=no&alerts=no';
  //MOCK
  const weatherApiCompleteUrl = '';
  fetch(weatherApiCompleteUrl).then((response) => {
    if(response.status === 200) {
      //MOCK
      return _mock_weather;
      return response.json();
    } else {
      console.error('weather service error: ', response);
    }
  }).then((data) => {
    console.log(data);
    //data.forecast.forecastday[3].hour[23]
    
    //TODO implement D3 chart library
    //https://www.zingchart.com/gallery/area-line-chart
    //https://codepen.io/idan/pen/LYVGxp
  });
}

function init() {
  test();
}init();