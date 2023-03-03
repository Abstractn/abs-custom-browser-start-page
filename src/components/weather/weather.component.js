var Weather = function () {
  this._init = (componentNode) => {
    this.node = componentNode;
    this.chartNode = this.node.querySelector('.weather-chart');
    this.windsChartNode = this.node.querySelector('.weather-chart-winds');
    this.windsChartIconsWrapperNode = this.node.querySelector('.weather-chart-winds--icons');
    this.windsChartLabelsWrapperNode = this.node.querySelector('.weather-chart-winds--labels');
    this.chartMode = WeatherChartMode.TEMP;
    this.chartData = {};
    return this;
  }
  
  this._ready = () => {
    this.retrieveWeatherData();
    this.assignButtonEvents();
  }

  this.retrieveWeatherData = () => {
    //const weatherApiBaseUrl = 'http://api.weatherapi.com/v1/forecast.json';
    //const weatherApiParams = 'key=9b33d5eb16b648eab4f144457232002&q=39.2888846,9.0039813&days=4&aqi=no&alerts=no';
    const weatherApiParams = {
      key: '9b33d5eb16b648eab4f144457232002',
      q: '39.2888846,9.0039813',
      days: '7',
      aqi: 'no',
      alerts: 'no'
    };
    
    //disabled for local test
    //const weatherApiCompleteUrl = 'https://api.weatherapi.com/v1/forecast.json?key=9b33d5eb16b648eab4f144457232002&q=39.2888846,9.0039813&days=4&aqi=no&alerts=no';
    const weatherApiCompleteUrl = '';//MOCK
    fetch(weatherApiCompleteUrl).then((response) => {
      if(response.status === 200) {
        return _mock_weather;//MOCK
        return response.json();
      } else {
        console.error('weather service error: ', response);
      }
    }).then((data) => {
      this.chartData = this.processWeatherResponse(data);
      this.printChart(this.chartData, this.chartMode);
    });
  }

  /**
   * @param {WeatherServiceResponse} responseData
   * @returns {ChartData}
  */
  this.processWeatherResponse = (responseData) => {
    /** @type {ChartData} */
    let chartData = {
      temperatures: {
        labels: [],
        dataset: []
      },
      rains: {
        labels: [],
        dataset: []
      },
      winds: {
        labels: [],
        dataset: []
      }
    };
    
    //responseData.forecast.forecastday[3].hour[23];
    /* responseData.forecast.forecastday.forEach((day, dayIndex) => {
      const dayTimestamp = day.date_epoch * 1000;
  
      day.hour.forEach((hour) => {
        const hourTimestamp = hour.time_epoch * 1000;
        const hourTemperature = hour.temp_c;
        const hourHumidity = hour.humidity;
        const hourWindDirection = hour.wind_degree;
        const hourWindSpeed = hour.wind_kph;
        chartData.labels.push(dayjs(hourTimestamp).format('HH'));
        chartData.dataset.push(Math.floor(hourTemperature));
      });
    }); */
  
    responseData.forecast.forecastday[0].hour.forEach((hour) => {
      const hourTimestamp = hour.time_epoch * 1000;
      const hourTemperature = hour.temp_c;
      const hourRain = hour.chance_of_rain;
      const hourWindDirection = hour.wind_degree;
      const hourWindSpeed = hour.wind_kph;

      chartData.temperatures.labels.push(dayjs(hourTimestamp).format('HH'));
      chartData.temperatures.dataset.push(Math.floor(hourTemperature));

      chartData.rains.labels.push(dayjs(hourTimestamp).format('HH'));
      chartData.rains.dataset.push(Math.floor(hourRain));

      chartData.winds.labels.push(dayjs(hourTimestamp).format('HH'));
      chartData.winds.dataset.push({
        speed: hourWindSpeed,
        direction: hourWindDirection
      });
    });

    return chartData;
  }
  
  /**
   * @param {ChartData} chartData
   * @param {WeatherChartMode} chartMode
  */
  this.printChart = (chartData, chartMode) => {
    const selectedChartDatasetFromMode =
      chartMode === WeatherChartMode.TEMP ? chartData.temperatures :
      chartMode === WeatherChartMode.RAIN ? chartData.rains :
      chartMode === WeatherChartMode.WIND ? chartData.winds :
      [];

    new Chartist.Line(this.chartNode, {
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
      labels: selectedChartDatasetFromMode.dataset,
      series: [selectedChartDatasetFromMode.dataset]
    }, WEATHER_CHART_CONFIG);
  }

  /**
   * @param {ChartData} chartData
  */
  this.printWindsChart = (chartData) => {
    console.log(chartData.winds.dataset);

    chartData.winds.dataset.forEach(hour => {
      hour.speed;
      hour.direction;

      this.windsChartIconsWrapperNode.innerHTML = '';
      this.windsChartLabelsWrapperNode.innerHTML = '';

      //TODO generate arrow-icon nodes
      //TODO apply variable icon size with some sort of equation and css scaling
      //TODO rotate arrow icon with css transform:rotate() using {hour.direction} degrees
    });
  }

  this.assignButtonEvents = () => {
    const weatherButtons = this.node.querySelectorAll('.weather-widget .weather-widget-tab');
    weatherButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const eventNode = event.target;
        const activeButton = this.node.querySelector('.weather-widget .weather-widget-tab.active');
        activeButton.classList.remove('active');
        eventNode.classList.add('active');
        this.chartMode = eventNode.getAttribute('data-chart-mode');
        this.chartNode.setAttribute('data-chart-mode', this.chartMode);
        if(this.chartMode === WeatherChartMode.WIND) {
          this.windsChartNode.classList.add('active');
          this.printWindsChart(this.chartData);
        } else {
          this.windsChartNode.classList.remove('active');
          this.printChart(this.chartData, this.chartMode);
        }
      });
    });
  }
}
componentManager.registerComponent('weather', Weather);