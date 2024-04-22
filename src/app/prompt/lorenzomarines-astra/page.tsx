'use client';
import { useState } from 'react';

const Astra = () => {
  const [negativePrompt, setNegativePrompt] = useState<string>(
    'deformed iris, deformed pupils, semi-realistic, text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, blurry, low quality , bad quality , Not detailed, watermark, deformed figures, lack of details, bad anatomy, blurry, extra arms, extra fingers, poorly drawn hands, disfigured, tiling, deformed, mutated ,ugly, disfigured, low quality, blurry ,distorted, blur, smooth, low-quality, warm, haze, over-saturated, high-contrast, out of focus, dark, worst quality, low quality'
  );
  const [numberOfInferenceSteps, setNumberOfInferenceSteps] = useState<number>(50);
  const [guidanceScale, setGuidanceScale] = useState<number>(4);
  const [promptStrength, setPromptStrength] = useState<number>(0.8);
  const [width, setWidth] = useState<number>(1024);
  const [height, setHeight] = useState<number>(1024);
  const [scheduler, setScheduler] = useState<string>('K_EULER');
  const [refine, setRefine] = useState<string>();
  const [applyWatermark, setApplyWatermark] = useState<boolean>();

  //Classes
  const textArea = 'text-xs text-neutral-500 font-semibold capitalize';
  const label = 'text-xs text-neutral-500 font-semibold capitalize flex flex-col w-full lg:w-[45%] gap-3';
  const select = 'select select-bordered w-full max-w-xs bg-black truncate';
  const input: string | undefined =
    'input input-bordered w-full max-w-xs font-extrabold font-nunito !bg-[unset] text-xl input-ghost';
  return (
    <div className='flex flex-col justify-evenly gap-5 font-nunito font-semibold text-neutral-400 py-10 px-2'>
      <input
        name='version'
        type='text'
        value='/lorenzomarines-astra'
        className='!w-0 !h-0 opacity-0 absolute !max-w-0 !max-h-0'
      />
      <label className={textArea + ' px-2'}>
        Negative prompt
        <div className='relative'>
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10 pointer-events-none' />

          <textarea
            value={negativePrompt}
            onChange={(e) => setNegativePrompt(e.target.value)}
            name='negative_prompt'
            placeholder='Instruct the model on what to steer clear of or leave out when crafting the image'
            className='focus:z-20 relative max-lg:!px-2 max-md:[scrollbar-width:thin] text-base lg:text-lg font-bold font-nunito mt-3 textarea textarea-ghost w-full focus:bg-[unset] h-20'
          />
        </div>
      </label>

      <div className='grid grid-cols-2 lg:flex flex-row justify-between gap-10 my-10 flex-wrap max-lg:!px-2 '>
        <label className={label}>
          Width
          <input
            onChange={(e) => setWidth(+e.target.value)}
            value={width}
            type='number'
            placeholder='Width'
            name='width'
            className={input}
          />
        </label>

        <label className={label}>
          Height
          <input
            onChange={(e) => setHeight(+e.target.value)}
            value={height}
            type='number'
            placeholder='Height'
            name='height'
            className={input}
          />
        </label>

        <label className={label}>
          Scheduler
          <select
            name='scheduler'
            defaultValue='Scheduler'
            value={scheduler}
            onChange={(e) => setScheduler(e.target.value)}
            className={select}>
            <option disabled>Scheduler</option>

            <option value='DDIM'>DDIM</option>
            <option value='DPMSolverMultistep'>DPMSolverMultistep</option>
            <option value='HeunDiscrete'>HeunDiscrete</option>
            <option value='KarrasDPM'>KarrasDPM</option>
            <option value='K_EULER_ANCESTRAL'>K_EULER_ANCESTRAL</option>
            <option value='K_EULER'>K_EULER</option>
            <option value='PNDM'>PNDM</option>
          </select>
        </label>

        <label className={label}>
          Refine
          <select
            name='refine'
            defaultValue='Refine'
            value={refine}
            onChange={(e) => setRefine(e.target.value)}
            className={select}>
            <option disabled>Which refine style to use</option>

            <option value='no_refiner'>no_refiner</option>
            <option value='expert_ensemble_refiner'>expert_ensemble_refiner</option>
            <option value='base_image_refiner'>base_image_refiner</option>
          </select>
        </label>
      </div>

      <div className='max-lg:!px-2 '>
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
          Prompt Strength
          <div className='flex flex-row gap-5 items-center justify-between mt-3'>
            <input
              value={promptStrength}
              onChange={(e) => setPromptStrength(+e.target.value)}
              name='prompt_strength'
              type='range'
              min={0}
              max='1'
              step={0.01}
              className='range border-none range-info'
            />
            <input
              type='number'
              min={0}
              max={1}
              step={0.01}
              className='input input-bordered max-w-xs w-20 text-center font-extrabold text-lg'
              value={promptStrength}
              onChange={(e) => setPromptStrength(+e.target.value)}
            />
          </div>
        </label>
      </div>

      <label className='cursor-pointer label mt-10 flex flex-row justify-between lg:justify-start gap-10 items-center w-full'>
        <span className='label-text text-base'>Apply Watermark</span>
        <input
          type='checkbox'
          name='apply_watermark'
          defaultChecked
          checked={applyWatermark}
          onChange={(e) => setApplyWatermark(e.target.checked ? true : false)}
          className='checkbox checkbox-info !min-h-[34px]'
        />
      </label>
    </div>
  );
};

export default Astra;
