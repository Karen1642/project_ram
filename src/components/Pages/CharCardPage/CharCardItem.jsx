import { Link } from 'react-router-dom'

function CharCardItem(props) {
      const {
        charName,
        charGender,
        charSpecies,
        charType,
        charImage,
        charStatus,
        handleBuyOnClick
    } = props;

    return (
        <div className='char_card'> 
          <div className='char_avatar'><img src={charImage} alt=""></img></div>
          <div className='char_info'>
            <p><span>Name</span><span>{charName}</span></p>
            <p><span>Gender</span><span>{charGender}</span></p>
            <p><span>Species</span><span>{charSpecies}</span></p>
            <p><span>Type</span><span>{charType}</span></p>        
            <p><span>Status</span><span>{charStatus}</span></p>
          </div>
          <div className='void'></div>
          <Link to="/cards">
            <div className='button'>
              <button onClick={handleBuyOnClick}>Buy</button>
            </div>
          </Link>
        </div>
    )
}

export default CharCardItem;