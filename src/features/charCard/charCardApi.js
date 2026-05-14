export const getChar = async (cardId) => {
  const response = await fetch("https://rickandmortyapi.com/api/character/" + cardId)
  console.log("response", response);
  if (!response.ok) throw response;
  
  const data = await response.json();
  console.log("data response", data);
  return data;  
}