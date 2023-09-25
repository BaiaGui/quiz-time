import a from '../assets/arrow.svg'


export function Footer({active, questionNumber, totalNumber, handleClick}){
    return (
        <div className="flex w-full justify-between items-center">
            <p className="text-2xl flex items-center font-bold">{questionNumber+1} <span className='text-sm ml-1'> / {totalNumber}</span></p>
            {active?<button onClick={handleClick} className='bg-green-light w-12 h-12 flex justify-center items-center rounded-full hover:scale-105 transition-all'>
                <ArrowIcon color="#5CAD1D"/>
            </button>:<button className='bg-grey-3 w-12 h-12 flex justify-center items-center rounded-full cursor-default'>
                <ArrowIcon color="#565E6D"/>
            </button>}
            

        </div>
    );
}



function ArrowIcon({color}){
    return (
    <>
    <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
        <path d="M9 6l6 6-6 6" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
    </>
    );
}