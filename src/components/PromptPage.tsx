'use client';
import { useState } from 'react';
import Navbar from './Navbar';
import BottomNav from './BottomNav';
import { usePathname } from 'next/navigation';
import getRandomPrompt from '@/app/utils/randomPrompts';
import { Prediction } from 'replicate';
import Head from 'next/head';
import Result from './Result';
import Loading from '@/components/Loading';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const PromptPage = ({ children }: { children: React.ReactNode }) => {
  const [prompt, setPrompt] = useState<string>();
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [error, setError] = useState<{ title: string; detail: string; status: number } | undefined | null>(null);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>();

  const pathname = usePathname();

  const regenerate = async () => {
    setLoading(true);

    const response = await fetch('/api/predictions', {
      method: 'POST',
      body: formData,
    });

    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.error);
      setShowError(true);
      return setLoading(false);
    }
    setPrediction(prediction);

    while (prediction.status !== 'succeeded' && prediction.status !== 'failed') {
      await sleep(1000);
      const response = await fetch('/api/predictions/' + prediction.id, { cache: 'no-store' });
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.error);
        setShowError(true);
        return setLoading(false);
      }

      setPrediction(prediction);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setLoading(true);

    const formDataValue = new FormData(e?.currentTarget);
    const response = await fetch('/api/predictions', {
      method: 'POST',
      body: formDataValue,
    });

    setFormData(formDataValue);

    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.error);
      setShowError(true);
      return setLoading(false);
    }
    setPrediction(prediction);

    while (prediction.status !== 'succeeded' && prediction.status !== 'failed') {
      await sleep(1000);
      const response = await fetch('/api/predictions/' + prediction.id, { cache: 'no-store' });
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.error);
        setShowError(true);
        return setLoading(false);
      }

      setPrediction(prediction);
    }
    setLoading(false);
  };

  return (
    <>
      {loading == true && <Loading />}
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>
      {error && showError == true && (
        <div
          role='alert'
          className='alert shadow-lg shadow-black fixed top-10 max-w-lg w-[90vw] left-1/2 right-1/2 -translate-x-1/2 z-[51] flex flex-col gap-5 bg-black/30 text-neutral-300 backdrop-blur'>
          <div className='flex flex-row justify-between w-full items-center'>
            <div className='flex gap-3 w-full items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='stroke-info shrink-0 w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
              </svg>
              <h3 className='font-bold text-gray-300'>{error.title}</h3>
            </div>
            <button
              onClick={() => setShowError(false)}
              className='btn btn-square btn-sm btn-outline border-none transition-none hover:text-error hover:bg-transparent'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>

          <div className='text-xs text-center'>{error.detail}</div>
        </div>
      )}
      {loading == false && <Navbar showClose={prediction?.output} onClose={() => setPrediction(null)} />}
      {prediction?.output && (
        <Result
          input={formData}
          regenerate={regenerate}
          output={prediction.output}
          prompt={(prediction.input as any).prompt}
        />
      )}
      {loading == false && prediction == null && (
        <form onSubmit={handleSubmit} className='h-full min-h-screen w-full flex flex-col gap-5 pt-20 pb-36'>
          <label className='text-base font-bold capitalize font-nunito px-5'>
            Enter Prompt
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              name='prompt'
              placeholder='Describe your image...'
              className={
                'mt-3 bg-neutral-950 lg:max-w-[calc(100%_-_8px)] self-center sm:p-5 rounded-2xl textarea textarea-ghost w-full font-extrabold font-nunito h-32 text-lg sm:text-2xl'
              }
            />
          </label>

          <div className='flex flex-row gap-5 px-5 mb-10'>
            <button
              type='button'
              onClick={() => setPrompt(getRandomPrompt())}
              className='py-3 px-4 bg-transparent border-2 border-white rounded-full'>
              ✨Random Prompt
            </button>
          </div>

          {children}

          <button
            disabled={!prompt?.trim()}
            type='submit'
            className='text-center disabled:bg-neutral-800 disabled:text-neutral-500 w-full max-w-xs py-4 px-8 bg-info text-white font-bold font-nunito fixed bottom-20 rounded-full left-1/2 -translate-x-1/2 shadow-lg shadow-black z-50'>
            Generate Image
          </button>

          <BottomNav pathname={pathname} />
        </form>
      )}
    </>
  );
};

export default PromptPage;
