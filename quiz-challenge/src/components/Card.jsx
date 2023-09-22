import reactLogo from '../assets/react.svg'

export function Card(){
    return (
        <div className="bg-gray-800 flex flex-col w-64 pb-12 rounded-lg items-center">
            <div className='w-full h-12 flex justify-end items-center pr-3'><div className=' w-6 h-6 border-gray-600 border-2 rounded-full'></div></div>
                <div className='px-12 flex flex-col items-center'>
                <img src={reactLogo} alt="" className='w-36 h-36' />
                <p className=" text-gray-100 mt-6 text-center">Quanto é 1+1?-------------------------------------------------------------</p>
                </div>
        </div>
    );
}