import React from 'react';
import List from './composition/list.js';

import './App.css';

function App(props) {
  const arrLists = props.store.lists.map((item) =>
    <List key={item.id} cardIds={item.cardIds} header={item.header} allCards={props.store.allCards} />)
    return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">{arrLists}</div>
    </main>
  );
}

export default App;
