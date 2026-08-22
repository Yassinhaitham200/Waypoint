export default function Hero({ query, onQueryChange, resultCount }) {
  const bgUrl = 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <section className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${bgUrl})` }} />
      <div className="hero__scrim" />
      <div className="hero__content wrap">
        <div className="hero__coords">34.05°N, 118.24°W — currently plotting a route</div>
        <h1 className="hero__title">
          Discover places <em>worth remembering.</em>
        </h1>
        <p className="hero__sub">
          A field guide to beaches, mountains and cities that stay with you long after
          the trip ends. Search a place, or drift through the list below.
        </p>

        <div className="searchcard">
          <div className="searchcard__row">
            <span className="searchcard__icon" aria-hidden="true">⌕</span>
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search a city, country or coastline…"
              aria-label="Search destinations"
            />
            <span className="searchcard__count">{resultCount} found</span>
          </div>
        </div>
      </div>
    </section>
  )
}
