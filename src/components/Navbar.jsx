export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="nav">
      <div className="wrap nav__row">
        <div className="nav__brand">way<span>point</span></div>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle color theme">
          {theme === 'dark' ? '☀ LIGHT' : '● DARK'}
        </button>
      </div>
    </header>
  )
}
