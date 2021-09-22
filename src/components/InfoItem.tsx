import { InfoItemType } from "../types/Types.type";
import Heading from "./Heading";
import SmallItem from "./SmallItem";

const InfoItem = (props: InfoItemType) => {
  const { heading, type, icon, value } = props;
  return (
    <div
      className={`info-item`}
      style={{ marginBottom: props.addMarginBottom }}
    >
      <Heading heading={heading}>{icon}</Heading>
      {type === "multiple" ? (
        <div className="info-item__multiple">
          {Object.entries(value).map(([key, val], idx) => {
            return <SmallItem heading={key} value={val.toString()} key={idx} />;
          })}
        </div>
      ) : (
        <div
          className={`info-item__value ${type === "temp" ? "temp-font" : ""}`}
        >
          {value}
          {type === "temp" && "°C"}
        </div>
      )}
    </div>
  );
};

export default InfoItem;
