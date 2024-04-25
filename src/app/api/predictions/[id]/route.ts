import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export const fetchCache = 'force-no-store';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  let prediction;
  try {
    prediction = await replicate.predictions.get(params.id);
  } catch (error: any) {
    const errorMessage = error.message;

    //Server returns error in a weird way where it's mixed with a bunch of strings, so I have to extract and parse it
    return NextResponse.json(
      { error: JSON.parse(errorMessage.substring(errorMessage.indexOf('{'), errorMessage.lastIndexOf('}') + 1)) },
      { status: 500 }
    );
  }

  if (prediction?.error) {
    return new Response(JSON.stringify({ error: { detail: prediction.error.detail } }), { status: 500 });
  }
  return new Response(JSON.stringify(prediction), { status: 200 });
}
