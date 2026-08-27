export const getChar = async (cardId) => {
  const response = await fetch("https://rickandmortyapi.com/api/character/" + cardId)
  if (!response.ok) throw response;
  
  const data = await response.json();
  return data;  
}