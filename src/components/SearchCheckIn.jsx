import _ from "lodash";
import React, { Component } from "react";
import { Search, Grid } from "semantic-ui-react";

export default class SearchCheckIn extends Component {
  render() {
    const { isLoading, value, results } = this.props;
    // const { clients } = this.props;
    // const clientSource =
    //   clients.length > 0 &&
    //   clients.map((client) => ({
    //     Name: client.firstname,
    //   }));

    return (
      <div>
        <Grid>
          <Search
            size="big"
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
        </Grid>
      </div>
    );
  }
}
