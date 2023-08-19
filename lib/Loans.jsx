
const Loans = ({loans}) => {
  
    return (
        <div className="l_type">
            <section >      
                <div >
                    <div >
                        {
                            loans.map((item, idx) => {
                                return (
                                    <div key={idx}>
                                        <div >
                                            <img alt="content" src={item.image} />
                                        </div>
                                        <h2>{item.type}</h2>
                                        <p>{item.details}</p>
                                        {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Loans