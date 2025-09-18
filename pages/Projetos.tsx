function Projetos() {
  const projetos = [
    {
      nome: 'Aurora',
      descricao: 'Plataforma de gestão inteligente para empresas modernas.',
      imagem: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    },
    {
      nome: 'Prisma',
      descricao: 'Aplicativo colaborativo para transformar ideias em projetos reais.',
      imagem: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    },
    {
      nome: 'Vita',
      descricao: 'Sistema de acompanhamento de saúde e bem-estar personalizado.',
      imagem: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-10 text-center">Projetos</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto, idx) => (
          <div
            key={idx}
            className="bg-black border border-[#D4AF37] rounded-xl shadow-md overflow-hidden flex flex-col items-center p-6 transition-transform duration-200 hover:scale-105 hover:border-yellow-500"
          >
            <img
              src={projeto.imagem}
              alt={projeto.nome}
              className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-[#D4AF37]"
            />
            <h2 className="text-xl font-semibold mb-2 text-[#D4AF37]">{projeto.nome}</h2>
            <p className="text-white/80 text-center">{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projetos