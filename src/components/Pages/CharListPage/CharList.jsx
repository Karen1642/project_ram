import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import CharListSearchPanel from './CharListSearchPanel'
import CharListPagination from './CharListPagination'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharsRequest, charListSelector, charListLoadingSelector } from '../../../features/charList/charListSlice'
import CharListCard from './CharListCard'

function CharList() {
  const dispatch = useDispatch();
  const chars = useSelector(charListSelector);
  const loading = useSelector(charListLoadingSelector);
  const [searchParams, setSearchParams] = useSearchParams({page: 1});

  useEffect(() => {
    let linkParams = "";
    for (const [key, value] of searchParams.entries()) {
      linkParams += key + "=" + value + "&"
    }
    dispatch(fetchCharsRequest(linkParams));
  }, [searchParams, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setSearchParams({...data, page: 1});
  }
  

  const handleClickPrevButton = () => {
    const prevPage = Number(searchParams.get("page")) - 1;
    console.log("prevPage", prevPage);    

    setSearchParams((searchParams) => {
      searchParams.set("page", prevPage);
      return searchParams;
    });
  }

  const handleClickNextButton = () => {
    const nextPage = Number(searchParams.get("page")) + 1;

    setSearchParams((searchParams) => {
      searchParams.set("page", nextPage);
      return searchParams;
    });    
  }

  const handleChangePageInput = (event) => {
    const newPage = Number(event.target.value);

    setSearchParams((searchParams) => {
      searchParams.set("page", newPage);
      return searchParams;
    });   
  }
  return (
    <div className="charsWrapper">
      <CharListSearchPanel 
        handleFunction = {handleSubmit}
        charName = {searchParams.get("name")}
        charStatus = {searchParams.get("status")}
        charSpecies = {searchParams.get("species")}
        charType = {searchParams.get("type")}
        charGender = {searchParams.get("gender")}   
      />  
      <div className="char_list">
        {
          loading ? <div className='ldng_scrn'>Загрузка...</div>: 
          chars.length > 0 ? chars.map(char => (
            <CharListCard 
              charId = {char.id}
              charImage = {char.image}
              charName = {char.name}
              charSpecies = {char.species}
              charStatus = {char.status}
            />
          )): <div className='void_scrn'>Нет данных</div>
        }
      </div>
      <CharListPagination 
        handleCPB = {handleClickPrevButton}
        handleCNB = {handleClickNextButton}
        handleCPI = {handleChangePageInput}
        pageInput = {searchParams.get("page")}    
      />
    </div>
  );
}

export default CharList
