export const initialState = {
  loading: true,
  companies: [],
  error: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_COMPANIES":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "SEARCH_COMPANIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_COMPANIES_FAIL":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
