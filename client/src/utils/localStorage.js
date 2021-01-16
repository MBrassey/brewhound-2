export const getSavedBreweryIds = () => {
    const savedBreweryIds = localStorage.getItem('saved_brewerys')
      ? JSON.parse(localStorage.getItem('saved_brewerys'))
      : [];
  
    return savedBreweryIds;
  };
  
  export const saveBreweryIds = (breweryIdArr) => {
    if (breweryIdArr.length) {
      localStorage.setItem('saved_brewerys', JSON.stringify(breweryIdArr));
    } else {
      localStorage.removeItem('saved_brewerys');
    }
  };
  
  export const removeBreweryId = (breweryId) => {
    const savedBreweryIds = localStorage.getItem('saved_brewerys')
      ? JSON.parse(localStorage.getItem('saved_brewerys'))
      : null;
  
    if (!savedBreweryIds) {
      return false;
    }
  
    const updatedSavedBreweryIds = savedBreweryIds?.filter((savedBreweryId) => savedBreweryId !== breweryId);
    localStorage.setItem('saved_brewerys', JSON.stringify(updatedSavedBreweryIds));
  
    return true;
  };
  