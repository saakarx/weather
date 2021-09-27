export type SuccessType = {
  coords: {
    latitude: number;
    longitude: number;
  };
};
export type PositionCoordsType = {
  lat: number;
  lng: number;
};
export type StatusType = "loading" | "success" | "error";

type AirQualityValueType = {
  co: number | string;
  no2: number | string;
  o3: number | string;
  so2: number | string;
};
type WindValueType = {
  speed: string;
  deg: string;
  dir: string;
};

export type InfoItemType = {
  heading: string;
  value: string | WindValueType | AirQualityValueType;
  type: "multiple" | "normal" | "temp";
  icon: React.ComponentType;
  addMarginBottom?: number;
};

export type WeatherDataType = {
  location: { region: string; country: string };
  current: {
    temp_c: number;
    condition: { text: string };
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    air_quality: AirQualityValueType;
    precip_mm: number;
    humidity: number;
    uv: number;
    cloud: number;
    pressure_mb: number;
    vis_km: number;
  };
};

export type LocationProps = {
  value: {
    region: string;
    country: string;
  };
  icon: React.ReactChild;
};

export type HeadingProps = {
  heading: string;
  children: React.ReactChild;
};

export type ErrorProps = {
  err: string;
};

export type ContainerProps = {
  weatherData: WeatherDataType;
};

export type SmallItemProps = {
  heading: string;
  value: string;
};
