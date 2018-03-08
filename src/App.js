import React, { Component } from 'react';
import { Page, Card, Stack } from '@shopify/polaris';

import Autocomplete from './components/Autocomplete/Autocomplete';
import TagList from './components/TagList/TagList';
import emojiList from './emojiList.json';
import { addItemToArray, removeItemFromArray } from './utils';
import './App.css';

class App extends Component {
  state = {
    selectedEmojis: [],
  }

  handleEmojiRemove = (emoji) => {
    this.setState({
      selectedEmojis: removeItemFromArray(this.state.selectedEmojis, emoji),
    });
  }

  handleEmojiSelect = (index) => {
    this.setState({
      selectedEmojis: addItemToArray(this.state.selectedEmojis, index),
    });
  }

  render() {
    const tagList = this.state.selectedEmojis.length > 0 ? (
      <TagList
        tags={this.state.selectedEmojis}
        onRemove={this.handleEmojiRemove}
      />
    ) : null;

    return (
      <Page title="Emoji Picker 🎩">
        <Card title="Emojis are the best 🕺🏻">
          <Card.Section>
            <Stack spacing="tight" vertical>
              {tagList}
              <Autocomplete
                items={emojiList}
                onSelect={this.handleEmojiSelect}
              />
            </Stack>
          </Card.Section>
        </Card>
      </Page>
    );
  }
}

export default App;
