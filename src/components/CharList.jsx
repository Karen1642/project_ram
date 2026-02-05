import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getCharList } from '../functions.jsx'

function CharList() {
  const [charList, setCharList] = useState([]);
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  //DELETE
  //console.log("location.pathname", location.pathname);
  //console.log("location.search", location.search);
  //console.log("params",params.toString());

  useEffect(() => {
    const get = async () => { 
      const allChars = await getCharList(params.toString());      
      setCharList(allChars);
    } 
    get();
  }, []);

  // const handleSubmit = () => {
  //   console.log("params", params);
  //   params.set("Page", 2);
  //   console.log("params1", params);
  // }
  
  //ВОПРОС Не разобрался как форма передает данные
  return (
    <div className="charsWrapper">
      <form>
        <input name='name' placeholder='name'></input>
        <input name='status' placeholder='status'></input>
        <input name='species' placeholder='species'></input>
        <input name='type'placeholder='type'></input>
        <input name='gender'placeholder='gender'></input>
        <input type='submit' value="Submit" /*onSubmit={handleSubmit}*/></input>
      </form>
      <div className="char_list">
        {charList.map(char => (
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
    </div>
  );
}

export default CharList