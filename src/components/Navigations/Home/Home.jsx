import NewPost from './Pages/NewPost';
import Kiwi from './Pages/Kiwi';
import DiaryRoom from './Pages/DiaryRoom';
import Owanbe from './Pages/Owanbe';
import Rands from './Pages/Rands';
import QnAns from './Pages/QnAns';
import Streaks from './Pages/Streaks';
import WishList from './Pages/WishList';
import Claim from './Empty/Claim';
import PlainCard from './Empty/PlainCard';
// bg-[#f5f5f5]
const Home = () => {
  return (
    <>
      <section className="w-full">
        <div className='w-full md:w-[100%] max-w-full bg-[#fbfbfb] border-t-2 border-[#e5e5e5] py-24 mx-auto'>
          <div className='flex gap-4 md:gap-10 py-6 justify-center'>
            <NewPost />
            <QnAns />
            <Kiwi />
            <Rands />
          </div>
          <div className='px-4'>
            <div className='flex w-full md:w-[50%] max-w-full mx-auto justify-center text-[#C0BFBF] bg-[#efefef] py-16 px-6 rounded-3xl'>
              <Claim />
            </div>
          </div>
          <div className='flex gap-4 md:gap-10 py-6 justify-center'>
            <WishList />
            <DiaryRoom />
            <Owanbe />
            <Streaks />
          </div>
          <div className='flex w-full md:w-[50%] max-w-full mx-auto gap-4 py-3 px-4 justify-center'>
            <div className='text-[#C0BFBF] bg-[#efefef] py-10 px-[24%] rounded-2xl'>
              <PlainCard />
            </div>
            <div className='text-[#C0BFBF] bg-[#efefef] py-10 px-[24%] rounded-2xl'>
              <PlainCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home