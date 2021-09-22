import { SmallItemProps } from "../types/Types.type";

const SmallItem = ({ heading, value }: SmallItemProps) => {
  return (
    <div className="small-item">
      <div className="small-item__heading">{heading}</div>
      <div className="small-item__value">{value}</div>
    </div>
  );
};
export default SmallItem;
