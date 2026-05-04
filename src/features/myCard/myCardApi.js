export const getChars = async (cardId) => {
  const response = await fetch("https://rickandmortyapi.com/api/character/" + cardId)
  const data = await response.json();

  const result = Array.isArray(data)?data:[data];
  return result;  
}