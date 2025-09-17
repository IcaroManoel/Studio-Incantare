import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="bg-black min-h-screen font-inter">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4">
          Tecnologia feita com alma.
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-4 md:mb-6">
          Criamos software como arte funcional.
        </p>
        <button
          className="mt-2 px-8 py-3 bg-[#D4AF37] text-black rounded-lg shadow hover:bg-yellow-500 transition-colors font-semibold text-base"
          onClick={() => navigate('/sobre')}
        >
          Explorar
        </button>
      </section>
      {/* Sobre nós */}
      <section className="max-w-2xl mx-auto mt-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6 text-[#D4AF37]">Sobre nós</h2>
        <p className="text-white/80 mb-4 text-base md:text-lg">
          Somos apaixonados por tecnologia e acreditamos que o software pode transformar vidas. Nosso compromisso é criar soluções digitais que unem inovação, funcionalidade e beleza, sempre colocando o usuário no centro de tudo.
        </p>
        <p className="text-white/80 text-base md:text-lg">
          Com uma equipe multidisciplinar e criativa, desenvolvemos projetos sob medida para cada cliente, buscando excelência técnica e impacto positivo. Para nós, cada linha de código é uma expressão de arte e propósito.
        </p>
      </section>
      {/* Destaques de Projetos */}
      <section className="max-w-5xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#D4AF37]">Destaques de projetos</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1 */}
          <div className="bg-black border border-[#D4AF37] rounded-xl shadow-md overflow-hidden flex flex-col items-center p-6 transition-transform hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
              alt="Projeto Aurora"
              className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-[#D4AF37]"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#D4AF37]">Aurora</h3>
            <p className="text-white/80 text-center text-base">
              Plataforma de gestão inteligente que conecta pessoas e processos, trazendo agilidade e inovação para empresas modernas.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-black border border-[#D4AF37] rounded-xl shadow-md overflow-hidden flex flex-col items-center p-6 transition-transform hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
              alt="Projeto Prisma"
              className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-[#D4AF37]"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#D4AF37]">Prisma</h3>
            <p className="text-white/80 text-center text-base">
              Aplicativo de criatividade colaborativa que transforma ideias em projetos reais, promovendo integração e resultados.
            </p>
          </div>
        </div>
        <p className="mt-12 text-xl font-semibold text-center text-[#D4AF37]">
          "Ideias são fáceis. O difícil é executá-las com alma."
        </p>
      </section>
    </div>
  )
}


export default Home