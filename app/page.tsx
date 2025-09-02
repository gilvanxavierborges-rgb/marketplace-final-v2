'use client';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch('/api/list-tasks');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Erro ao carregar as tarefas.');
        }

        setTasks(data.tasks);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '5rem' }}>
        <p>Carregando tarefas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', marginTop: '5rem', color: 'red' }}>
        <p>Erro ao carregar as tarefas: {error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Lista de Tarefas</h1>
      {tasks.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Nenhuma tarefa encontrada.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((task: any) => (
            <li key={task.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
              <h2>{task.titulo}</h2>
              <p><strong>Categoria:</strong> {task.categoria}</p>
              <p>{task.descricao}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
