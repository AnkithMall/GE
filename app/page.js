
import About from '@/lib/About'
import HeroComponent from '@/lib/HeroComponent'
import Loans from '@/lib/Loans'

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
          },
          {
            type: "Education Loan",
            image: "/eduloan.jpg",
          },]} />
        </div>
        <div className='h-[100vh] snap-always snap-start bg-gradient-to-r from-[#ffdeda] to-[#dfeeff]'>
          <Loans loans={[
            {
              type: "Personal Loan",
              image: "/eduloan.jpg",
            },
            {
              type: "Business Loan",
              image: "/eduloan.jpg",
            },
          ]} />
        </div>
        <div className='h-[100vh] snap-always snap-start bg-gradient-to-r from-[#ffdeda] to-[#dfeeff]'>
          <Loans loans={[
            {
              type: "Mortgage Loan",
              image: "/eduloan.jpg",
            },
          ]} />
        </div>
      </div>
    </main>
  )
}
