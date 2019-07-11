
export function initList(list = []) {
  return {
    loading: false,
    loadingMore: false,
    loaded: false,
    noData: false,
    list,
    errMsg: null,
  };
}

export function initMap(data = {}) {
  return {
    loading: true,
    loadingMore: false,
    loaded: false,
    noData: false,
    data,
    errMsg: null,
  };
}

export function initTable(list = []) {
  return {
    loading: false,
    noData: false,
    list,
    errMsg: null,
    page: 1,
    pageSize: 10,
  };
}
