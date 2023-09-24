import reactLogo from '../assets/react.svg'

export function Card({value, answer, imgLabel}){
    return (
        <div className="bg-gray-800 flex flex-col w-64 pb-12 rounded-lg items-center border-4 border-gray-600 hover:bg-gray-700 hover:border-gray-500 cursor-pointer ">
            <div className='w-full h-12 flex justify-end items-center pr-3'><div className=' w-7 h-7 border-gray-600 border-4 rounded-full'></div></div>
                <div className='px-12 flex flex-col items-center'>
                <img src={imgLabel} alt="" className='w-36 h-36' />
                <p className=" text-gray-100 mt-6 text-center text-lg">{answer}</p>
                </div>
        </div>
    );
}  