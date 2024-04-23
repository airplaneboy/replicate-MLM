import React from 'react';
import Carousel from './Carousel';

const Loading = () => {
  const contentArray = [
    {
      id: 1,
      title: 'Be Specific',
      detail:
        "Clearly define the desired subject, style, and mood of the image to guide the AI model. For example, instead of 'a forest scene,' try 'a misty, enchanted forest with tall, twisting trees and a hidden pathway.'",
    },
    {
      id: 2,
      title: 'Provide Context',
      detail:
        "Include relevant details such as setting, characters, or objects to enhance understanding and creativity. For instance, 'a cozy cafe with a barista serving coffee to a group of friends chatting at a table.'",
    },
    {
      id: 3,
      title: 'Use Descriptive Language',
      detail:
        "Utilize vivid adjectives and adverbs to paint a clear picture in the AI model's 'mind.' Instead of 'a dog,' try 'a fluffy golden retriever bounding through a sun-drenched meadow.'",
    },
    {
      id: 4,
      title: 'Consider Constraints',
      detail:
        "Set limitations on colors, shapes, or themes to ensure coherence and relevance to the project. For example, 'use only shades of blue and green to depict a serene ocean landscape.'",
    },
    {
      id: 5,
      title: 'Encourage Iteration',
      detail:
        'Allow for multiple attempts or variations to refine the generated images until desired results are achieved. Provide feedback to the AI model and iterate on the prompt as needed.',
    },
    {
      id: 6,
      title: 'Include References',
      detail:
        'Provide examples or references to inspire the AI model and give it a starting point for creativity. This could include images, sketches, or descriptions of similar scenes.',
    },
    {
      id: 7,
      title: 'Test and Adjust',
      detail:
        'Experiment with different prompts, observe the generated outputs, and fine-tune the prompts based on results. Iterate on the prompt based on the quality and relevance of the generated images.',
    },
  ];
  return (
    <div className='h-screen w-full flex justify-between flex-col'>
      <div className='relative w-full h-full flex-[3] flex items-center justify-center'>
        <span className='loading loading-ring w-full h-full absolute inset-0'></span>
        <span className=' font-extrabold font-nunito text-2xl text-neutral-500 z-10'>Generating Your Images... </span>
      </div>
      <Carousel
        content={contentArray}
        heading={
          <div className='font-nunito font-bold text-lg mb-3 px-5 text-neutral-500'>
            Advices from {process.env.NEXT_PUBLIC_SITE_NAME} to create an effective prompt
          </div>
        }
      />
    </div>
  );
};

export default Loading;
