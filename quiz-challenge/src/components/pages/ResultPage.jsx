export function ResultPage({result}){
    return (
      <div className='bg-grey-5 w-screen h-screen flex justify-center items-center text-grey-1'>
        <div className='bg-grey-6 px-36 py-16 rounded-md w-3/5'>
          <p className="text-4xl font-bold">Resultado:</p>
          <p className="text-3xl">Você acertou <span className="text-green-light font-bold">{(result*100).toFixed(1)}%</span> do teste!</p>
        </div>
      </div>
    );
  }