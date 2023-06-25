import { useEffect, useReducer } from "react";

export const initialState = {
  loading: false,
  post: [],
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_start":
      return {
        loading: false,
        post: [],
        error: false,
      };
    case "fetch_success":
      return {
        loading: true,
        post: action.payload,
        error: false,
      };
    case "fetch_fail":
      return {
        loading: true,
        post: [],
        error: true,
      };
    default:
      return state;
  }
};
export const useAPI = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "fetch_start" });
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const topicsArray = await response.json();
        dispatch({ type: "fetch_success", payload: topicsArray });
      } catch (error) {
        console.log(error);
        dispatch({ type: "fetch_fail" });
      }
    };
    fetchData();
  }, [url]);

  return state;
};
