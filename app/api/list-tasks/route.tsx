import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function GET() {
  try {
    const { data: tasks, error } = await supabase.from('tarefas').select('*');

    if (error) {
      console.error('Erro ao buscar tarefas:', error);
      return NextResponse.json({ error: 'Erro ao buscar tarefas.' }, { status: 500 });
    }

    return NextResponse.json({ tasks });

  } catch (err) {
    console.error('Erro desconhecido:', err);
    return NextResponse.json({ error: 'Ocorreu um erro desconhecido.' }, { status: 500 });
  }
}
