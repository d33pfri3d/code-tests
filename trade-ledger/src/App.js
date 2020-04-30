import React, { useReducer, useEffect } from "react";
import "./App.css";
import Search from "./components/SearchBar";
import { initialState, reducer } from "./store/reducer";

const GUID = "b6242120-5bce-4b10-9839-d3045a7682da";
const API_URL = `https://abr.business.gov.au/json/AbnDetails.aspx?abn=74172177893&callback=callback&guid=${GUID}`;

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("search");
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
      <p>companies</p>
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
