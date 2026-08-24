import { Link } from 'react-router-dom'

function CharListCard(props) {
    const {
        charId,
        charImage,
        charName,
        charSpecies,
        charStatus
    } = props;
    return (
        <Link to={"/cards/" + charId}>
        <div className="char">
            <img src={charImage} alt=""></img>
            <div>{charName}</div>
            <div>{charSpecies}</div>
            <div>{charStatus}</div>
        </div>
        </Link>
    )
}

export default CharListCard;