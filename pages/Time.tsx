function Time() {
  const membros = [
    {
      nome: 'Lucas Andrade',
      cargo: 'Fundador & CEO',
      bio: 'Apaixonado por tecnologia e pessoas, lidera o Studio Incantare com propósito e inovação.',
    },
    {
      nome: 'Marina Costa',
      cargo: 'CTO',
      bio: 'Especialista em arquitetura de software, busca excelência técnica e soluções escaláveis.',
    },
    {
      nome: 'Rafael Lima',
      cargo: 'Designer',
      bio: 'Transforma ideias em interfaces intuitivas, sempre focando na experiência do usuário.',
    },
    {
      nome: 'Ana Souza',
      cargo: 'Desenvolvedora Front-End',
      bio: 'Entusiasta de interfaces modernas, cria experiências digitais fluidas e acessíveis.',
    },
    {
      nome: 'Pedro Martins',
      cargo: 'Desenvolvedor Back-End',
      bio: 'Focado em performance e segurança, constrói sistemas robustos e confiáveis.',
    },
    {
      nome: 'Juliana Alves',
      cargo: 'Gerente de Projetos',
      bio: 'Organiza equipes e processos para entregar resultados com qualidade e agilidade.',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-10 text-center">Nosso Time</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {membros.map((membro, idx) => (
          <div
            key={idx}
            className="bg-black border border-[#D4AF37] rounded-xl shadow-md p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-2 text-[#D4AF37]">{membro.nome}</h2>
            <p className="text-white font-medium mb-2">{membro.cargo}</p>
            <p className="text-white/80 text-center text-base">{membro.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Time