
export function Button({children, handleClick}){
    return  <button className='bg-[#744ad4] mt-12 px-12 py-3 rounded-md font-bold hover:scale-105 transition-all' onClick={handleClick}>{children}</button>
}