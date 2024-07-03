import 'boxicons';
import { useState } from 'react';

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <div className='bg-black'>
      <div className={`py-6 px-4 md:px-24 ${searchActive ? 'hidden':''} flex justify-between `}>
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
          <div className='ml-3 rounded-sm'>
            <box-icon name='menu' color='rgba(250,250,250,0.9)' size='md'></box-icon>
          </div>
        </div>
      </div>

      {searchActive && (
        <div className="px-4 md:px-24 py-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded bg-white text-black"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
