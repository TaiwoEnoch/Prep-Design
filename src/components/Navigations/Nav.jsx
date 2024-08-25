import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const Nav = () => {
  const location = useLocation();

  // Determine if the current path matches the given route
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className='w-full'>
        <section className='w-full md:w-[40%] max-w-full bg-[#fbfbfb] border-t-2 border-[#e5e5e5] py-4 mx-auto flex justify-center'>
          <ul className='flex gap-12 items-center'>
            <li>
              <Link 
                to="/" 
                className='flex flex-col font-extralight text-[10px] items-center '
              >
              <HomeIcon 
                alt="home" 
                className={`w-[25px] ${isActive('/') ? 'text-[#fcdd00]' : 'text-gray-400'}`} 
              />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/messages" 
                className='flex font-extralight text-[10px] flex-col items-center'
              >
              <MessageIcon 
                alt="messages" 
                className={`w-[20px] ${isActive('/messages') ? 'text-[#fcdd00]' : 'text-gray-400'}`} 
              />
                <span>Messages</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/create" 
                className='flex font-extralight text-[10px] flex-col items-center'
              >
              <CreateNewFolderIcon 
                alt="create" 
                className={`w-[20px] ${isActive('/create') ? 'text-[#fcdd00]' : 'text-gray-400'}`} 
              />
                <span>Create</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/profiles" 
                className='flex font-extralight text-[10px] flex-col items-center'
              >
              <PersonOutlineIcon 
                alt="profile" 
                className={`w-[20px] ${isActive('/profiles') ? 'text-[#fcdd00]' : 'text-gray-400'}`} 
              />
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
}

export default Nav;
