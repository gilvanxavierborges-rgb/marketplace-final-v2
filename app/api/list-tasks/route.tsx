import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const tasks = [
      { id: 1, titulo: 'Tarefa de Exemplo 1', descricao: 'Descrição de exemplo para a Tarefa 1.', categoria: 'eletrica' },
      { id: 2, titulo: 'Tarefa de Exemplo 2', descricao: 'Descrição de exemplo para a Tarefa 2.', categoria: 'hidraulica' },
      { id: 3, titulo: 'Tarefa de Exemplo 3', descricao: 'Descrição de exemplo para a Tarefa 3.', categoria: 'limpeza' },
    ];
    
    return NextResponse.json({ tasks });

  } catch (error) {
    return NextResponse.json({ error: 'Erro ao processar a requisição.' }, { status: 500 });
  }
}
