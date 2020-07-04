/* eslint-disable react/prop-types */
import React from 'react';

// Import Styled Components
import { ListContainer } from './List.atoms';
import { ListItem } from './Item.atoms';

// Import External Components
import Item, { ItemProps } from './Item';

type ListProps = {
  items: ItemProps[]
}
const List: React.FunctionComponent<ListProps> = ({ items }) => (
  <ListContainer>
    <ListItem>
      <script
        src="//cdn.carbonads.com/carbon.js?serve=CK7I653N&amp;placement=killedbygooglecom"
        async={false}
        id="_carbonads_js"
      />
    </ListItem>
    {items.map((item) => (
      <Item key={item.name} {...item} />
    ))}
  </ListContainer>
);

export default List;
