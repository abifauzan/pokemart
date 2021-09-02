import axios from "axios"
import { useEffect, useState } from "react"
import { checkObjectLength } from "../helpers/Util"

const useFetchEvolution = (id) => {
    const [pokemonChain, setPokemonChain] = useState({})
    const [pokemonSpecies, setPokemonSpecies] = useState({})
    const [pokemonLevel, setPokemonLevel] = useState([])
    const [currentPokemonLevel, setCurrentPokemonLevel] = useState(0)

    const url_pokemonSpecies = `https://pokeapi.co/api/v2/pokemon-species/${id}`

    const fetchChain = async (url) => {
        const {data: datas} = await axios.get(url)
        setPokemonChain(datas)
    }

    const fetchSpecies = async (url) => {
        const {data} = await axios.get(url)
        if (Object.keys(data).length > 0) {
            setPokemonSpecies(data)
            fetchChain(data.evolution_chain.url)
        }
    }

    const checkLevelPokemon = (chain) => {
        let level = 0
        
        if (chain !== undefined) {
            
            if (checkObjectLength(chain.evolves_to)) {
                level = level + 1
    
                if (checkObjectLength(chain.evolves_to[0].evolves_to)) {
                    level = level + 1
    
                    if (checkObjectLength(chain.evolves_to[0].evolves_to[0].evolves_to))
                        level = level + 1
                }
            }

        }
        

        return level
    }

    const proceedLevelPokemon = () => {
        const {
            evolution_chain,
            evolves_from_species,
            name: pokemonName
        } = pokemonSpecies

        const {
            chain
        } = pokemonChain

        const checkLevel = checkLevelPokemon(chain)

        if (checkObjectLength(pokemonSpecies) && checkObjectLength(pokemonChain)) {
            // console.log('pokemonSpecies', pokemonSpecies)
            // console.log('pokemonChain', pokemonChain)
            
            if (checkLevel === 1) {
                if (evolves_from_species === null) {

                    // SET POKEMON LEVEL 1
                    let level = [...pokemonLevel]
                    level[0] = { name: pokemonName, level: 0}
                    level[1] = 
                        { 
                            name: chain.evolves_to[0].species.name, 
                            level: chain.evolves_to[0].evolution_details[0].min_level
                        }

                    setPokemonLevel(level)
                    setCurrentPokemonLevel(0)
        
                } else if (evolves_from_species.name === chain.species.name) {

                    // SET POKEMON LEVEL 2
                    let level = [...pokemonLevel]
                    level[0] = 
                        { 
                            name: evolves_from_species.name,
                            level: 0
                        }
                    level[1] = 
                        {
                            name: pokemonName,
                            level: chain.evolves_to[0].evolution_details[0].min_level
                        }
                    setPokemonLevel(level)
                    setCurrentPokemonLevel(1)

                } 
            } else if (checkLevel === 2) {
                if (evolves_from_species === null) {

                    // SET POKEMON LEVEL 1
                    let level = [...pokemonLevel]
                    level[0] = { name: pokemonName, level: 0}
                    level[1] = 
                        { 
                            name: chain.evolves_to[0].species.name, 
                            level: chain.evolves_to[0].evolution_details[0].min_level
                        }
                    level[2] = {
                        name: chain.evolves_to[0].evolves_to[0].species.name,
                        level: chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level
                    }
                    setPokemonLevel(level)
                    setCurrentPokemonLevel(0)
        
                } else if (evolves_from_species.name === chain.species.name) {
                    
                    // SET POKEMON LEVEL 2
                    let level = [...pokemonLevel]
                    level[0] = {
                        name: evolves_from_species.name,
                        level: 0,
                    }
                    level[1] = {
                        name: pokemonName,
                        level: chain.evolves_to[0].evolution_details[0].min_level
                    }
                    level[2] = {
                        name: chain.evolves_to[0].evolves_to[0].species.name,
                        level: chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level
                    }
                    setPokemonLevel(level)
                    setCurrentPokemonLevel(1)
    
                } else {
                    
                     // SET POKEMON LEVEL 3
                     let level = [...pokemonLevel]
                     level[0] = {
                         name: chain.species.name,
                         level: 0,
                     }
                     level[1] = {
                         name: chain.evolves_to[0].species.name,
                         level: chain.evolves_to[0].evolution_details[0].min_level,
                     }
                     level[2] = {
                         name: pokemonName,
                         level: chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level,
                     }
                     setPokemonLevel(level)
                     setCurrentPokemonLevel(2)

                }
            } 
            // else if (checkLevel === 3) {
                
            // }
        }
    }

    useEffect(() => {
        id !== undefined && fetchSpecies(url_pokemonSpecies)
    }, [id])

    useEffect(() => {
        proceedLevelPokemon()
    }, [pokemonChain])

    return {
        pokemonLevel,
        currentPokemonLevel,
        pokemonSpecies,
    }
}

export default useFetchEvolution