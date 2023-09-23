import checkIcon from '../assets/check.svg'

export function Header(){
    return (
        <div className="flex w-full  justify-between items-center">
            <p className="text-white text-2xl">👋 QuizTime</p>
            <Score/>
        </div>
    );
}


function Score(){
    return (
        <div className=" bg-gray-900 border border-green-400 rounded-md flex items-center justify-center px-4 py-1">
           <img className='' src={checkIcon} alt="" />
            <p className="text-green-400 ml-1 text-lg font-bold">3</p>
        </div>
    );
}