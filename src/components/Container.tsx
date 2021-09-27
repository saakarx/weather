import InfoItem from "./InfoItem";
import Location from "./Location";
import { ReactComponent as AirQualityIcon } from "../assets/air-quality-icon.svg";
import { ReactComponent as CloudIcon } from "../assets/cloud-icon.svg";
import { ReactComponent as ConditionIcon } from "../assets/condition-icon.svg";
import { ReactComponent as HumidityIcon } from "../assets/humidity-icon.svg";
import { ReactComponent as LocationIcon } from "../assets/location-icon.svg";
import { ReactComponent as PrecipitateIcon } from "../assets/precipitate-icon.svg";
import { ReactComponent as PressureIcon } from "../assets/pressure-icon.svg";
import { ReactComponent as ThermometerIcon } from "../assets/thermometer-icon.svg";
import { ReactComponent as UVIcon } from "../assets/uv-icon.svg";
import { ReactComponent as VisbilityIcon } from "../assets/visibility-icon.svg";
import { ReactComponent as WindIcon } from "../assets/wind-icon.svg";
import { ContainerProps } from "../types/Types.type";

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
      vis_km: visibility,
    },
  } = weatherData;

  return (
    <>
      {weatherData && (
        <div className="container">
          <Location icon={<LocationIcon />} value={{ region, country }} />
          <InfoItem
            icon={ThermometerIcon}
            heading="Temp"
            value={`${tempC.toFixed(1)}`}
            type="temp"
            addMarginBottom={15}
          />
          <InfoItem
            icon={ConditionIcon}
            heading="Condition"
            value={conditionText}
            type="normal"
          />
          <InfoItem
            icon={WindIcon}
            heading="Wind"
            value={{
              speed: `${windSpeed.toFixed(1)} Kph`,
              deg: `${windDeg}°`,
              dir: `${windDir}`,
            }}
            type="multiple"
          />
          <InfoItem
            icon={AirQualityIcon}
            heading="Air Quality"
            value={{
              co: Number(co).toFixed(1),
              no2: Number(no2).toFixed(1),
              o3: Number(o3).toFixed(1),
              so2: Number(so2).toFixed(1),
            }}
            type="multiple"
          />
          <InfoItem
            icon={PrecipitateIcon}
            heading="Precipitate"
            value={`${precipitate} mm`}
            type="normal"
          />
          <InfoItem
            icon={HumidityIcon}
            heading="Humidity"
            value={`${humidity}%`}
            type="normal"
          />
          <InfoItem
            icon={UVIcon}
            heading="UV Index"
            value={uv.toFixed(1)}
            type="normal"
          />
          <InfoItem
            icon={CloudIcon}
            heading="Cloud"
            value={`${cloud}%`}
            type="normal"
          />
          <InfoItem
            icon={PressureIcon}
            heading="Pressure"
            value={`${pressure.toFixed(1)} mb`}
            type="normal"
          />
          <InfoItem
            icon={VisbilityIcon}
            heading="Visibility"
            value={`${visibility.toFixed(1)} km`}
            type="normal"
            addMarginBottom={30}
          />

          <p className="powered-by">
            Powered by{" "}
            <a
              className="powered-by__link"
              href="https://weatherapi.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Weatherapi.com
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default Container;
