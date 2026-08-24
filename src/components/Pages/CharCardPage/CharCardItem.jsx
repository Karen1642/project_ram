function CharCardItem() {
    return (
        <div>
          <div className='char_avatar'><img src={char.image} alt=""></img></div>
          <div className='char_info'>
            <p><span>Name</span><span>{char.name}</span></p>
            <p><span>Gender</span><span>{char.gender}</span></p>
            <p><span>Species</span><span>{char.species}</span></p>
            <p><span>Type</span><span>{char.type}</span></p>        
            <p><span>Status</span><span>{char.status}</span></p>
          </div>
          <div className='void'></div>
        </div>
    )
}

export default CharCardItem;