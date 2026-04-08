import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getCharList } from '../functions.jsx'

function CharList() {
  const [charList, setCharList] = useState([]);
  // const [searchParams, setSearchParams] = useState({
  //                                           "page": 1, 
  //                                           "name": "", 
  //                                           "status": "",
  //                                           "species": "",
  //                                           "type": "",
  //                                           "gender": ""
  //                                         });
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  
  //const url = new URL(window.location.href);
  const navigate = useNavigate();

  //спросить про useSearchParams


  useEffect(() => {
    const get = async () => {  
      console.log("page", params.get("page"));

      let linkParams = "";
      for (const [key, value] of params.entries()) {
        linkParams = linkParams + key + "=" + value + "&";
      }
      console.log("linkParams", linkParams);
      const allChars = await getCharList(linkParams); //params.toString()
      setCharList(allChars);      
    } 
    get();
  }, [location.search]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("data", data);

    // setSearchParams(prev => ({
    //   ...prev,
    //   ...data,
    //   page: 1      
    // }));
    const newParams = new URLSearchParams({
    //...Object.fromEntries(params.entries()),
    ...data,
    page: 1
    });

    navigate(`?${newParams.toString()}`);
  }

  const handleClickPrevButton = () => {
    const prevPage = Number(params.get("page")) - 1;
    params.set("page", prevPage)

    // url.searchParams.set('page', prevPage);
    // window.history.pushState({}, '', url);
    navigate(`?${params.toString()}`);
  }

  const handleClickNextButton = () => {
    const nextPage = Number(params.get("page")) + 1;
    params.set("page", nextPage)

    // url.searchParams.set('page', nextPage);
    // window.history.pushState({}, '', url);
    navigate(`?${params.toString()}`);
  }

  const handleChangePageInput = (event) => {
    const newPage = Number(event.target.value);
    params.set("page", newPage)

    // url.searchParams.set('page', newPage);
    // window.history.pushState({}, '', url);
    navigate(`?${params.toString()}`); 
  }

  return (
    <div className="charsWrapper">
      <form  onSubmit={handleSubmit}>
        <input name='name' placeholder='name'></input>
        <input name='status' placeholder='status'></input>
        <input name='species' placeholder='species'></input>
        <input name='type'placeholder='type'></input>
        <input name='gender'placeholder='gender'></input>
        <input type='submit' value="Submit"></input>
      </form>
      <div className="char_list">
        {charList.map( char => (
          <Link to={"/cards/" + char.id}>
            <div className="char">
              <img src={char.image} alt=""></img>
              <div>{char.name}</div>
              <div>{char.species}</div>
              <div>{char.status}</div>
            </div>
          </Link>
        ))}
      </div>
      <form>
        <input type='button' name='prevButton' onClick={handleClickPrevButton}></input>
        <input name='page' placeholder='Page' onChange={handleChangePageInput} value={params.get("page")}></input>
        <input type='button' name='nextButton' onClick={handleClickNextButton}></input>
      </form>
      <Link to={"/cards?page=" + (4)}>
        <input type='button' name='prevButton'></input>
      </Link>
      <Link to={"/cards?page=" + (4)}>
        <input type='button' name='nextButton'></input>
      </Link>   
    </div>
  );
}

export default CharList