import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#010332] text-white font-semibold p-2 flex justify-between items-center">
      <div className="flex items-center">
      <img src="/images/saveshare-logo2-removebg-preview.png" alt="Saveshare" className="pl-4, mr-4" style={{ maxWidth: '100px', maxHeight: '40px' }} />
        <Link href="/" className="mr-4" >
            Home
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/about" className="mr-6"> 
            About 
        </Link>
        <Link href="/contact" className="pr-4"> 
            Contact 
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
