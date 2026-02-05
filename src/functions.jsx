export const getCharList = async (params = '') => {
  const response = await fetch("https://rickandmortyapi.com/api/character/?" + params);
  const data = await response.json();

  return Object.hasOwn(data, "error") ? [data] : data.results;    
}

export const getChar = async (cardId) => {
  const response = await fetch("https://rickandmortyapi.com/api/character/" + cardId)
  const data = await response.json();

  return data;  
}

export const getChars = async (cardId) => {
  const response = await fetch("https://rickandmortyapi.com/api/character/" + cardId)
  const data = await response.json();

  const result = Array.isArray(data)?data:[data];
  return result;  
}

export const getData = async (link) => {
  const response = await fetch(link);
  const data = await response.json();

  return data;   
}

export const postData = async (item, link) => {
  await fetch(link, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"id":item})
  })
}

export const deleteData = async (link) => {
  await fetch(link, {
    method: "DELETE"
  })
}