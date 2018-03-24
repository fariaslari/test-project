import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import ProductBag from './productBagComponent/ProductBag';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ProductBag />
          <Route name="home" exact path="/" component={HomePage} />
        </div>
      </Router>
    )
  }
}
export default App;