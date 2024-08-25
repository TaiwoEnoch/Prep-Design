import { Link } from 'react-router-dom';

import owanbe from '../../../../assets/HomeIcons/owambe.png';


const Owanbe = () => {
  return (
    <>
      <section>
        <div className='border py-3 px-2 rounded-2xl bg-[#fff]'>
          <Link to="/" className='flex flex-col font-extralight text-sm items-center'>
           <img src={owanbe} alt="" />
           <span>Owanbe</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Owanbe