import React from 'react';
import { TextField, List, Stack } from '@shopify/polaris';

import { filterItems } from '../../utils';

export default class Autocomplete extends React.Component {
  state = {
    value: ''
  };

  handleChange = (value) => {
    this.setState({value});
  }

  render() {
    return (
      <Stack vertical>
        <TextField
          placeholder="Search"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <List type="bullet">
          {filterItems(this.props.items, this.state.value)
            .map((item) => {
              return(
                <List.Item key={item.value}>
                  {item.value}
                </List.Item>
              );
            })}
        </List>
      </Stack>
    );
  }
}
