import React from 'react';

class Clock extends React.Component{
  constructor(){
    super();
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({time: new Date()});
  }

  componentDidMount(){
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render(){
    const {time} = this.state;
    return (
      <div className="date-time">
      <ul>
        <li>Date</li>
        <li>Time</li>
      </ul>
      <ul>
        <li>{time.toLocaleTimeString()}</li>
        <li>{time.toLocaleDateString()}</li>
      </ul>
    </div>
    );
  }
}

export default Clock;
