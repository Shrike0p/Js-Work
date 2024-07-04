import {useEffect, useState} from 'react'

function useCurrency(currency){
    const [data, setData]=useState({})
    //i can directly call in fetch but i want that if the hook load or someone uses it then only i call that api
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
    },[currency])
    return data
}

export default useCurrency