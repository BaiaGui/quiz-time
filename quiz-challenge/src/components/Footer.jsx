import ArrowIcon from '../assets/arrow.svg'


export function Footer(){
    return (
        <div className="flex w-full justify-between items-center">
            <p className="text-white text-xl flex items-center">4 <span className='text-sm ml-1'> / 5</span></p>
            <button className='bg-gray-400 w-10 h-10 flex justify-center items-center rounded-full'><img src={ArrowIcon} alt="" /></button>
        </div>
    );
}
