//MOCK weather service
const _mock_weather = {
  location: {
    name: "London",
    region: "City of London, Greater London",
    country: "United Kingdom",
    lat: 51.52,
    lon: -0.11,
    tz_id: "Europe/London",
    localtime_epoch: 1677114982,
    localtime: "2023-02-23 1:16"
  },
  current: {
    condition: {

    },
    uv: 1.0
  },
  forecast: {
    forecastday: [
      {
        day: {
          totalsnow_cm: 0.0,
          condition: {

          }
        },
        astro: {
          is_moon_up: 0,
          is_sun_up: 0
        },
        hour: [
          {
            time_epoch: 1677110400,
            temp_c: 4.9,
            is_day: 0,
            condition: {

            },
            wind_kph: 12.2,
            wind_degree: 353,
            precip_mm: 0.0,
            humidity: 91,
            cloud: 100,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          },
          {
            time_epoch: 1677114000,
            temp_c: 4.7,
            is_day: 0,
            condition: {

            },
            wind_kph: 14.4,
            wind_degree: 354,
            precip_mm: 0.0,
            humidity: 90,
            cloud: 99,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          },
          {
            time_epoch: 1677117600,
            temp_c: 5.3,
            is_day: 0,
            condition: {

            },
            wind_kph: 15.8,
            wind_degree: 359,
            precip_mm: 0.0,
            humidity: 83,
            cloud: 100,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          },
          {
            time_epoch: 1677121200,
            temp_c: 5.5,
            is_day: 0,
            condition: {

            },
            wind_kph: 15.1,
            wind_degree: 5,
            precip_mm: 0.1,
            humidity: 82,
            cloud: 100,
            will_it_rain: 0,
            chance_of_rain: 66,
            will_it_snow: 0
          },
          {
            time_epoch: 1677124800,
            temp_c: 5.6,
            is_day: 0,
            condition: {

            },
            wind_kph: 14.4,
            wind_degree: 6,
            precip_mm: 0.0,
            humidity: 86,
            cloud: 100,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          },
          {
            time_epoch: 1677128400,
            temp_c: 5.8,
            is_day: 0,
            condition: {

            },
            wind_kph: 16.9,
            wind_degree: 6,
            precip_mm: 0.0,
            humidity: 84,
            cloud: 100,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          },
          {
            time_epoch: 1677132000,
            temp_c: 5.5,
            is_day: 0,
            condition: {

            },
            wind_kph: 16.6,
            wind_degree: 8,
            precip_mm: 0.3,
            humidity: 90,
            cloud: 100,
            will_it_rain: 1,
            chance_of_rain: 76,
            will_it_snow: 0
          },
          {
            time_epoch: 1677135600,
            temp_c: 5.4,
            is_day: 1,
            condition: {

            },
            wind_kph: 17.6,
            wind_degree: 14,
            precip_mm: 0.1,
            humidity: 90,
            cloud: 100,
            will_it_rain: 1,
            chance_of_rain: 79,
            will_it_snow: 0
          },
          {
            time_epoch: 1677139200,
            temp_c: 5.4,
            is_day: 1,
            condition: {

            },
            wind_kph: 19.8,
            wind_degree: 13,
            precip_mm: 0.1,
            humidity: 88,
            cloud: 100,
            will_it_rain: 0,
            chance_of_rain: 66,
            will_it_snow: 0
          },
          {
            time_epoch: 1677142800,
            temp_c: 5.7,
            is_day: 1,
            condition: {

            },
            wind_kph: 20.5,
            wind_degree: 12,
            precip_mm: 0.2,
            humidity: 81,
            cloud: 100,
            will_it_rain: 1,
            chance_of_rain: 74,
            will_it_snow: 0
          },
          {
            time_epoch: 1677146400,
            temp_c: 5.8,
            is_day: 1,
            condition: {

            },
            wind_kph: 20.9,
            wind_degree: 15,
            precip_mm: 0.1,
            humidity: 79,
            cloud: 98,
            will_it_rain: 0,
            chance_of_rain: 61,
            will_it_snow: 0
          },
          {
            time_epoch: 1677150000,
            temp_c: 6.8,
            is_day: 1,
            condition: {

            },
            wind_kph: 20.9,
            wind_degree: 22,
            precip_mm: 0.0,
            humidity: 72,
            cloud: 89,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          },
          {
            time_epoch: 1677153600,
            temp_c: 7.5,
            is_day: 1,
            condition: {

            },
            wind_kph: 20.2,
            wind_degree: 24,
            precip_mm: 0.2,
            humidity: 66,
            cloud: 100,
            will_it_rain: 0,
            chance_of_rain: 64,
            will_it_snow: 0
          },
          {
            time_epoch: 1677157200,
            temp_c: 8.1,
            is_day: 1,
            condition: {

            },
            wind_kph: 19.1,
            wind_degree: 26,
            precip_mm: 0.0,
            humidity: 60,
            cloud: 99,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          },
          {
            time_epoch: 1677160800,
            temp_c: 7.8,
            is_day: 1,
            condition: {

            },
            wind_kph: 17.6,
            wind_degree: 17,
            precip_mm: 0.0,
            humidity: 58,
            cloud: 100,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          },
          {
            time_epoch: 1677164400,
            temp_c: 7.2,
            is_day: 1,
            condition: {

            },
            wind_kph: 18.0,
            wind_degree: 14,
            precip_mm: 0.1,
            humidity: 61,
            cloud: 90,
            will_it_rain: 0,
            chance_of_rain: 62,
            will_it_snow: 0
          },
          {
            time_epoch: 1677168000,
            temp_c: 7.3,
            is_day: 1,
            condition: {

            },
            wind_kph: 16.6,
            wind_degree: 17,
            precip_mm: 0.0,
            humidity: 58,
            cloud: 64,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          },
          {
            time_epoch: 1677171600,
            temp_c: 9.5,
            is_day: 1,
            condition: {

            },
            wind_kph: 14.4,
            wind_degree: 17,
            precip_mm: 0.0,
            humidity: 57,
            cloud: 0,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          },
          {
            time_epoch: 1677175200,
            temp_c: 8.4,
            is_day: 0,
            condition: {

            },
            wind_kph: 12.6,
            wind_degree: 16,
            precip_mm: 0.1,
            humidity: 61,
            cloud: 76,
            will_it_rain: 1,
            chance_of_rain: 80,
            will_it_snow: 0
          },
          {
            time_epoch: 1677178800,
            temp_c: 7.6,
            is_day: 0,
            condition: {

            },
            wind_kph: 10.8,
            wind_degree: 18,
            precip_mm: 0.0,
            humidity: 62,
            cloud: 5,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          },
          {
            time_epoch: 1677182400,
            temp_c: 4.6,
            is_day: 0,
            condition: {

            },
            wind_kph: 8.6,
            wind_degree: 13,
            precip_mm: 0.0,
            humidity: 64,
            cloud: 7,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          },
          {
            time_epoch: 1677186000,
            temp_c: 4.2,
            is_day: 0,
            condition: {

            },
            wind_kph: 5.8,
            wind_degree: 0,
            precip_mm: 0.0,
            humidity: 65,
            cloud: 32,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          },
          {
            time_epoch: 1677189600,
            temp_c: 3.9,
            is_day: 0,
            condition: {

            },
            wind_kph: 4.7,
            wind_degree: 336,
            precip_mm: 0.0,
            humidity: 67,
            cloud: 100,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          },
          {
            time_epoch: 1677193200,
            temp_c: 3.9,
            is_day: 0,
            condition: {

            },
            wind_kph: 4.0,
            wind_degree: 296,
            precip_mm: 0.0,
            humidity: 68,
            cloud: 100,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0
          }
        ]
      }
    ]
  }
};