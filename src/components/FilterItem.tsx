/* eslint-disable react/prop-types */
import React from 'react';

import { ListItem } from './Filter.atoms';
import { ActiveFilterT } from '../App';

export type ItemT = [string, ActiveFilterT];
type ClickHandlerT = (item: ActiveFilterT, num: number) => void;
type PropsT = {
  active: boolean
  counts: number[]
  index: number
  item: ItemT
  clickHandler: ClickHandlerT
}
const FilterItem: React.FunctionComponent<PropsT> = (props) => {
  const { active, clickHandler, counts, index, item } = props;
  return (
    <ListItem className={active ? 'active' : 'inactive'}>
      <button
        onClick={() => {
          clickHandler(item[1], index);
        }}
        type="button"
      >
        {item[0]} ({counts[index]})
      </button>
    </ListItem>
  );
};


export default FilterItem;
