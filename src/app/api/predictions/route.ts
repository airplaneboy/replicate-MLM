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
      (data.get('version')?.toString() == '/lorenzomarines-astra'
        ? process.env.LORENZOMARINES_ASTRA_VERSION
        : process.env.AIFOREVER_KANDINSKY2_VERSION) ||
      '8beff3369e81422112d93b89ca01426147de542cd4684c244b673b105188fe5f',

    input:
      data.get('version')?.toString() == '/lorenzomarines-astra'
        ? {
            width: Number(data.get('width')),
            height: Number(data.get('height')),
            prompt: data.get('prompt'),
            refine: data.get('refine'),
            scheduler: data.get('scheduler'),
            guidance_scale: Number(data.get('guidance_scale')),
            apply_watermark: Boolean(data.get('apply_watermark')),
            negative_prompt: data.get('negative_prompt'),
            prompt_strength: Number(data.get('prompt_strength') || 0.8),
            num_inference_steps: Number(data.get('num_inference_steps') || 50),
            // num_outputs: 1,
            // lora_scale: 0.6,
            // high_noise_frac: 0.8,
          }
        : {
            prompt: data.get('prompt'),
            width: Number(data.get('width') || 512),
            height: Number(data.get('height') || 512),
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
