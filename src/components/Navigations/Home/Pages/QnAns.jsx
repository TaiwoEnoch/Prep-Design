import { Link } from 'react-router-dom';

import qnAns from '../../../../assets/HomeIcons/Qnans.png';


const QnAns = () => {
  return (
    <>
      <section>
        <div className='border py-3 px-4 rounded-2xl bg-[#fff]'>
          <Link to="/" className='flex gap-1 flex-col font-extralight text-[12px] items-center'>
           <img src={qnAns} alt="" />
           <span>QnAns</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default QnAns