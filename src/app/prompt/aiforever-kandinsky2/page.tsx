const Kandinsky2 = () => {
  return (
    <>
      <label className='text-xs text-neutral-500 font-semibold capitalize'>
        Negative prompt
        <textarea
          name='negative_prompt'
          placeholder='instruct the model on what to steer clear of or leave out when crafting the image'
          className='mt-3 textarea textarea-ghost border border-neutral-700 w-full focus:bg-[unset] font-normal font-nunito h-20'
        />
      </label>
      <input className='px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black' />
    </>
  );
};

export default Kandinsky2;
