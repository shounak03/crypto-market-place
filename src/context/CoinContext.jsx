import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([])

    // const [currency,setCurr] = useState({name:"usd", symbol:"$"})

    const fetchAllCoin = async () => {
        try {
            const response = await fetch('https://api.coincap.io/v2/assets');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setAllCoin(data.data); 
        } catch (error) {
            console.error('Error fetching coins:', error);
        }
    };

    const contextValue ={
        allCoin
    }
    useEffect(()=>{
        fetchAllCoin()
    },[])

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}    
        </CoinContext.Provider>
    )
}
export default CoinContextProvider
