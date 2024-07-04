

const Main = () => {
  return (
    <div className="bg-blue-200 flex items-center justify-center flex-col w-full pt-20 pb-28 px-8">
        <div className="p-3">
            <h1 className="text-7xl">How can we Help?</h1>
        </div>
        <div className="p-3 relative ">
            <input type="text" 
            className="p-4  rounded bg-white text-black outline-1 outline h-16 w-4/5 outline-blue-600 shadow-sm width-input"
            placeholder="Search..."
            style={{minWidth: "300px", maxWidth:'720px'}}
                
             />
             <span className='absolute top-7 right-6 cursor-pointer'>
                <box-icon name='right-arrow-alt' size='md'></box-icon>
            </span>
             
        

        </div>
      
      
    </div>
  )
}

export default Main
