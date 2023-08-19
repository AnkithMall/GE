
import About from '@/lib/About'
import HeroComponent from '@/lib/HeroComponent'
import Loans from '@/lib/Loans'
import Apply from '@/lib/Apply'

export default function Home() {
  const loans = [
    {
      type: "Home Loan",
      image: "/homeloan.jpg",
    },
    {
      type: "Education Loan",
      image: "/eduloan.jpg",
    },
    {
      type: "Personal Loan",
      image: "/eduloan.jpg",
    },
    {
      type: "Business Loan",
      image: "/eduloan.jpg",
    },
    {
      type: "Mortgage Loan",
      image: "/eduloan.jpg",
    },
  ]
  return (
    <main className="flex flex-col gap-0">
      <div className='w-full h-[100vh] overflow-y-scroll snap-mandatory snap-y'>
        <div className="hero_">
          <HeroComponent />
        </div>
        <div className='h-[100vh] snap-always snap-start bg-gradient-to-r from-[#8F2D56] to-fuchsia-500'>
          <About />
        </div>
        <div className='h-[100vh] snap-always snap-start bg-gradient-to-r from-[#ffdeda] to-[#dfeeff]'>
          <Loans loans={[{
            type: "Home Loan",
            image: "/homeloan.jpg",
            details:"Rate of interest start from 7.65% , Construction Loans starts froms 7.65% , upto 16% Depend up cibil.",
          },
          {
            type: "Education Loan",
            image: "/eduloan.jpg",
            details:"Rate of intrest Starts from 8.45%",
          },]} />
        </div>
        <div className='h-[100vh] snap-always snap-start bg-gradient-to-r from-[#ffdeda] to-[#dfeeff]'>
          <Loans loans={[
            {
              type: "Personal Loan",
              image: "/eduloan.jpg",
              details:"",
            },
            {
              type: "Business Loan",
              image: "/eduloan.jpg",
              details:"",
            },
          ]} />
        </div>
        <div className='h-[100vh] snap-always snap-start bg-gradient-to-r from-[#ffdeda] to-[#dfeeff]'>
          <Loans loans={[
            {
              type: "Mortgage Loan",
              image: "/eduloan.jpg",
              details:"",
            },
            {
              type: "Agriculture Loan",
              image: "/eduloan.jpg",
              details:"",
            },
          ]} />
        </div>
        <div className='h-[100vh] snap-always snap-start bg-gradient-to-r from-[#ffdeda] to-[#dfeeff]'>
          <Apply />
        </div>
      </div>
    </main>
  )
}
