

const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Event Location Info
        <ul>
            <li>ID: <strong> { info.id}</strong></li>
            <li>TITLE: <strong> {info.title}</strong></li>
        </ul>
      </h2>
    </div>
  )
}

export default LocationInfoBox
