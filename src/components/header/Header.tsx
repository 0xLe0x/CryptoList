import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='z-10 fixed top-0 w-full flex items-center justify-between bg-[#171d2d] h-[10vh] px-5 shadow-[1px_1px_8px_#000000] overflow-hidden'>
      <div className='links flex justify-center items-center gap-10'>
        <Link to='/' className='text-white text-2xl uppercase font-bold'>
          Protocalls
        </Link>
      </div>
      <span className='cursor-pointer w-9 h-9 p-[2px] rounded-full bg-gradient-to-t from-[#195bd6] to-[#C01DDE]'>
        <button className='bg-[#171d2d] w-full h-full rounded-full flex justify-center items-center '>
          <FaUser />
        </button>
      </span>
    </header>
  );
};

export default Header;
