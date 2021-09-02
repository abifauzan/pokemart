import { checkObjectLength, getImgTypePokemon } from '../../helpers/Util';
import {
    Item,
    ItemImg,
    ItemDesc,
    ItemType,
    Container,
} from './PokemonItemStyle'
import useIsMobile from '../../hooks/useIsMobile';
import useFetchDetail from '../../hooks/useFetchDetail'
import usePokemonTheme from '../../hooks/usePokemonTheme'
import SkeletonBox from '../SkeletonBox/SkeletonBox';

const Loading = <SkeletonBox mode='pokemon' />

function PokemonItem({ data }) {

    const { data: pokemon } = useFetchDetail(data.url)

    const pokemonTheme = usePokemonTheme(pokemon)

    const isMobile = useIsMobile()

    const variants = {
        desktop: {
            open: { opacity: 1, y: 0 },
            close: { opacity: 0, y: '100px' }
        },
        mobile: {
            open: { opacity: 1, y: 0 },
            close: { opacity: 0, y: '100px' }
        }
    }

    return checkObjectLength(pokemon) ? (
        <Container
            animate={checkObjectLength(pokemon) ? 'open' : 'close' }
            initial='close'
            variants={isMobile ? variants.mobile : variants.desktop}
        >
            <Item 
                to={`/pokemon/${pokemon.name}`}
                pokemontheme={pokemonTheme}
            >
                <ItemImg src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
                
                <ItemType>
                    {pokemon.types.map((el) => 
                        <div key={el.type.name}>
                            <img src={getImgTypePokemon(el.type.name)} alt={el.type.name} />
                            <span>{el.type.name}</span>
                        </div>
                    )}
                </ItemType>
                
                <ItemDesc pokemontheme={pokemonTheme}>
                    <p>{pokemon.name}</p>
                    <span>#{pokemon.id}</span>
                </ItemDesc>
            </Item>
        </Container>
        
    ) : Loading
    
}

export default PokemonItem;