import { Link } from 'react-router-dom';

import kiwi from '../../../../assets/HomeIcons/kiwi.png';



const Kiwi = () => {
  return (
    <>
      <section>
        <div className='border py-3 px-6 rounded-2xl bg-[#fff]'>
          <Link to="/" className='flex flex-col font-extralight text-[12px] items-center'>
           <img src={kiwi} alt="" />
           <span>Kiwi</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Kiwi