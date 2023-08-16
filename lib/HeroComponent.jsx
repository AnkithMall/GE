const HeroComponent = () => {
  return (
    <>
      <div className='hero_nav' >
        <div className="nav_link">
          Home
        </div>
        <div className="nav_link">
          Loan
        </div>
        <div className="nav_link">
          Contact
        </div>
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