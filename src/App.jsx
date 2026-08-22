import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FilterChips from './components/FilterChips'
import DestinationGrid from './components/DestinationGrid'
import DestinationDetail from './components/DestinationDetail'
import Footer from './components/Footer'
import { destinations } from './data/destinations'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('wp-theme') || 'dark')
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('wp-theme', theme)
  }, [theme])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return destinations.filter((d) => {
      const matchesCategory = activeCategory === 'all' || d.category === activeCategory
      const matchesQuery =
        !q || d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, activeCategory])

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />

      <Hero query={query} onQueryChange={setQuery} resultCount={filtered.length} />

      <div className="wrap">
        <FilterChips active={activeCategory} onChange={setActiveCategory} />
      </div>

      <DestinationGrid places={filtered} onSelect={setSelected} />

      <Footer />

      {selected && <DestinationDetail place={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
