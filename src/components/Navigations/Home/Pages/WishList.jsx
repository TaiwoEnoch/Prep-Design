import { Link } from 'react-router-dom';

import wishlist from '../../../../assets/HomeIcons/wishlist.png';


const WishList = () => {
  return (
    <>
      <section>
        <div className='border py-3 px-2 rounded-2xl bg-[#fff]'>
          <Link to="/" className='flex flex-col font-extralight text-sm items-center'>
           <img src={wishlist} alt="" />
           <span>WishList</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default WishList