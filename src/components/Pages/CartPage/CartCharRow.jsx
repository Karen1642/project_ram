import { Link } from 'react-router-dom'

function CartCharRow(props) {
      const {
        markedChars,
        handleChange,
        rowId,
        charId,
        charImage,
        charName,
        charGender,
        charSpecies,
        charType,

        charStatus
    } = props;

    return (
        <div className='cart_char' id={charId}>
            <input id={charId} type="checkbox" onChange={e => handleChange(e, charId)} checked={markedChars.includes(charId)}/>
            <Link to={"/cards/" + charId}>              
            <span>{rowId}. </span>
            <img src={charImage} alt=""></img>
            <span>{charName}</span>
            <span className='separator'>|</span>
            <span>{charSpecies}</span>
            <span className='separator'>|</span>
            <span>{charStatus}</span>
            </Link>  
        </div>   
    )
}

export default CartCharRow;