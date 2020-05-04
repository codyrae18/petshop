import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import _ from "lodash";

export default class SearchCheckIn extends Component {
  render() {
    const { isLoading, value, results } = this.props;
    console.log("search component", this.props);

    const res = results.length > 0 && results.map((r) => r.name);

    console.log(res);
    return (
      <div>
        <Search
          loading={isLoading}
          onResultSelect={this.props.handleResultSelect}
          onSearchChange={_.debounce(this.props.handleSearchChange, 500, {
            leading: true,
          })}
          results={results}
          value={value}
          {...this.props}
          placeholder="Search"
        />
      </div>
    );
  }
}
