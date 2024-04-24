'use client';
import { useState } from 'react';

const Astra = () => {
  const [numberOfInferenceSteps, setNumberOfInferenceSteps] = useState<number>(50);
  const [guidanceScale, setGuidanceScale] = useState<number>(4);
  const [outputQuality, setOutputQuality] = useState<number>(80);
  const [width, setWidth] = useState<number>(512);
  const [height, setHeight] = useState<number>(512);
  const [scheduler, setScheduler] = useState<string>('p_sampler');
  const [outputFormat, setOutputFormat] = useState<string>('webp');
  const [batchSize, setBatchSize] = useState<number>(1);
  const [priorCFScale, setPriorCFScale] = useState<number>(4);
  const [priorSteps, setPriorSteps] = useState<string>('5');

  //Classes
  const label = 'text-xs text-neutral-500 font-semibold capitalize flex flex-col w-full lg:w-[45%] gap-3';
  const select = 'select select-bordered w-full max-w-xs bg-black truncate';
  const sliderContent = 'flex flex-row gap-5 items-center justify-between';
  const input: string | undefined =
    'input input-bordered w-full max-w-xs font-extrabold font-nunito !bg-[unset] text-xl input-ghost';
  return (
    <div className='flex flex-col justify-evenly gap-5 font-nunito font-semibold text-neutral-400 py-10 px-5'>
      <input
        name='version'
        type='text'
        value='/aiforever-kandinsky2'
        className='!w-0 !h-0 opacity-0 absolute !max-w-0 !max-h-0'
        readOnly={true}
      />

      <div className='grid grid-cols-2 lg:flex flex-row justify-between gap-10 mb-10 flex-wrap max-lg:!px-2 '>
        <label className={label}>
          Width
          <select name='width' value={width} onChange={(e) => setWidth(+e.target.value)} className={select}>
            <option disabled>Width</option>
            <option value={256}>256</option>
            <option value={288}>288</option>
            <option value={432}>432</option>
            <option value={512}>512</option>
            <option value={576}>576</option>
            <option value={768}>768</option>
            <option value={1024}>1024</option>
          </select>
        </label>

        <label className={label}>
          Height
          <select name='height' value={height} onChange={(e) => setHeight(+e.target.value)} className={select}>
            <option disabled>Height</option>

            <option value={256}>256</option>
            <option value={288}>288</option>
            <option value={432}>432</option>
            <option value={512}>512</option>
            <option value={576}>576</option>
            <option value={768}>768</option>
            <option value={1024}>1024</option>
          </select>
        </label>

        <label className={label}>
          Scheduler
          <select name='scheduler' value={scheduler} onChange={(e) => setScheduler(e.target.value)} className={select}>
            <option disabled>Scheduler</option>

            <option value='p_sampler'>p_sampler</option>
            <option value='ddim_sampler'>ddim_sampler</option>
            <option value='plms_sampler'>plms_sampler</option>
          </select>
        </label>

        <label className={label}>
          Output Format
          <select
            name='output_format'
            value={outputFormat}
            onChange={(e) => setOutputFormat(e.target.value)}
            className={select}>
            <option disabled>Format of the output images</option>

            <option value='webp'>webp</option>
            <option value='jpg'>jpg</option>
            <option value='png'>png</option>
          </select>
        </label>

        <label className={label}>
          Batch Size
          <select
            name='batch_size'
            value={batchSize}
            onChange={(e) => setBatchSize(+e.target.value)}
            className={select}>
            <option disabled>Choose batch size. Lower the setting if out of memory.</option>

            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </label>

        <label className={label}>
          Prior CF Scale
          <input
            onChange={(e) => setPriorCFScale(+e.target.value)}
            value={priorCFScale}
            type='number'
            placeholder='Prior CF Scale'
            name='prior_cf_scale'
            className={input}
          />
        </label>

        <label className={label}>
          Prior Steps
          <input
            onChange={(e) => setPriorSteps(e.target.value)}
            value={priorSteps}
            type='number'
            placeholder='Prior Steps'
            name='prior_steps'
            className={input}
          />
        </label>
      </div>

      <div className='max-lg:!px-2 gap-5 sm:gap-10 flex flex-col'>
        <label>
          Number of denoising steps
          <div className={sliderContent}>
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
          <div className={sliderContent}>
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
          <div className={sliderContent}>
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
    </div>
  );
};

export default Astra;
