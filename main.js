function processWeatherResponse(responseData) {
  let chartData = {
    labels: [],
    dataset: []
  };
  //console.log(responseData);
  
  //responseData.forecast.forecastday[3].hour[23];
  /* responseData.forecast.forecastday.forEach((day, dayIndex) => {
    const dayTimestamp = day.date_epoch * 1000;

    day.hour.forEach((hour) => {
      const hourTimestamp = hour.time_epoch * 1000;
      const hourTemperature = hour.temp_c;
      const hourHumidity = hour.humidity;
      const hourWindDirection = hour.wind_degree;
      const hourWindSpeed = hour.wind_kps;
      chartData.labels.push(dayjs(hourTimestamp).format('HH'));
      chartData.dataset.push(Math.floor(hourTemperature));
    });
  }); */

  responseData.forecast.forecastday[0].hour.forEach((hour) => {
    const hourTimestamp = hour.time_epoch * 1000;
    const hourTemperature = hour.temp_c;
    const hourHumidity = hour.humidity;
    const hourWindDirection = hour.wind_degree;
    const hourWindSpeed = hour.wind_kps;
    chartData.labels.push(dayjs(hourTimestamp).format('HH'));
    chartData.dataset.push(Math.floor(hourTemperature));
  });

  //console.log(chartData);
  printChart(chartData);
}

function printChart(chartData) {
  /* const myData = [
    {date: '2013-05-01', frequency: 99},
    {date: '2013-05-02', frequency: 24}
  ]; */

  new Chartist.Line('.weather-chart', {
    //labels: chartData.labels,
    /* labels: [
      '00',
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23'
    ], */
    /* labels: [
      '',
      '01',
      '',
      '03',
      '',
      '05',
      '',
      '07',
      '',
      '09',
      '',
      '11',
      '',
      '13',
      '',
      '15',
      '',
      '17',
      '',
      '19',
      '',
      '21',
      '',
      '23'
    ], */
    labels: chartData.dataset,
    series: [chartData.dataset]
  }, {
    axisX: {
      //offset: 0,
      //showLabel: false,
      showGrid: false,
      labelOffset: {
        x: 0,
        y: -150,
      },
    },
    axisY: {
      offset: 0,
      showLabel: false,
      showGrid: false,
    },
    low: 0,
    showArea: true,
    showPoint: false,
    //lineSmooth: Chartist.Interpolation.cardinal({ tension: 1 }),
    //width: '100%',
    //height: '100%',
    lineSmooth: true,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: -30,
      left: 0
    },
    fullWidth: true,
  });

  setTimeout(()=>{
    /* const svgNode = document.querySelector('.weather-chart .ct-chart-line');
    const defNode = document.createElement('defs'); */

    /* const linearGradientNode = document.createElement('linearGradient');
    linearGradientNode.setAttribute('id', 'weather-temperature-background-gradient');
    linearGradientNode.setAttribute('x1', '0%');
    linearGradientNode.setAttribute('x2', '0%');
    linearGradientNode.setAttribute('y1', '100%');
    linearGradientNode.setAttribute('y2', '100%');
    const stopNodeStart = document.createElement('stop');
    stopNodeStart.setAttribute('offset', '0%');
    stopNodeStart.setAttribute('style', 'stop-color:rgb(255,255,0);stop-opacity:1');
    const stopNodeEnd = document.createElement('stop');
    stopNodeEnd.setAttribute('offset', '100%');
    stopNodeEnd.setAttribute('style', 'stop-color:rgb(255,0,0);stop-opacity:1');
    linearGradientNode.appendChild(stopNodeStart);
    linearGradientNode.appendChild(stopNodeEnd);
    defNode.appendChild(linearGradientNode); */

    /* defNode.innerHTML = `
      <linearGradient id="weather-temperature-background-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"></stop>
        <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"></stop>
      </linearGradient>
    `; */

    /* svgNode.prepend(defNode);
    document.querySelector('.ct-line').setAttribute('fill', 'url(#weather-temperature-background-gradient)'); */
  },0);
}

function retrieveWeatherData() {
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
    processWeatherResponse(data);
    
    //TODO implement D3 chart library
    //https://www.zingchart.com/gallery/area-line-chart
    //https://codepen.io/idan/pen/LYVGxp
  });
}

function init() {
  retrieveWeatherData();
  //printChart();
}init();