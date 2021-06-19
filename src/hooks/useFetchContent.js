import { useCallback, useState } from "react";

export const useFetchContent = () => {
  const [imgList, setImgList] = useState([]);
  
  let charactersToLoad = '';
  let currentList = 1;

  const fetch = useCallback((charName) => {
    let ids = [];
    for (let i = currentList; i <= currentList + 9; i++) {
      ids.push(i);
    }

    charactersToLoad = ids.toString();
    currentList = ids[9] + 1;

    window.fetch(`https://rickandmortyapi.com/api/character/${charName ? '?name=' + charName : charactersToLoad}`)
    .then(response => response.json())
    .then(data => setImgList(data));

    /* TODO: fetch images from this url: https://rickandmortyapi.com/api/character/
      (to fetch with name add name in search query: https://rickandmortyapi.com/api/character/?name=rick)
    */
  }, [currentList]);

  const fetchMore = useCallback(() => {
    fetch();
  }, [currentList, charactersToLoad])
  // TODO: Put fetchMore method here

  return [imgList, fetch, fetchMore];
};
