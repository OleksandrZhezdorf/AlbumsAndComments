import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import SimpleExample from './class-works/cw1/SimpleExample'
import UserList from "./class-works/cw1/UserList";
import Week1 from "./home-works/hw1/Week1";
import CompositionExample from "./class-works/cw2/compositions-example/CompositionExample";
import Blog from "./class-works/cw2/life-cycle-example/Blog";
import AutofocusInput from "./class-works/cw2/refs/AutofocusInput";


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Blog />
      </div>
    )
  }
}

export default App;
