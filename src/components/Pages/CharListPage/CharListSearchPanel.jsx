function CharListSearchPanel(props) {
    const {handleFunction,
        charName,
        charStatus,
        charSpecies,
        charType,
        charGender
    } = props;

    return (
        <form  onSubmit={handleFunction}>
            <input name='name' placeholder='name' defaultValue={charName || ""}></input>
            <input name='status' placeholder='status' defaultValue={charStatus || ""}></input>
            <input name='species' placeholder='species' defaultValue={charSpecies || ""}></input>
            <input name='type' placeholder='type' defaultValue={charType || ""}></input>
            <input name='gender' placeholder='gender' defaultValue={charGender || ""}></input>
            <input type='submit' value="Submit"></input>
        </form>
    )
}

export default CharListSearchPanel