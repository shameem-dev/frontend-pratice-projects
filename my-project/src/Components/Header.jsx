import 'boxicons';
import { useState } from 'react';

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  
  return (
    <div className={`${searchActive ? 'bg-white' : 'bg-black'}   `}>
        <div className={`py-6 px-4 md:px-24 ${searchActive ? 'hidden':'block'}  flex justify-between `}>
            {/* Left section */}
            <div className="flex items-center">
            <a href="https://www.abstract.com/" className="flex">
                <img src="../../assets/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg" alt="abstract logo" className="rounded-md  h-8 pl-2" />
                
            </a>
            <a href="">
                <p className="text-white text-2xl pl-2 font-normal">| Help Center</p>
            </a>
            </div>

            {/* Right section */}
            <div className='flex items-center md:hidden'>
              <div className='hover:scale-110 cursor-pointer' onClick={toggleSearch}>
                  <box-icon name='search' color='rgba(250,250,250,0.9)' size='md'></box-icon>
              </div>
            <div className='ml-3 cursor-pointer' onClick={toggleMenu}>
                { menuActive ? <box-icon name='x'color='rgba(250,250,250,0.9)' size='md'></box-icon> :
                <box-icon name='menu' color='rgba(250,250,250,0.9)' size='md' ></box-icon> 
                
}
            </div>
            </div>
            <div className='hidden md:block text-white'>
              <button className="btn btn-wide  bg-black text-white outline outline-1 outline-white hover:bg-black" >Submit a request</button>
              <button className="btn bg-violet-700 text-white hover:bg-white hover:text-black outline-none ml-4">Sign in</button>
            </div>
        </div>
        
        <div className={`px-4   md:px-24 py-6 flex items-center ${searchActive ? 'block':'hidden'}`}>
            
            <input
            
            type="text"
            placeholder="Search"
            className="w-10/12 px-4 py-2 rounded bg-white text-black outline-1 outline h-12"
            />
            
          <div className='ml-2 cursor-pointer'  onClick={toggleSearch}>
            <box-icon name='x' size='sm'></box-icon>
          </div>
            
          
          
        </div>
      

{menuActive && (
        <div className='absolute top-[90px] w-full bg-black'>
            <hr />
            <div className=' text-white flex flex-col items-center text-3xl'>
                <div className='m-7'>
                    <a href="">Sumbit a request </a>
                </div>
                <div className='m-7'>
                    <a href="">Sign in</a>
                </div>
            </div>
        </div>
    )}

      
    </div>
    
  );
};

export default Header;
