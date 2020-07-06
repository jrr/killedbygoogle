import React, { Component } from 'react';

import { FilterList } from './Filter.atoms';
import FilterItem from './FilterItem';
import { ItemProps } from './Item';
import { ActiveFilterT } from '../App';

type Props = {
  current: ActiveFilterT
  filterHandler: (val: ActiveFilterT) => void
  items: ItemProps[]
}

type State = {
  counts: number[]
  active: number
}

export default class Filter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      active: 0, // Make All the default active
      counts: [], // no counts yet
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    const { items } = this.props;
    // Get the counts for each time
    const counts = ['app', 'service', 'hardware'].map(
      type => items.filter(item => item.type === type).length
    );
    // Unshift the total count for the `all` option
    counts.unshift(items.length);
    // Add the counts to the for consumption
    this.setState({ counts });
  }

  clickHandler(filter: ActiveFilterT, index: number) {
    const { filterHandler } = this.props;
    // Set the active button
    this.setState({
      active: index,
    });
    // Apply the filter
    filterHandler(filter);
  }

  render() {
    const { active, counts } = this.state;
    const filters: [string, ActiveFilterT][] = [
      ['all', false],
      ['apps', 'app'],
      ['services', 'service'],
      ['hardware', 'hardware'],
    ];
    return (
      <FilterList>
        {filters.map((type, index) => (
          <FilterItem
            active={active === index}
            clickHandler={this.clickHandler}
            counts={counts}
            key={type[0]}
            index={index}
            item={type}
          />
        ))}
      </FilterList>
    );
  }
}
