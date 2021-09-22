import { ReactComponent as ErrorIcon } from "../assets/error-icon.svg";
import { ErrorProps } from "../types/Types.type";

const Error = ({ err }: ErrorProps) => {
  return (
    <div className="error">
      <ErrorIcon />
      <div className="error__value">{err}</div>
    </div>
  );
};

export default Error;
