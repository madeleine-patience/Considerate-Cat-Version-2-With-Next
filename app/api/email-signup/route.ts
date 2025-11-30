/**
 * Server-side API route for email signup
 */
import { NextResponse } from 'next/server';
import { supabase } from '../../../supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = await supabase.from('userEmail').insert([body]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    void error; // es-lint being dumb

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
