import { useSelector } from 'react-redux'
import { myCardsSelector } from '../../../features/myCard/myCardSlice'
import MyCardsCard from './MyCardsCard'
import MyCardNoData from './MyCardNoData'

function MyCardRoster() {
    const myCards = useSelector(myCardsSelector);

    return (        
        myCards ? myCards.map(char => (
          <MyCardsCard 
            charName = {char.name}
            charStatus = {char.status}
            charSpecies = {char.species}
            charType = {char.type}
            charGender = {char.gender}
            charImage = {char.image}
            charLocation = {char.location.name}   
          />
      )): <MyCardNoData />
      
    )
}

export default MyCardRoster