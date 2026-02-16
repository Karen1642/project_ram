import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getCharList } from '../functions.jsx'

function CharList() {
  const [charList, setCharList] = useState([]);
  //дописать все параметры
  const [searchParams, setSearchParams] = useState({"page":1});
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  //DELETE
  //console.log("location.pathname", location.pathname);
  //console.log("location.search", location.search);
  //console.log("params", params.toString());

  useEffect(() => {
    const get = async () => {
      let linkParams = "";
      Object.entries(searchParams).map( ([key, value]) => {
        linkParams = linkParams + key + "=" + value + "&";        
      });
      console.log("linkParams", linkParams);
      const allChars = await getCharList(linkParams); //params.toString()
      setCharList(allChars);      
    } 
    get();
  }, [searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    //event.stopPropagation();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("data", data);

    //setSearchParams(data);
    setSearchParams(prev => ({
      ...prev,
      ...data,
      page: 1      
    }));
  }

  const handleClickPrevButton = () => {
    const newObj = {...searchParams, "page": searchParams.page - 1};
    setSearchParams(newObj);
  }

  const handleClickNextButton = () => {
    const newObj = {...searchParams, "page": searchParams.page + 1};
    setSearchParams(newObj);
  }

  const handleChangePageInput = (event) => {
    const newObj = {...searchParams, "page": Number(event.target.value)};
    setSearchParams(newObj);
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
        <input name='page' placeholder='Page' onChange={handleChangePageInput} value={searchParams.page}></input>
        <input type='button' name='nextButton' onClick={handleClickNextButton}></input>
      </form>    
    </div>
  );
}

export default CharList