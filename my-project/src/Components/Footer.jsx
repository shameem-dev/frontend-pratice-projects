

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row  relative pt-10 pl-20 pb-32">
      <div className="pr-12 pb-4">
        <h3 className="font-semibold text-2xl pb-4">Abstract</h3>

            <p className="hover:underline"><a href="">Start Trial</a></p>
            <p className="hover:underline"><a href="">Pricing</a></p>
            <p className="hover:underline"><a href="">Download</a></p>

      </div>
      <div className="pr-12 pb-4">
        <h3 className="font-semibold text-2xl pb-4">Resources</h3>
            <p className="hover:underline"><a href="">Blog</a></p>
            <p className="hover:underline"><a href="">Help Center</a></p>
            <p className="hover:underline"><a href="">Release Notes</a></p>
            <p className="hover:underline"><a href="">Status</a></p>
            
            
            
      </div>
      <div className="pr-12 pb-4">
        <h3 className="font-semibold text-2xl pb-4">Community</h3>
            <p className="hover:underline" ><a>Twitter</a></p>
            <p className="hover:underline"><a>LinkedIn</a></p>
            <p className="hover:underline"><a>Facebook</a></p>
            <p className="hover:underline"><a>Dribbble</a></p>
            <p className="hover:underline"><a>Podcast</a></p>    
            
        
      </div>
      <div  className="pb-4">
        <h3 className="font-semibold text-2xl pb-4">Company</h3>

        <p className="hover:underline"><a href="">About Us</a></p>
        <p className="hover:underline"><a href="">Careers</a></p>
        <p className="hover:underline"><a href="">Legal</a></p>
        
        
        
        <h4 className="font-bold text-xl  pt-4">Contact Us</h4>
        <p className="hover:underline"><a href="">info@abstract.com</a></p>
        
      </div>

      <div className="absolute bottom-8 right-12">
        <img src="../../assets/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg" alt="" className="w-28 pb-2" />
        <p>© Copyright 2024</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
      












    </div>
  )
}

export default Footer
