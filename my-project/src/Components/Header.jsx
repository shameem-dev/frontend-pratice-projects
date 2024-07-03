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
            <div className="flex">
            <a href="https://www.abstract.com/" className="flex">
                <img src="../../assets/abstract logo.jpg" alt="abstract logo" className="rounded-md w-8 h-8" />
                <p className="text-white text-2xl pl-2 font-medium">Abstract</p>
            </a>
            <a href="">
                <p className="text-white text-2xl pl-2 font-normal">| Help Center</p>
            </a>
            </div>

            {/* Right section */}
            <div className='flex'>
            <div className='hover:scale-110 cursor-pointer' onClick={toggleSearch}>
                <box-icon name='search' color='rgba(250,250,250,0.9)' size='md'></box-icon>
            </div>
            <div className='ml-3 cursor-pointer' onClick={toggleMenu}>
                { menuActive ? <box-icon name='x'color='rgba(250,250,250,0.9)' size='md'></box-icon> :
                <box-icon name='menu' color='rgba(250,250,250,0.9)' size='md' ></box-icon> 
                
}
            </div>
            </div>
        </div>
        
        <div className={`px-4 md:px-24 py-6 flex items-center ${searchActive ? 'block':'hidden'}`}>
            
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
        <div>
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
