import DestinationCard from './DestinationCard'

export default function DestinationGrid({ places, onSelect }) {
  return (
    <section className="wrap">
      <h2 className="section-title">Places on the map</h2>
      <p className="section-meta">{places.length} destinations to explore</p>

      {places.length === 0 ? (
        <div className="empty">No places match that search — try another city or country.</div>
      ) : (
        <div className="grid">
          {places.map((place, i) => (
            <DestinationCard key={place.id} place={place} index={i} onSelect={onSelect} />
          ))}
        </div>
      )}
    </section>
  )
}
