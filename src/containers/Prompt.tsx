'use client';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@/utils/cn';
import PaperPlane from '@/public/paper-plane.gif';
import { Prediction } from 'replicate';
import Link from 'next/link';
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const Prompt = ({ children }: { children: React.ReactNode }) => {
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const segment = useSelectedLayoutSegment();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('/api/predictions', {
      method: 'POST',
      body: new FormData(e.currentTarget),
    });

    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return setLoading(false);
    }
    setPrediction(prediction);

    while (prediction.status !== 'succeeded' && prediction.status !== 'failed') {
      await sleep(1000);
      const response = await fetch('/api/predictions/' + prediction.id, { cache: 'no-store' });
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return setLoading(false);
      }

      setPrediction(prediction);
    }
    setLoading(false);
  };
  return (
    <main
      className={
        'w-full min-h-screen z-10 max-h-screen max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-10 justify-between pt-16 overflow-hidden'
      }>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>

      {error && (
        <div role='alert' className='alert alert-error fixed top-10 max-w-sm left-1/2 right-1/2 -translate-x-1/2 z-50'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
      <form
        id='output'
        onSubmit={handleSubmit}
        className='py-10 flex-1 flex space-between gap-8 flex-col overflow-y-auto '>
        <div role='tablist' className='tabs tabs-boxed'>
          <Link
            href='/prompt/lorenzomarines-astra'
            role='tab'
            className={cn(
              segment == 'lorenzomarines-astra' && 'tab-active !text-white !bg-info ',
              'tab font-bold font-nunito '
            )}>
            astra
          </Link>
          <Link
            href='/prompt/aiforever-kandinsky2'
            role='tab'
            className={cn(
              segment == 'aiforever-kandinsky2' && 'tab-active !text-white !bg-info ',
              'tab font-bold font-nunito '
            )}>
            kandinsky-2
          </Link>
        </div>

        {/* <label className='text-base font-bold capitalize'> */}
        {/* Let your imagination run wild */}
        <textarea
          name='prompt'
          placeholder='Write a prompt...'
          className={
            'mt-3 max-sm:border-x-0 rounded-none sm:rounded-2xl textarea textarea-ghost w-full focus:bg-[unset] font-extrabold font-nunito h-32 text-lg sm:text-2xl'
          }
        />
        {/* </label> */}

        <div className='join join-vertical w-full'>
          <div className='collapse collapse-arrow join-item max-sm:border-x-none max-sm:rounded-none border border-base-300'>
            <input type='checkbox' name='my-accordion-4' />
            <div className='collapse-title text-xl font-medium'>More Options</div>
            <div className='collapse-content'>{children}</div>
          </div>
        </div>

        <button
          type='submit'
          className='relative px-20 btn btn-active bg-white text-black hover:!bg-white rounded-2xl !text-md capitalize tracking-tighter font-extrabold h-fit w-fit mt-10 overflow-hidden flex flex-row gap-5 justify-between'>
          <Image
            src={PaperPlane}
            alt='git animated paper plane'
            className='scale-75 object-cover rounded-md border-gray-300 z-10 h-full overflow-visible rotate-45 absolute left-5'
          />
          generate
        </button>
      </form>

      <div
        id='output'
        className=' px-5 md:px-8 xl:px-5 max-md:h-[40vh] relative w-full flex-1 border-l border-neutral-800 z-10 overflow-auto lg:p-14 lg:max-w-[50%] flex items-center justify-center'>
        {loading && !error && <div className='skeleton w-full h-full absolute rounded-none' />}
        {prediction && (
          <div className='relative border border-neutral-800 shadow-md shadow-blue-600/30 bg-neutral-950 rounded-lg '>
            <span className='absolute inset-0 blur-2xl bg-gradient-to-r from-green-600 via-purple-600 to-blue-600 ' />

            {prediction.output && (
              <div className='flex flex-col items-center justify-center w-full'>
                <Image
                  src={prediction.output[prediction.output.length - 1]}
                  alt='output'
                  width={500}
                  height={500}
                  className='object-contain w-full h-full rounded-md border-gray-300 z-10'
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
