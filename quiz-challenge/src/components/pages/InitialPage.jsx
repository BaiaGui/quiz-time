export function InitialPage({handleClick}){
    return (
      <div className='bg-grey-5 w-screen h-screen flex justify-center items-center text-grey-1'>
        <div className='bg-grey-6 px-36 py-24 rounded-md h-4/6 w-3/5 flex flex-col justify-between items-center'>
        <p className="text-4xl">👋 <span className='font-bold'>Quiz</span>Time</p>
          
          <button className='bg-[#996DFF] px-12 py-3 rounded-md font-bold' onClick={handleClick}>Iniciar</button>
        </div>
      </div>
    );
  }