import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./CoinCarousel.css"

const CoinCarousel = () => {

    const [ coinData, setCoinData] = useState([]);

    const getData = async () => {

        const options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            headers: {
                'X-RapidAPI-Key': 'e8067d888cmshd2b538d56dcd82bp111738jsn6ddc130cbe29',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.data.coins);
            setCoinData(response.data.data.coins)
            console.log(coinData)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className='coins-carousel slider-area' >  
            {/* <button onClick={getData}>Get Coins</button> */}
            <div className="coins-container wrapper">
                {/* <div className="coins-wrapper">
                    <img src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg" alt="coin-img" height={50} width={50}/>
                    <div className="coins">
                        <span className="coin-name">Bitcoin <span className="coin-symbol">(BTC)</span></span>
                        <div className="coin-price">$35,000</div>
                    </div>
                </div> */}
                {coinData.map((token) => {
                    return (
                        <>
                            <div className="coins-wrapper item" key={token.uuid}>
                                <img src={token.iconUrl} alt="coin-img" height={50} width={50}/>
                                <div className="coins">
                                    <span className="coin-name">{token.name} <span className="coin-symbol">({token.symbol})</span></span>
                                    <div className="coin-price">{Math.round(token.price).toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</div>
                                </div>
                            </div>
                        </>
                    )
                })}
                {coinData.map((token) => {
                    return (
                        <>
                            <div className="coins-wrapper item" key={token.uuid}>
                                <img src={token.iconUrl} alt="coin-img" height={50} width={50}/>
                                <div className="coins">
                                    <span className="coin-name">{token.name} <span className="coin-symbol">({token.symbol})</span></span>
                                    <div className="coin-price">{Math.round(token.price).toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</div>
                                </div>
                            </div>
                        </>
                    )
                })}
                
            </div>
        </div>
    )
}

export default CoinCarousel
