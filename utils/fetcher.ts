import { API_URL } from "../consts";

export const fetcher = (url: string, options: {} = {}) => fetch(API_URL + url, options).then((res) => res.json()).then(res => res)
