import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/time', label: 'Time' },
  { to: '/contato', label: 'Contato' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black shadow relative z-10 font-inter">
      <div className="font-bold text-lg text-[#D4AF37]">Studio Incantare</div>
      {/* Menu Desktop */}
      <nav className="hidden md:flex gap-8">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `transition-colors duration-200 font-medium pb-1 border-b-2 ${
                isActive
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-white border-transparent hover:text-[#D4AF37]'
              }`
            }
            end={item.to === '/'}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      {/* Menu Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-20"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        <span
          className={`block h-1 w-6 bg-[#D4AF37] rounded transition-all duration-300 ${
            menuOpen ? 'translate-y-2 rotate-45' : ''
          }`}
        />
        <span
          className={`block h-1 w-6 bg-[#D4AF37] rounded transition-all duration-300 my-1 ${
            menuOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-1 w-6 bg-[#D4AF37] rounded transition-all duration-300 ${
            menuOpen ? '-translate-y-2 -rotate-45' : ''
          }`}
        />
      </button>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}
      {/* Menu Mobile Dropdown */}
      <nav
        className={`md:hidden flex flex-col gap-6 absolute top-full left-0 w-full bg-black shadow-lg py-8 px-6 transition-all duration-300 z-20 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `transition-colors duration-200 font-medium pb-1 border-b-2 ${
                isActive
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-white border-transparent hover:text-[#D4AF37]'
              }`
            }
            end={item.to === '/'}
            onClick={handleNavClick}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header