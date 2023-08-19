"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const HeroComponent = () => {
  return (
    <>
      <div className='hero_nav' >
          <NavigationMenu className='test1'>
            <NavigationMenuList>
              <NavigationMenuItem className="home">
                Home
              </NavigationMenuItem>
              <NavigationMenuItem className="loans_t">
                <NavigationMenuTrigger className="loan_tab">Loans</NavigationMenuTrigger>
                <NavigationMenuContent className="content_">
                  <ul className="loans">
                    <li>Home Loans</li>
                    <li>Education Loans</li>
                    <li>Personal loan</li>
                    <li>Business loan</li>
                    <li>Mortgage loans</li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="contact">
                <NavigationMenuTrigger className="loan_tab">Contacts</NavigationMenuTrigger>
                <NavigationMenuContent className="content_">
                  <ul className="loans">
                    <li>ph1 : 
                      <ul>
                        <li>
                          <a target="_blank" href="tel:8333893361">8333893361</a>
                        </li>
                        <li>
                          <a target="_blank" href="tel:6300095493">6300095493</a>
                        </li>
                      </ul>
                    </li>
                    <li>mail to :- <a target="_blank" href="mailto:gkenterprises078@gmail.com">gkenterprises078@gmail.com</a></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
      </div>
      <div className="content">
        <h1 className="company"> Ganesh Enterprise </h1>
        <div className="hero_text">
          <h2>
            Welcome to Ganesh Enterprise: Your Path to Financial Growth
          </h2>
          <p>
            Unlocking Your Dreams, One Loan at a Time
          </p>
          <p>
            Empowering dreams at Ganesh Enterprise.
            Pursue education, homeownership, or business
            growth with tailored financial solutions.
            Your success story begins here.
          </p>
        </div>
      </div>
    </>
  )
}

export default HeroComponent