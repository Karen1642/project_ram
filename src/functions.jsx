export const getAllChars = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  return data.results;    
}

export const postData = async (item, link) => {
  await fetch(link, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"id":item})
  })
}

export const getCart = async () => {
  let strRes = "";
  const response = await fetch("http://localhost:3000/cart");
  const data = await response.json();
  const result = data.map((res, idx) => (
                    strRes = strRes + (idx==0?'':',') + res.id.toString()
                  ));

  return strRes;   
}