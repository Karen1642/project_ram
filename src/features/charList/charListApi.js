export const getCharList = async (params = '') => {
  const response = await fetch("https://rickandmortyapi.com/api/character/?" + params);
  console.log("response", response);
  if (!response.ok) throw response;
  
  const data = await response.json(); 
  return Object.hasOwn(data, "error") ? [data] : data.results;    
}