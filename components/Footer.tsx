import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/time', label: 'Time' },
  { to: '/contato', label: 'Contato' },
]

function Footer() {
  return (
    <footer className="w-full bg-black border-t border-[#D4AF37] py-6 px-4 flex flex-col md:flex-row items-center justify-between font-inter text-white text-sm mt-16">
      {/* Logotipo mock */}
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center font-bold text-black text-lg">
          SI
        </div>
        <span className="font-semibold text-[#D4AF37]">Studio Incantare</span>
      </div>
      {/* Frase */}
      <div className="mb-4 md:mb-0 text-white/80 text-center">
        Criado com intuição e propósito.
      </div>
      {/* Links rápidos */}
      <nav className="flex gap-6">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className="text-white/80 hover:text-[#D4AF37] transition-colors"
            end={item.to === '/'}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </footer>
  )
}

export default Footer