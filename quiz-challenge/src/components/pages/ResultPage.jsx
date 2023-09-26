import { Button } from "../Button";

export function ResultPage({result, handleClick}){
    return (
      <div className='bg-grey-5 w-screen h-screen flex justify-center items-center text-grey-1'>
        <div className='bg-grey-6 px-20 py-10 rounded-md w-2/4 h-2/4 flex'>

          <div className=" flex flex-col justify-center pr-10 w-1/2 ">
          <p className="text-3xl font-bold">Resultado:</p>
          <p className="text-xl">Você acertou <span className="text-green-light font-bold">{result[1]}</span> {result[1]>1?"questões":"questão"} do teste!</p>
          <Button handleClick={handleClick}>Concluir</Button>
          </div>
         <div className="w-1/2 pl-10 flex items-center justify-center">
          <div className=" w-80 h-80 border-8 border-green-light rounded-full flex justify-center items-center hover:scale-105 hover:rotate-12 transition-all">
             <p className="text-green-light font-bold text-6xl">{(result[0]*100).toFixed(1)}%</p>
          </div>
</div>          
         
        </div>
      </div>
    );
  }