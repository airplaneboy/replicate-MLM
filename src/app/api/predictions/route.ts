import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
  const data = await req.formData();

  data.forEach((item, key, parent) => console.log(`key: ${key}\tvalue:${item}\n`));
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error(
      'The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it.'
    );
  }

  const prediction = await replicate.predictions.create({
    version:
      (data.get('version')?.toString() == 'lorenzomarines/astra'
        ? process.env.LORENZOMARINES_ASTRA_VERSION
        : process.env.AIFOREVER_KANDINSKY2_VERSION) ||
      '8beff3369e81422112d93b89ca01426147de542cd4684c244b673b105188fe5f',

    input: {
      prompt: data.get('prompt'),
      width: Number(data.get('width') || 256),
      height: Number(data.get('height') || 256),
      scheduler: data.get('scheduler') || 'p_sampler',
      output_format: data.get('output_format') || 'webp',
      guidance_scale: Number(data.get('guidance_scale') || 4),
      output_quality: Number(data.get('output_quality') || 80),
      num_inference_steps: Number(data.get('num_inference_steps') || 50),
      // batch_size: 1,
      // prior_steps: '5',
      // prior_cf_scale: 4,
    },
  });

  if (prediction?.error) return new Response(JSON.stringify({ detail: prediction.error.detail }), { status: 500 });

  return new Response(JSON.stringify(prediction), { status: 201 });
}
