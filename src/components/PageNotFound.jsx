import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <section className='mt-6 ml-8 gap-4 w-[30%] m-auto'>
        <div className='text-red-600'>404 Page Not Found</div>

        <Link to="/">
          <button className='py-2 px-6 mt-4 font-bold text-white bg-neutral-600 rounded-3xl border-none'>Return to Home</button>
        </Link>
      </section>
    </>
  )
}

export default PageNotFound;