import './App.scss';
import React from 'react';
import Layout from './components/Layout/Layout.component';
import CardList from './components/CardList/CardList.component';

function App() {
  return (
      <>
        <Layout>
            <CardList />
        </Layout>
      </>
  );
}

export default App;
