function CharListPagination(props) {
    const {handleCPB, handleCNB, handleCPI, pageInput } = props;
    console.log("pageInput",pageInput)
    return (

        <form>
            <input type='button' name='prevButton' onClick={handleCPB}></input>
            <input name='page' placeholder='Page' onChange={handleCPI} defaultValue={pageInput || "1"}></input>
            <input type='button' name='nextButton' onClick={handleCNB}></input>
        </form>
    )
}

export default CharListPagination