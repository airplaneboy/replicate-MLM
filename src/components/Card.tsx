const Card = ({ title, detail }: { title: string; detail: string }) => {
  return (
    <div className='card w-96 bg-neutral-950 shadow-xl shadow-black'>
      <div className='card-body '>
        <h2 className='card-title'>✨ {title}</h2>
        <p className='font-nunito text-base'>{detail}</p>
      </div>
    </div>
  );
};

export default Card;
