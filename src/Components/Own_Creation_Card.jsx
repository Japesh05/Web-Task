

export default function Own_Creation_Card({data , image}) {
  return (
    <div className="own-creation-card">
      <img src={image} alt="own creation" />
      <div className="explore">{data.message}</div>
    </div>
  )
}
