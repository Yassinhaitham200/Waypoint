const STAMP_LABEL = {
  beach: 'BEACH',
  mountain: 'PEAK',
  city: 'CITY',
}

export default function DestinationCard({ place, index, onSelect }) {
  return (
    <article
      className="card"
      style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
      onClick={() => onSelect(place)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' ? onSelect(place) : null)}
    >
      <div className="card__media">
        <img src={place.image} alt={`${place.name}, ${place.country}`} loading="lazy" />
        <div className="card__stamp">{STAMP_LABEL[place.category]}</div>
      </div>
      <div className="card__perforation" />
      <div className="card__body">
        <div className="card__coords">
          {place.coords.lat.toFixed(2)}°, {place.coords.lng.toFixed(2)}°
        </div>
        <h3 className="card__name">{place.name}</h3>
        <p className="card__country">{place.country}</p>
        <p className="card__tagline">{place.tagline}</p>
      </div>
    </article>
  )
}
