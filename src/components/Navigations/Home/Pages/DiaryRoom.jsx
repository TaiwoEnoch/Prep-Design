import { Link } from 'react-router-dom';

import diary from '../../../../assets/HomeIcons/diary.png';


const DiaryRoom = () => {
  return (
    <>
      <section>
        <div className='border py-3 px-2 rounded-2xl bg-[#fff]'>
          <Link to="/" className='flex gap-1 flex-col font-extralight text-[12px] items-center'>
           <img src={diary} alt="" />
           <span>DiaryRoom</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default DiaryRoom