import { Button } from "../Button";

export function InitialPage({handleClick}){
    return (
      <div className='bg-grey-5 w-screen h-screen flex justify-center items-center text-grey-1'>
        <div className='bg-grey-6 px-36 py-24 rounded-md h-4/6 w-2/4 flex flex-col justify-between items-center'>
        <p className="text-4xl">👋 <span className='font-bold'>Quiz</span>Time</p>
         <p className="text-lg">Bem-vindo ao QuizTime! Clique em iniciar para testar seus conhecimentos</p> 
          <Button handleClick={handleClick}>Iniciar</Button>
        </div>
      </div>
    );
  }