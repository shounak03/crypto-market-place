import { useContext, useEffect, useState } from 'react'
import  './home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
const Home = () =>{
    const formatNumber = (number) => {
        return parseFloat(number).toFixed(2).toLocaleString();
      };
    const {allCoin} = useContext(CoinContext)
    
    const [displayCoin, setDisplayCoin] = useState([])

    const [input, setInput] = useState('');

    const inputHandler = (e) =>{
        setInput(e.target.value)
        if(e.target.value===""){
            setDisplayCoin(allCoin)
        }
    }
    const searchHandler = async(e) =>{
        e.preventDefault()
        const coins = await allCoin.filter((item)=>{
                        return item.name.toLowerCase().includes(input.toLowerCase())

                    })
        setDisplayCoin(coins);
    }

    useEffect(()=>{
        setDisplayCoin(allCoin);
    },[allCoin])
    return(
        <div className='home'>
            <div className='hero'>
                <h1>Largest <br /> Crypto Market Place</h1>
                <p>Worlds Largest cypto-currency marketplace. <br /> 
                    sign-up to explore more
                </p>
                <form onSubmit={searchHandler}>
                    <input onChange={inputHandler} list='coinlist' value={input} type="text" placeholder='search here' required/>

                    <datalist id='coinlist'>
                        {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
                    </datalist>
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className='crypto-table'>
                <div className='table-layout'>
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p style={{textAlign:"center"}}>24H Chnage</p>
                    <p className='market-cap'>Market Cap</p>
                </div>
                {
                    displayCoin.slice(0,10).map((item, index)=>(
                        <Link to={`/coin/${item.id}`} className='table-layout' key={index}>
                        <p>{item.rank}</p>
                        <p>{item.name}</p>
                        <p >
                            ${formatNumber(item.priceUsd)}</p> {/* Ensure the price is a number */}
                        <p style={{ textAlign: "center" }} className={item.changePercent24Hr>0?'green':'red'}>
                            {parseFloat(item.changePercent24Hr).toFixed(2)}%</p> {/* Ensure the change percent is a number */}
                        <p className='market-cap'>${parseFloat(item.marketCapUsd).toFixed(2).toLocaleString()}</p> {/* Ensure the market cap is a number */}
                      </Link>
                    ))
                }

            </div>
        </div>
    )
}
export default Home