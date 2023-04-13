import { DATA_PATH, DATA_PREFIX } from "../app-const";

export const fetchData = (pageNumber) => {
    return fetch(`${DATA_PATH}${DATA_PREFIX}${pageNumber}.json`).then((response) => {
      return response.json();
    });
  };