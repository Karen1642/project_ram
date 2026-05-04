export const getChar = async (cardId) => {
  const response = await fetch("https://rickandmortyapi.com/api/character/" + cardId)
  const data = await response.json();
  console.log("data response", data);
  return data;  
}