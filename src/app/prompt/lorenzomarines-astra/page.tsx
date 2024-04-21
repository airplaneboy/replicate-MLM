'use client';
import { useState, useRef, useEffect } from 'react';

const Astra = () => {
  const negativePrompt = useRef<HTMLTextAreaElement>(null);
  const [numberOfInferenceSteps, setNumberOfInferenceSteps] = useState<number>();
  const [guidanceScale, setGuidanceScale] = useState<number>();
  const [outputQuality, setOutputQuality] = useState<number>();
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [scheduler, setScheduler] = useState<string>();
  const [outputFormat, setOutputFormat] = useState<string>();

  return (
    <div className='flex flex-col justify-evenly gap-5 font-nunito font-semibold text-neutral-400 py-10 px-2'>
      <label className='text-xs text-neutral-500 font-semibold capitalize'>
        Negative prompt
        <textarea
          ref={negativePrompt}
          name='negative_prompt'
          placeholder='Instruct the model on what to steer clear of or leave out when crafting the image'
          className='text-lg font-bold font-nunito mt-3 textarea textarea-ghost w-full focus:bg-[unset] h-20'
        />
      </label>

      <div className='flex flex-row justify-between gap-10 my-10'>
        <select
          name='width'
          defaultValue='Width'
          value={width}
          onChange={(e) => setWidth(+e.target.value)}
          className='select select-bordered w-full max-w-xs bg-black truncate'>
          <option disabled>Width</option>
          <option value={256}>256</option>
          <option value={288}>288</option>
          <option value={432}>432</option>
          <option value={512}>512</option>
          <option value={576}>576</option>
          <option value={768}>768</option>
          <option value={1024}>1024</option>
        </select>

        <select
          name='height'
          defaultValue='Height'
          value={height}
          onChange={(e) => setHeight(+e.target.value)}
          className='select select-bordered w-full max-w-xs bg-black truncate'>
          <option disabled>Height</option>

          <option disabled>Width</option>
          <option value={256}>256</option>
          <option value={288}>288</option>
          <option value={432}>432</option>
          <option value={512}>512</option>
          <option value={576}>576</option>
          <option value={768}>768</option>
          <option value={1024}>1024</option>
        </select>

        <select
          name='scheduler'
          defaultValue='Scheduler'
          className='select select-bordered w-full max-w-xs bg-black truncate'>
          <option disabled>Scheduler</option>

          <option value='p_sampler'>p_sampler</option>
          <option value='ddim_sampler'>ddim_sampler</option>
          <option value='plms_sampler'>plms_sampler</option>
        </select>

        <select
          name='output_format'
          defaultValue='Format of the output images'
          className='select select-bordered w-full max-w-xs bg-black truncate'>
          <option disabled>Format of the output images</option>

          <option value='webp'>webp</option>
          <option value='jpg'>jpg</option>
          <option value='png'>png</option>
        </select>
      </div>
      <label>
        Number of denoising steps
        <div className='flex flex-row gap-5 items-center justify-between mt-3'>
          <input
            value={numberOfInferenceSteps}
            onChange={(e) => setNumberOfInferenceSteps(+e.target.value)}
            name='num_inference_steps'
            type='range'
            min={1}
            max='500'
            className='range border-none range-info'
          />
          <input
            type='number'
            min={1}
            max={500}
            className='input input-bordered max-w-xs w-20 text-center font-extrabold text-lg'
            value={numberOfInferenceSteps}
            onChange={(e) => setNumberOfInferenceSteps(+e.target.value)}
          />
        </div>
      </label>
      <label>
        Scale for classifier-free guidance
        <div className='flex flex-row gap-5 items-center justify-between mt-3'>
          <input
            value={guidanceScale}
            onChange={(e) => setGuidanceScale(+e.target.value)}
            name='guidance_scale'
            type='range'
            min={1}
            max='20'
            className='range border-none range-info'
          />
          <input
            type='number'
            min={1}
            max={20}
            className='input input-bordered max-w-xs w-20 text-center font-extrabold text-lg'
            value={guidanceScale}
            onChange={(e) => setGuidanceScale(+e.target.value)}
          />
        </div>
      </label>
      <label>
        Output Quality
        <div className='flex flex-row gap-5 items-center justify-between mt-3'>
          <input
            value={outputQuality}
            onChange={(e) => setOutputQuality(+e.target.value)}
            name='output_quality'
            type='range'
            min={0}
            max='100'
            className='range border-none range-info'
          />
          <input
            type='number'
            min={0}
            max={100}
            className='input input-bordered max-w-xs w-20 text-center font-extrabold text-lg'
            value={outputQuality}
            onChange={(e) => setOutputQuality(+e.target.value)}
          />
        </div>
      </label>
    </div>
  );
};

export default Astra;
