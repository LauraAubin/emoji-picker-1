import React, { Component } from 'react';
import { Page, Card } from '@shopify/polaris';

import './App.css';

class App extends Component {
  render() {
    return (
      <Page title="Emoji Picker 🎩">
        <Card title="Search">
          <Card.Section>
            <p>Polaris is awesome!</p>
          </Card.Section>
        </Card>
      </Page>
    );
  }
}

export default App;
