import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3 '>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <Link to='/' >
                    <span className='text-slate-500'>Mufees</span>
                    <span className='text-slate-700'>Estates</span>
                </Link>
            </h1>
            <form className='bg-slate-100 flex p-3 items-center rounded-lg '>
                <input className='bg-transparent focus:outline-none w-24 sm:w-64' placeholder='Search...' />
                <FaSearch className='text-slate-600'  />
            </form>
            <ul className='flex gap-4'>
                <Link to='/' >
                    <li className='hidden sm:inline text-slate-700 '>Home</li>
                </Link>
                <Link to='/about' >
                    <li className='hidden sm:inline text-slate-700 '>About</li>
                </Link>
                <Link to='/sign-in'>
                    <li className=' text-slate-700 '>Sign In</li>
                </Link>
            </ul>
        </div>
        
    </header>
  )
}
