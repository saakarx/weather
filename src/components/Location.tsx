import { LocationProps } from "../types/Types.type";

const Location = ({ value, icon }: LocationProps) => {
  return (
    <div className="location">
      {icon}
      <div className="location__value">
        {value.region}, {value.country}
      </div>
    </div>
  );
};

export default Location;
