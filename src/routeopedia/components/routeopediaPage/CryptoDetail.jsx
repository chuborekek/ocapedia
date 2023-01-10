import React from 'react'
import { useParams } from 'react-router-dom'

const CryptoDetail = () => {
    const {cryptoSymbol,cryptoId} = useParams()
  return <>
    {cryptoId &&
    <div>Crypto Detail for ID# {cryptoId}</div>
    }
    {cryptoSymbol &&
    <div>Crypto Detail for Symbol {cryptoSymbol}</div>
    }
  </>
}

export default CryptoDetail