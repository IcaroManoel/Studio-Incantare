import { useState } from 'react'

function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [errors, setErrors] = useState({ nome: false, email: false, mensagem: false })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: false })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors = {
      nome: form.nome.trim() === '',
      email: form.email.trim() === '',
      mensagem: form.mensagem.trim() === '',
    }
    setErrors(newErrors)
    if (!newErrors.nome && !newErrors.email && !newErrors.mensagem) {
      alert('Mensagem enviada!')
      setForm({ nome: '', email: '', mensagem: '' })
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-8 text-center">Contato</h1>
      <form className="bg-black border border-[#D4AF37] rounded-xl p-8 flex flex-col gap-6 mb-10" onSubmit={handleSubmit}>
        <div>
          <label className="block text-[#D4AF37] font-semibold mb-2" htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded bg-black border ${errors.nome ? 'border-red-500' : 'border-[#D4AF37]'} text-white focus:outline-none`}
            autoComplete="off"
          />
          {errors.nome && <span className="text-red-500 text-sm">Preencha o nome.</span>}
        </div>
        <div>
          <label className="block text-[#D4AF37] font-semibold mb-2" htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded bg-black border ${errors.email ? 'border-red-500' : 'border-[#D4AF37]'} text-white focus:outline-none`}
            autoComplete="off"
          />
          {errors.email && <span className="text-red-500 text-sm">Preencha o e-mail.</span>}
        </div>
        <div>
          <label className="block text-[#D4AF37] font-semibold mb-2" htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-2 rounded bg-black border ${errors.mensagem ? 'border-red-500' : 'border-[#D4AF37]'} text-white focus:outline-none`}
          />
          {errors.mensagem && <span className="text-red-500 text-sm">Preencha a mensagem.</span>}
        </div>
        <button
          type="submit"
          className="mt-2 px-8 py-3 bg-[#D4AF37] text-black rounded-lg shadow hover:bg-yellow-500 transition-colors font-semibold text-base"
        >
          Enviar
        </button>
      </form>
      <div className="bg-black border border-[#D4AF37] rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold text-[#D4AF37] mb-2">Endereço</h2>
        <p className="text-white/80 mb-4">Av. das Inovações, 1234 - São Paulo, SP</p>
        <h2 className="text-xl font-bold text-[#D4AF37] mb-2">Redes Sociais</h2>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-[#D4AF37] hover:text-yellow-500 font-semibold transition-colors">Instagram</a>
          <a href="#" className="text-[#D4AF37] hover:text-yellow-500 font-semibold transition-colors">LinkedIn</a>
          <a href="#" className="text-[#D4AF37] hover:text-yellow-500 font-semibold transition-colors">Twitter</a>
        </div>
      </div>
    </div>
  )
}

export default Contato