import React, { useEffect, useState } from 'react';
import './coin.css'
import { useParams } from 'react-router-dom';

const Coin = () => {

    const {coinId} = useParams();

    const [coinData, setCoinData] = useState(null);

    const fetchCoinData = async()=>{

        try {
            const response = await fetch(`https://api.coincap.io/v2/assets/${coinId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setCoinData(data.data); 
        } catch (error) {
            console.error('Error fetching coins:', error);
        }
         
    }
    useEffect(()=>{fetchCoinData()},[coinId])
    if (!coinData) {
        return(
            <div className='loading'>
                <div className='spin'></div>

            </div>
        )
    }
    return (
        <div className='coin'>
            <div className='coin-name'>
                <p>{coinData.name} ({coinData.symbol.toUpperCase()})</p>
            </div>
        </div>
    );
};

export default Coin;
