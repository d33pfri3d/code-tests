import React, { useReducer, useEffect } from "react";
import fetchjsonp from "fetch-jsonp";
import "./App.css";
import Search from "./components/SearchBar";
import Company from "./components/Company";
import { initialState, reducer } from "./store/reducer";

const GUID = "b6242120-5bce-4b10-9839-d3045a7682da";
const API_URL = `https://abr.business.gov.au/json/MatchingNames.aspx?name=any%20name&guid=${GUID}`;

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchjsonp(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "SEARCH_COMPANIES_SUCCESS",
          payload: data.Names,
        });
      })
      .catch((error) => console.error(error));
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_COMPANIES",
    });
  };

  const { companies, error, loading } = state;

  const returnedCompanies =
    loading && !error ? (
      <p>Loading</p>
    ) : error ? (
      <p>Error</p>
    ) : (
      console.log(companies)
    );

  return (
    <div className="App">
      <header className="App-header">
        <Search search={search} />
      </header>

      <ul>{returnedCompanies}</ul>
    </div>
  );
};

export default App;
