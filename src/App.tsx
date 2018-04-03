import * as React from 'react';
import './App.css';
import { Notification } from './notifications/Notification';
import NotificationsComponent from './notifications/NotificationsComponent';

const notifications = [ new Notification('Title 1', '10 Aug', '#'),
                        new Notification('Title 2', '21 Aug', '#'),
                        new Notification('Title Three', '30 Aug', '#')];

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <NotificationsComponent notifications={notifications} /> 
      </div>
    );
  }
}

export default App;
