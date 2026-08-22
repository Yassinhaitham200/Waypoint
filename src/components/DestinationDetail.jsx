import { useEffect } from 'react'

export default function DestinationDetail({ place, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!place) return null

  return (
    <div className="detail">
      <div className="detail__hero">
        <img src={place.image} alt={`${place.name}, ${place.country}`} />
        <div className="detail__scrim" />
        <button className="detail__close" onClick={onClose} aria-label="Close details">✕</button>
        <div className="wrap detail__title-block">
          <div className="hero__coords">
            {place.coords.lat.toFixed(4)}°, {place.coords.lng.toFixed(4)}°
          </div>
          <h2 className="detail__title">{place.name}</h2>
          <p style={{ margin: 0, color: 'rgba(243,238,227,0.85)' }}>{place.country}</p>
        </div>
      </div>

      <div className="wrap detail__body">
        <p className="detail__desc">{place.description}</p>

        <div className="detail__grid">
          <div>
            <p className="detail__label">Don't miss</p>
            <ul className="detail__highlights">
              {place.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="detail__label">Trip notes</p>
            <div className="detail__facts">
              <div className="detail__fact-row">
                <span>Best time to visit</span>
                <span>{place.bestTime}</span>
              </div>
              <div className="detail__fact-row">
                <span>Category</span>
                <span>{place.category}</span>
              </div>
              <div className="detail__fact-row">
                <span>Coordinates</span>
                <span>{place.coords.lat.toFixed(2)}, {place.coords.lng.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
