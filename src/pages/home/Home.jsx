import  './home.css'
const Home = () =>{
    return(
        <div className='home'>
            <div className='hero'>
                <h1>Largest <br /> Crypto Market Place</h1>
                <p>Worlds Largest cypto-currency marketplace. <br /> 
                    sign-up to explore more
                </p>
                <form action="">
                    <input type="text" placeholder='search here' />
                    <button type='submit'>Search</button>
                </form>
            </div>
        </div>
    )
}
export default Home