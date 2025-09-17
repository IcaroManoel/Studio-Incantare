import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Projetos from '../pages/Projetos'
import Contato from '../pages/Contato'
import Time from '../pages/Time'
import Header from '../components/Header'

function App() {
  return (
    <div className="bg-black min-h-screen font-inter text-white">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/time" element={<Time />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
