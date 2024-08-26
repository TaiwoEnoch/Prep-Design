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
  // md:mt-8
  return (
    <>
      <section className='w-full md:w-[100%] max-w-full bg-white border-b-2 border-[#fcdd00] px-4 py-6'>
        <div className='flex justify-between px-4'>
          <div className='flex items-center'>
            <img src={logo} alt="Logo" />
            <span className="ml-2">{navName}</span> {/* Display the navigation name */}
          </div>
          <div>
            <img src={useravatar} alt="User Avatar" />
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBar;
