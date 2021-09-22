import { HeadingProps } from "../types/Types.type";

const Heading = ({ heading, children }: HeadingProps) => {
  return (
    <div className="info-item__heading-container">
      {children}
      <h4 className="info-item__heading">{heading}</h4>
    </div>
  );
};

export default Heading;
