import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: Request) {
  try {
    const { titulo, descricao, categoria } = await request.json();

    const { data: newTask, error } = await supabase
      .from('tarefas')
      .insert({ titulo, descricao, categoria });

    if (error) {
      console.error('Erro ao criar a tarefa:', error);
      return NextResponse.json({ error: 'Erro ao criar a tarefa.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Tarefa criada com sucesso!', task: newTask }, { status: 201 });

  } catch (err) {
    console.error('Erro desconhecido:', err);
    return NextResponse.json({ error: 'Ocorreu um erro desconhecido.' }, { status: 500 });
  }
}
