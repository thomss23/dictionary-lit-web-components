async function fetchDictionaryInfo(searchedTerm) {
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + searchedTerm;
    const response = await fetch(url);

    if (!response.ok) {
      const errorBody = await response.json();
      throw { status: response.status, message: 'HTTP error', details: errorBody };
    }

    return response.json(); 

}

export {fetchDictionaryInfo};