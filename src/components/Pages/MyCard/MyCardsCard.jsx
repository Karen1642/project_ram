function MyCardsCard (props) {
      const {
        charName,
        charGender,
        charSpecies,
        charType,
        charImage,
        charStatus,
        charLocation
    } = props;

    return (
        <div className='my_char_card'>
          <div className='my_char_avatar'><img src={charImage} alt=""></img></div>
          <div className='my_char_info'>
            <p><span>Name</span><span>{charName}</span></p>
            <p><span>Gender</span><span>{charGender}</span></p>
            <p><span>Species</span><span>{charSpecies}</span></p>
            <p><span>Type</span><span>{charType}</span></p>        
            <p><span>Status</span><span>{charStatus}</span></p>
            <p><span>Location</span><span>{charLocation}</span></p>        
          </div>
        </div> 
    )
}

export default MyCardsCard;