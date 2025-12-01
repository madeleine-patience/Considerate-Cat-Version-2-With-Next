/**
 * Server-side API route for email signup
 */
import { NextResponse } from 'next/server';
import { supabase } from '../../../supabase';
import { emailChoiceValidationSchema } from '../../../schemas/userEmailSchema';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validationResult = emailChoiceValidationSchema.safeParse({
      Name: body.name,
      Email: body.customer_email,
      EmailChoice: body.email_choice
    });

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.from('Emails').insert([body]);

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
