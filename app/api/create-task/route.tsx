import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Dados recebidos para criar tarefa:', data);

    // Lógica para salvar a tarefa será adicionada aqui
    
    return NextResponse.json({ message: 'Tarefa criada com sucesso!' }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: 'Erro ao processar a requisição.' }, { status: 500 });
  }
}
