'use client';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@/utils/cn';

import { Prediction } from 'replicate';
import Link from 'next/link';
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const Prompt = ({ children }: { children: React.ReactNode }) => {
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [error, setError] = useState(null);
  const segment = useSelectedLayoutSegment();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/predictions', {
      method: 'POST',
      body: new FormData(e.currentTarget),
    });

    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (prediction.status !== 'succeeded' && prediction.status !== 'failed') {
      await sleep(1000);
      const response = await fetch('/api/predictions/' + prediction.id, { cache: 'no-store' });
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log({ prediction });
      setPrediction(prediction);
    }
  };
  return (
    <main className={'w-full min-h-[calc(100vh_-_132px)] max-w-7xl mx-auto flex flex-row gap-10 justify-between '}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>

      {error && <div className='mt-4 text-red-500'>{error}</div>}
      <form onSubmit={handleSubmit} className='flex-1 flex space-between gap-8 flex-col'>
        <div role='tablist' className='tabs tabs-lifted'>
          <Link
            href='/prompt/lorenzomarines-astra'
            role='tab'
            className={cn(segment == 'lorenzomarines-astra' && 'tab-active', 'tab font-bold font-nunito')}>
            astra
          </Link>
          <Link
            href='/prompt/aiforever-kandinsky2'
            role='tab'
            className={cn(segment == 'aiforever-kandinsky2' && 'tab-active', 'tab font-bold font-nunito')}>
            kandinsky-2
          </Link>
        </div>
        <label className='text-2xl font-bold capitalize'>
          Let your imagination run wild
          <textarea
            name='prompt'
            placeholder='Enter Link prompt to display an image'
            className={
              'mt-3 textarea textarea-ghost border border-neutral-700 w-full focus:bg-[unset] font-normal font-nunito h-72'
            }
          />
        </label>
        {children}
        <button type='button' className='btn btn-active btn-lg'>
          Imagine
        </button>
      </form>
      <div className='w-full flex-1 border border-neutral-800 rounded-lg'>
        {prediction && (
          <div className='relative right-16 border border-neutral-800 bg-neutral-950 rounded-lg '>
            <span className='absolute inset-0 blur-2xl bg-gradient-to-r from-green-600 via-purple-600 to-blue-600 ' />

            {prediction.output && (
              <div className='flex flex-col items-center justify-center w-full'>
                <Image
                  src={prediction.output[prediction.output.length - 1]}
                  alt='output'
                  width={500}
                  height={500}
                  className='object-cover w-full h-full rounded-md border-gray-300 z-10'
                />
              </div>
            )}
            {/* <p className='mt-4 text-lg text-gray-700'>status: {prediction.status}</p> */}
          </div>
        )}
      </div>
    </main>
  );
};

export default Prompt;
