import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (baseUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10') => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [nextUrl, setNextUrl] = useState(null)

    const fetchData = async (url) => {
        setLoading(true)
        const {data: datas} = await axios.get(url)
        setData(datas.results)
        setNextUrl(datas.next)
        setLoading(false)
    }

    const fetchMoreData = async () => {
        setLoading(true)
        const {data: datas} = await axios.get(nextUrl)
        setTimeout(() => {
            setData(prevData => [...prevData, ...datas.results])
            setNextUrl(datas.next)
            setLoading(false)
        }, 12000);
    }

    useEffect(() => {
        let isCancelled = false;
            !isCancelled && fetchData(baseUrl)

        return () =>
            isCancelled = true
    }, [])

    return {
        data,
        loading,
        nextUrl,
        setNextUrl,
        fetchMoreData,
    }
}

export default useFetch