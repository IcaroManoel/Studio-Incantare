function Sobre() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Missão */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">Nossa Missão</h1>
        <p className="text-white/90 text-lg md:text-xl">
          Transformar tecnologia em experiências humanas, criando soluções digitais que inspiram, conectam e evoluem pessoas e negócios.
        </p>
      </section>
      {/* Manifesto */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#D4AF37] mb-6 text-center">Manifesto</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-black border border-[#D4AF37] rounded-lg p-6 text-center">
            <p className="text-white font-semibold">Tecnologia é ponte, não barreira.</p>
          </div>
          <div className="bg-black border border-[#D4AF37] rounded-lg p-6 text-center">
            <p className="text-white font-semibold">Software é arte funcional.</p>
          </div>
          <div className="bg-black border border-[#D4AF37] rounded-lg p-6 text-center">
            <p className="text-white font-semibold">Inovação nasce da empatia.</p>
          </div>
          <div className="bg-black border border-[#D4AF37] rounded-lg p-6 text-center">
            <p className="text-white font-semibold">Excelência é feita de detalhes.</p>
          </div>
          <div className="bg-black border border-[#D4AF37] rounded-lg p-6 text-center">
            <p className="text-white font-semibold">Alma é o diferencial do nosso código.</p>
          </div>
          <div className="bg-black border border-[#D4AF37] rounded-lg p-6 text-center md:col-span-2 lg:col-span-1">
            <p className="text-white font-semibold">Colaboração potencializa resultados.</p>
          </div>
        </div>
      </section>
      {/* Fundador */}
      <section className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-black border border-[#D4AF37] rounded-xl p-8">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Fundador"
          className="w-32 h-32 rounded-full border-4 border-[#D4AF37] object-cover mb-4 md:mb-0"
        />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Lucas Andrade</h3>
          <p className="text-white font-semibold mb-1">Fundador & CEO</p>
          <p className="text-white/80 text-base">
            Apaixonado por tecnologia e pessoas, Lucas acredita que o verdadeiro valor do software está em sua capacidade de transformar vidas. Com mais de 10 anos de experiência, lidera o Studio Incantare com propósito e inovação.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Sobre