import { Link } from 'react-router-dom';

import rands from '../../../../assets/HomeIcons/rands.png';


const Rands = () => {
  return (
    <>
      <section>
        <div className='border py-3 px-4 rounded-2xl bg-[#fff]'>
          <Link to="/" className='flex flex-col font-extralight text-[12px] items-center'>
           <img src={rands} alt="" />
           <span>Rands</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Rands