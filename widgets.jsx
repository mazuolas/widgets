import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock.jsx';
import Weather from './frontend/weather.jsx';
import Autocomplete from './frontend/autocomplete.jsx';
import Tabs from './frontend/tabs.jsx';
class Widget extends React.Component {

  render(){
    const names = ["David", "Eric", "mark", "Ranelle", "Sam", "The One True Tony", "Lucas", "Janice", "Vu", "Matthew", "Brandon", "Winber", "Chris", "Christine", "Andrew"];
    const tabList = [{title:"Tab1", Content:"Welcome to Tab1!"},
                    {title:"Tab1", Content:"Welcome to the other Tab1!"},
                    {title:"Tab1", Content:"Welcome to the Thunder Dome!"}];
    return (<div>
      <Clock/>
      <Weather/>
      <Autocomplete names={names} />
      <Tabs tabList={tabList} />
    </div>);
  }
}

document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementById('root');
  ReactDOM.render(<Widget/>, root);
  // ReactDOM.render(<Weather/>, root);
});
