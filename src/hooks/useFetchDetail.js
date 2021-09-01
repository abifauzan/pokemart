import axios from "axios"
import { useEffect, useState } from "react"

const useFetchDetail = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    const fetchData = async (url) => {
        setLoading(true)
        const {data: datas} = await axios.get(url)
        setTimeout(() => {
            setData(datas)
            setLoading(false)
        }, 2000);
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    return {
        data,
        loading,
    }
}

export default useFetchDetail