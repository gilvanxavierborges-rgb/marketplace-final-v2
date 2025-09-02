'use client';
import { useState } from 'react';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Lógica para enviar os dados de autenticação
    // Esta parte do código será conectada ao Supabase mais tarde
    setTimeout(() => {
      setMessage(isLogin ? 'Login bem-sucedido.' : 'Cadastro bem-sucedido.');
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h1>{isLogin ? 'Login' : 'Cadastro'}</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Processando...' : (isLogin ? 'Entrar' : 'Cadastrar')}
        </button>
      </form>
      {message && <p style={{ textAlign: 'center', marginTop: '1rem', color: 'green' }}>{message}</p>}
      <button onClick={() => setIsLogin(!isLogin)} style={{ marginTop: '1rem', width: '100%' }}>
        {isLogin ? 'Ainda não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
      </button>
    </div>
  );
}
