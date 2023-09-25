import reactLogo from '../assets/react.svg'
import cancelIcon from '../assets/cancel.svg'
import checkIcon from '../assets/check.svg';

export function Card({value, revealed, answer, imgLabel, handleClick}){
    
    if(revealed){
        return (
            <div className={`bg-grey-5 flex flex-col w-64 pb-12 rounded-lg items-center border-4 hover:bg-gray-4 cursor-pointer ${value?"border-green-light":"border-red-light"}`}>
                <div className='w-full h-12 flex justify-end items-center pr-3'><div className={ `w-7 h-7 border-4 rounded-full ${value?"bg-green-light border-green-light":"bg-red-light border-red-light"}`}>
                    <img src={value?checkIcon:cancelIcon} alt="" /></div></div>
                    <div className='px-12 flex flex-col items-center'>
                    <img src={imgLabel} alt="" className='w-36 h-36' />
                    <p className=" text-grey-1 mt-6 text-center text-lg">{answer}</p>
                    </div>
            </div>
        );
    }
    else{
        return (
            <div className="bg-grey-5 flex flex-col w-64 pb-12 rounded-lg items-center border-4 border-b-8 border-grey-3 hover:bg-grey-4 hover:border-b-4 hover:scale-95 transition-all cursor-pointer" onClick={()=>handleClick(value)}>
                <div className='w-full h-12 flex justify-end items-center pr-3'><div className=' w-7 h-7 border-grey-3 border-4 rounded-full'></div></div>
                    <div className='px-12 flex flex-col items-center'>
                    <img src={imgLabel} alt="" className='w-36 h-36' />
                    <p className=" text-grey-1 mt-6 text-center text-lg">{answer}</p>
                    </div>
            </div>
        );
    }
    
}  






