import axios from "axios"
import { useEffect, useState } from "react"
import { checkObjectLength } from "../helpers/Util"

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'


const wildPokemon = '144|145|146|243|244|245|377|378|379|380|381|480|481|482|485|486|488|638|639|640|641|642|645|772|773|785|786|787|788|793|794|795|796|797|798|799|803|804|805|806|891|892|894|895|896|897|150|249|250|382|383|384|483|484|487|643|644|646|716|717|718|789|790|791|792|800|888|889|890|898|151|251|385|386|489|490|491|492|493|494|647|648|649|719|720|721|801|802|807|808|809|893'

const getWildPokemon = () => {

    const data = wildPokemon.split('|')
    let getRandomPokemonIds = Math.floor((Math.random()*data.length) + 1)
    return data[getRandomPokemonIds]
}

const useFetchWild = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [status, setStatus] = useState('idle')
    const [refetch, setRefetch] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        const randomPokemonIds = getWildPokemon()
        
        const { data } = await axios.get(baseUrl+randomPokemonIds)
        setData(prev => [...prev, data])

        setLoading(false)
    }

    useEffect(() => {
        let isCancelled = false;

        if (data.length < 5 || refetch) {
            !isCancelled && fetchData()
            setRefetch(false)
        }


        return () =>
            isCancelled = true
    }, [data, refetch])

    useEffect(() => {
        refetch && setData([])
    }, [refetch])

    return {
        data,
        loading,
        setRefetch,
    }
}

export default useFetchWild