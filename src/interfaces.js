/** WeatherServiceResponse interface
 * @typedef {Object} WeatherServiceResponse
 * @property {Object} location
 *  @property {string} location.name
 *  @property {string} location.region
 *  @property {string} location.country
 *  @property {number} location.lat
 *  @property {number} location.lon
 *  @property {string} location.tz_id
 *  @property {Date} location.localtime_epoch
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
 *    @property {Date} forecast.forecastday.hour.time_epoch
 *    @property {number} forecast.forecastday.hour.temp_c
 *    @property {number} forecast.forecastday.hour.is_day
 *    @property {Object} forecast.forecastday.hour.condition
 *    @property {number} forecast.forecastday.hour.wind_kph
 *    @property {number} forecast.forecastday.hour.wind_degree
 *    @property {number} forecast.forecastday.hour.precip_mm
 *    @property {number} forecast.forecastday.hour.humidity
 *    @property {number} forecast.forecastday.hour.cloud
 *    @property {number} forecast.forecastday.hour.will_it_rain
 *    @property {number} forecast.forecastday.hour.chance_of_rain
 *    @property {number} forecast.forecastday.hour.will_it_snow
 */