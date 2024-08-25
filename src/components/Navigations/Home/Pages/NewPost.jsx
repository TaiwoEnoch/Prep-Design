import { Link } from 'react-router-dom';

import newpost from '../../../../assets/HomeIcons/newpost.png';

const NewPost = () => {
  return (
    <>
      <section className=''>
        <div className='border py-3 px-2 rounded-2xl bg-[#fff]'>
          <Link to="/" className='flex flex-col font-extralight text-[12px] items-center'>
            <img src={newpost} alt="" />
           <span>New Post</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default NewPost