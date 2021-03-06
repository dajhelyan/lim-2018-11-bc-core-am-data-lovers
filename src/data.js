const recentYears = (arr) => {
  return arr.filter(ele => parseInt(ele.year) >= 2012 && parseInt(ele.year) <= 2015);
};

const obtenerAñosUnicos = (arr) => {
  return arr.reduce((acum, ele) => {
    acum.push(parseInt(ele.year));
    return acum;
  }, []);
};

const totalInjuredPersonsByYear = (arr, yearStar, yearFinish) => {
  return arr.filter((obj) => {
    if (parseInt(obj.year) >= yearStar && parseInt(obj.year) <= yearFinish) {
      return obj;
    }
  });
};

const sortData = (arr, sortBy, sortOrder) => {
  const copyData = [ ...arr];
  let injuriesOrder = [];
  
  if (sortOrder === 'asc') {
    if (sortBy === 'lessRecent') {
      injuriesOrder = copyData.sort((aaa, bbb) => (aaa.year > bbb.year ? 1 : -1));
      return injuriesOrder;
    } else if (sortBy === 'lessUrbano') {
      injuriesOrder = copyData.sort((aaa, bbb) => (aaa.urbano > bbb.urbano ? 1 : -1));
      return injuriesOrder;
    }
  } else if (sortOrder === 'desc') {
    if (sortBy === 'mostRecent') {
      injuriesOrder = copyData.sort((aaa, bbb) => (aaa.year > bbb.year ? 1 : -1));
      return injuriesOrder.reverse();
    } else if (sortBy === 'mostUrbano') {
      injuriesOrder = copyData.sort((aaa, bbb) => (aaa.urbano > bbb.urbano ? 1 : -1));
      return injuriesOrder.reverse();
    }
  }
};

window.injuries = {
  recentYears,
  obtenerAñosUnicos,
  totalInjuredPersonsByYear,
  sortData
};

const urbano = (arr) => {
  let average = 0;

  const sum = arr.reduce((acum, ele) => {
    return acum + ele.urbano;
  }, 0);

  average = parseInt(sum / arr.length);

  return average;
};

const aereo = (arr) => {
  let average = 0;

  const sum = arr.reduce((acum, ele) => {
    return acum + ele.aereo;
  }, 0);

  average = parseInt(sum / arr.length);
  return average;
};

const ferreo = (arr) => {
  let average = 0;

  const sum = arr.reduce((acum, ele) => {
    return acum + ele.ferrocarril;
  }, 0);

  average = parseInt(sum / arr.length);
  return average;
};

const maritimo = (arr) => {
  let average = 0;

  const sum = arr.reduce((acum, ele) => {
    return acum + ele.maritimo;
  }, 0);

  average = parseInt(sum / arr.length);

  return average;
};

const otros = (arr) => {
  let average = 0;

  const sum = arr.reduce((acum, ele) => {
    return acum + ele.otros;
  }, 0);

  average = parseInt(sum / arr.length);

  return average;
};

window.promedio = {
  urbano, 
  aereo,
  ferreo,
  maritimo,
  otros
};
