/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

// Import Styled Components
import { SearchContainer, SearchBox } from './Search.atoms';

type Props = {
  search: (arg: string) => void
  term: string
}

type State = {
  inputValue: string
}

export default class Search extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  updateSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const { search } = this.props;

    this.setState({
      inputValue: event.target.value,
    });

    search(event.target.value);
  }

  render() {
    const { inputValue } = this.state;
    const labelTextStyle = {
      display: 'none',
    };
    return (
      <SearchContainer>
        <label htmlFor="searchBox" aria-label="Search">
          <span style={labelTextStyle}>Search</span>
          <SearchBox
            id="searchBox"
            placeholder="Search"
            type="text"
            value={inputValue}
            onChange={event => this.updateSearch(event)}
          />
        </label>
      </SearchContainer>
    );
  }
}
