import { useSelector } from 'react-redux'
import { charListSelector } from '../../../features/charList/charListSlice'
import CharListCard from './CharListCard'
import CharListNoData from './CharListNoData'

function CharListRoster() {
    const chars = useSelector(charListSelector);

    return (        
        chars.length > 0 ? 
            chars.map(char => (
                <CharListCard 
                    charId = {char.id}
                    charImage = {char.image}
                    charName = {char.name}
                    charSpecies = {char.species}
                    charStatus = {char.status}
                />
            )) : <CharListNoData />        
    )
}

export default CharListRoster