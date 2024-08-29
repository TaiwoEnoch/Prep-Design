import { useLocation } from 'react-router-dom';
import logo from '../assets/Header/logo.png';
import useravatar from '../assets/Header/useravatar.png';

const TopBar = () => {
  const location = useLocation();
  
  // Map the current pathname to the corresponding name
  const getNavName = (pathname) => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/messages':
        return 'Messages';
      case '/create':
        return 'Create';
      case '/profiles':
        return 'Profile';
      default:
        return '';
    }
  };

  const navName = getNavName(location.pathname);

  return (
    <header className='w-full bg-white border-b-2 border-[#fcdd00] px-4 py-6 fixed top-0 left-0 right-0 z-10'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span className="ml-2 text-xl font-medium">{navName}</span> {/* Display the navigation name */}
        </div>
        <div>
          <img src={useravatar} alt="User Avatar" className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
