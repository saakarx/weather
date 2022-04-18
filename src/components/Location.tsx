import { LocationProps } from '../types/Types.type'

const Location = ({ value, icon: Icon }: LocationProps) => {
  return (
    <div className="location">
      <Icon className="icon" size="24" />
      <div className="location__value">
        {value.region}, {value.country}
      </div>
    </div>
  )
}

export default Location
