import {
  FiCloud,
  FiThermometer,
  FiFeather,
  FiActivity,
  FiDroplet,
  FiTarget,
  FiSun,
  FiCloudSnow,
  FiMapPin,
  FiCrosshair,
  FiWind
} from 'react-icons/fi'

import InfoItem from './InfoItem'
import Location from './Location'
import { ContainerProps } from '../types/Types.type'
import ToggleButton from './ToggleButton'

const Container = ({ weatherData }: ContainerProps) => {
  const {
    location: { region, country },
    current: {
      temp_c: tempC,
      condition: { text: conditionText },
      wind_kph: windSpeed,
      wind_degree: windDeg,
      wind_dir: windDir,
      air_quality: { co, no2, o3, so2 },
      precip_mm: precipitate,
      humidity,
      uv,
      cloud,
      pressure_mb: pressure,
      vis_km: visibility
    }
  } = weatherData

  return (
    <>
      {weatherData && (
        <div className="container">
          <Location icon={FiMapPin} value={{ region, country }} />
          <InfoItem
            icon={FiThermometer}
            heading="Temp"
            value={`${Math.trunc(tempC)}`}
            type="temp"
            addMarginBottom={15}
          />
          <InfoItem
            icon={FiFeather}
            heading="Condition"
            value={conditionText}
            type="normal"
          />
          <InfoItem
            icon={FiWind}
            heading="Wind"
            value={{
              speed: `${windSpeed.toFixed(1)} Kph`,
              deg: `${windDeg}°`,
              dir: `${windDir}`
            }}
            type="multiple"
          />
          <InfoItem
            icon={FiActivity}
            heading="Air Quality"
            value={{
              co: Number(co).toFixed(1),
              no2: Number(no2).toFixed(1),
              o3: Number(o3).toFixed(1),
              so2: Number(so2).toFixed(1)
            }}
            type="multiple"
          />
          <InfoItem
            icon={FiCloudSnow}
            heading="Precipitate"
            value={`${precipitate} mm`}
            type="normal"
          />
          <InfoItem
            icon={FiDroplet}
            heading="Humidity"
            value={`${humidity}%`}
            type="normal"
          />
          <InfoItem
            icon={FiSun}
            heading="UV Index"
            value={uv.toFixed(1)}
            type="normal"
          />
          <InfoItem
            icon={FiCloud}
            heading="Cloud"
            value={`${cloud}%`}
            type="normal"
          />
          <InfoItem
            icon={FiTarget}
            heading="Pressure"
            value={`${pressure.toFixed(1)} mb`}
            type="normal"
          />
          <InfoItem
            icon={FiCrosshair}
            heading="Visibility"
            value={`${visibility.toFixed(1)} km`}
            type="normal"
            addMarginBottom={30}
          />

          <ToggleButton />

          <p className="powered-by">
            Powered by{' '}
            <a
              className="powered-by__link"
              href="https://weatherapi.com"
              target="_blank"
              rel="noreferrer noopener">
              Weatherapi.com
            </a>
          </p>
        </div>
      )}
    </>
  )
}

export default Container
