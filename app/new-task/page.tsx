'use client';
import { useState, useEffect } from 'react';

export default function CreateTaskPage() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Lógica para enviar os dados para a API
    setTimeout(() => {
      setMessage('Tarefa criada com sucesso!');
      setLoading(false);
      setTitulo('');
      setDescricao('');
      setCategoria('');
    }, 1500);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Criar Nova Tarefa</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Título da Tarefa"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <textarea
          placeholder="Descrição detalhada"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
          rows={5}
          style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
          style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="">Selecione uma categoria</option>
          <option value="eletrica">Elétrica</option>
          <option value="hidraulica">Hidráulica</option>
          <option value="limpeza">Limpeza</option>
        </select>
        <button type="submit" disabled={loading} style={{ padding: '1rem', borderRadius: '4px', border: 'none', backgroundColor: '#28a745', color: 'white', cursor: 'pointer' }}>
          {loading ? 'Salvando...' : 'Criar Tarefa'}
        </button>
      </form>
      {message && <p style={{ color: message.includes('sucesso') ? 'green' : 'red', textAlign: 'center', marginTop: '1rem' }}>{message}</p>}
    </div>
  );
}
