export const getAllChars = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  return data.results;    
}

export const getChar = async (cardId) => {
  const response = await fetch("https://rickandmortyapi.com/api/character/" + cardId)
  const data = await response.json();

  return data;  
}

export const getData = async (link) => {
  let strRes = "";
  const response = await fetch(link);
  const data = await response.json();
  data.map((res, idx) => (
            strRes = strRes + (idx==0?'':',') + res.id.toString()
  ));

  return strRes;   
}

export const postData = async (item, link) => {
  await fetch(link, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"id":item})
  })
}