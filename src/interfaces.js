/** WeatherServiceResponse interface
 * @typedef {Object} WeatherServiceResponse
 * @property {Object} location
 *  @property {string} location.name
 *  @property {string} location.region
 *  @property {string} location.country
 *  @property {number} location.lat
 *  @property {number} location.lon
 *  @property {string} location.tz_id
 *  @property {number} location.localtime_epoch - seconds epoch, eg 1677798000
 *  @property {string} location.localtime - eg "2023-02-23 1:16"
 * @property {Object} current
 *  @property {Object} current.condition
 *  @property {number} current.uv
 * @property {Object} forecast
 *  @property {Object[]} forecast.forecastday
 *   @property {Object} forecast.forecastday.day
 *    @property {number} forecast.forecastday.day.totalsnow_cm
 *    @property {Object} forecast.forecastday.day.condition
 *   @property {Object} forecast.forecastday.astro
 *    @property {number} forecast.forecastday.astro.is_moon_up
 *    @property {number} forecast.forecastday.astro.is_sun_up
 *   @property {Object[]} forecast.forecastday.hour
 *    @property {number} forecast.forecastday.hour.time_epoch - seconds epoch, eg 1677798000
 *    @property {number} forecast.forecastday.hour.temp_c
 *    @property {Object} forecast.forecastday.hour.condition
 *    @property {number} forecast.forecastday.hour.wind_kph
 *    @property {number} forecast.forecastday.hour.wind_degree
 *    @property {number} forecast.forecastday.hour.humidity
 *    @property {number} forecast.forecastday.hour.chance_of_rain
 *    @property {number} forecast.forecastday.hour.chance_of_snow
 */

/** ChartTemperaturesData interface
 * @typedef {Object} ChartTemperaturesData
 * @property {Array<string>} labels
 * @property {Array<number>} dataset Celsius degrees
 */

/** ChartRainsData interface
 * @typedef {Object} ChartRainsData
 * @property {Array<string>} labels
 * @property {Array<number>} dataset percentages
 */

/** ChartWindsData interface
 * @typedef {Object} ChartWindsData
 * @property {Array<string>} labels
 * @property {Object[]} dataset
 *  @property {number} dataset.speed km/s
 *  @property {number} dataset.direction degrees
 */

/** ChartData interface
 * @typedef {Object} ChartData
 * @property {ChartTemperaturesData} temperatures
 * @property {ChartRainsData} rains
 * @property {ChartWindsData} winds
*/


/* let chartData = {
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
}; */