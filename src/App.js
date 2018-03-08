import React, { Component } from 'react';
import { Page, Card } from '@shopify/polaris';

import Autocomplete from './components/Autocomplete/Autocomplete';
import emojiList from './emojiList.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <Page title="Emoji Picker 🎩">
        <Card title="Search">
          <Card.Section>
            <Autocomplete items={emojiList} />
          </Card.Section>
        </Card>
      </Page>
    );
  }
}

export default App;
