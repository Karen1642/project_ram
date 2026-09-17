import { useSelector, useDispatch } from 'react-redux'
import { charData } from '../../../features/charCard/charCardSlice'
import CharCardItem from './CharCardItem'
import CharCardNoData from './CharCardNoData'
import { addToCart } from '../../../features/cart/cartSlice'

function CharCardBlock() {
    const char = useSelector(charData);
    const dispatch = useDispatch();

    const handleBuyOnClick = () => {
        dispatch(addToCart(char));   
    } 

    return (        
        char ? 
          <CharCardItem 
            charName = {char.name}
            charStatus = {char.status}
            charSpecies = {char.species}
            charType = {char.type}
            charGender = {char.gender}
            charImage = {char.image}
            handleBuyOnClick = {handleBuyOnClick}   
          />
          : <CharCardNoData />      
    )
}

export default CharCardBlock