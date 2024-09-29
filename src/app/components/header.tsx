import Link from 'next/link';

const Header = () => {
  return (
    
      <div className='header'>
        <ul className="header-buttons">
        
        
      
      
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact Us</Link>
        </ul>
      
        </div>
  );
};


    
 
export default Header;
