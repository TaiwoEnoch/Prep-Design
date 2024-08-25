import { Link } from 'react-router-dom';

import streak from '../../../../assets/HomeIcons/streak.png';


const Streaks = () => {
  return (
    <>
      <section>
        <div className='border py-3 px-3 rounded-2xl bg-[#fff]'>
          <Link to="/" className='flex flex-col font-extralight text-sm items-center'>
           <img src={streak} alt="" />
           <span>Streaks</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Streaks