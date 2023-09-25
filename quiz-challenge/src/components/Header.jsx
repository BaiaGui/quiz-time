import checkIcon from "../assets/check.svg";

export function Header({correctAnswers}){

    return (
        <div className="flex w-full  justify-between items-center">
            <p className="text-2xl">👋 <span className='font-bold'>Quiz</span>Time</p>
            <Score>{correctAnswers}</Score>
        </div>
    );
}

function Score({children}){
    return (
        <div className=" bg-grey-4 border border-green-light rounded-md flex items-center justify-center px-4 py-1">
           <img src={checkIcon} alt="" />
            <p className="text-green-light ml-1 text-lg font-bold">{children}</p>
        </div>
    );
}