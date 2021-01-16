import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import SimpleExample from './class-works/cw1/SimpleExample'
import UserList from "./class-works/cw1/UserList";
import Week1 from "./home-works/hw1/Week1";
import CompositionExample from "./class-works/cw2/compositions-example/CompositionExample";
import Blog from "./class-works/cw2/life-cycle-example/Blog";
import Clock from "./class-works/cw2/life-cycle-example/Clock";
import AutofocusInput from "./class-works/cw2/refs/AutofocusInput";
import Glider from './home-works/hw2/glider';
import Counter, { CounterFunction, MouseTrackerExample} from './class-works/cw3/HooksExamples';
import { LocalStorage } from './home-works/hw4/useLocalStorage';
import { OnlineStatus } from './home-works/hw4/userIsOnline';
import { DocumentTitle } from './home-works/hw4/useDocumentTitle';


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <DocumentTitle/>
      </div>
    )
  }
}

export default App;
