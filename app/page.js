
import HeroComponent from '@/lib/HeroComponent'

export default function Home() {
  return (
    <main className="flex flex-col gap-0">
      <div className='w-full h-[100vh] overflow-y-scroll snap-mandatory snap-y'>
        <div className="hero_">
          <HeroComponent />
        </div>
        <div className='h-[100vh] snap-always snap-start bg-purple-500'>
          Home Page
        </div>
        <div className='h-[100vh] snap-always snap-start bg-green-500'>
          Home Page
        </div>
      </div>
    </main>
  )
}
