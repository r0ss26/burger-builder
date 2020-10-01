import React from 'react';
import Layout from './hoc/Layout/Layout';

import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <Layout>
      <BurgerBuilder></BurgerBuilder>
    </Layout>
  );
}

export default App;
