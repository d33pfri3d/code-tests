import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
    companies: [],
  };

  submitForm = (event) => {
    event.preventDefault();

    if (!this.state.searchTerm) {
      alert("Search must not be blank");
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
          />
        </form>
      </>
    );
  }
}

export default SearchBar;
