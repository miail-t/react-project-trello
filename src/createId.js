const createId = value => {
    let maxId = 0;
    value.forEach(elem => {
      if (elem.id > maxId) {
        maxId = elem.id;
      }
    });
    return maxId + 1;
  };

export default createId;