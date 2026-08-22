import { CATEGORIES } from '../data/destinations'

export default function FilterChips({ active, onChange }) {
  return (
    <div className="chips" role="group" aria-label="Filter by category">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          className={`chip ${active === cat.id ? 'active' : ''}`}
          onClick={() => onChange(cat.id)}
        >
          <span className="chip__dot" />
          {cat.label}
        </button>
      ))}
    </div>
  )
}
