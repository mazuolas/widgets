import React from 'react';

class Autocomplete extends React.Component{
  constructor(props){
    super(props);
    this.state = props;
    this.state = {currentString: ""};
    this.state = {currentNames: props.names.sort()};
    this.updatenames = this.updatenames.bind(this);
  }

  updatenames(e){
    e.preventDefault();
    this.state.currentString = e.target.value;
    let names = this.props.names;
      let currentNames = names.filter((name) => {
      if (name.match(this.state.currentString)) {
        return true;
      }
      return false;
    }).sort();
    this.setState({currentNames});
  }

  generatetags(name,idx){
    return <li key={idx} >{name}</li>;
  }

  render(){
    let {currentNames} = this.state;
    return (
      <div className="auto-complete">
        <input type="text" onChange={this.updatenames.bind(this)}/>
        <ul>
          {currentNames.map(this.generatetags.bind(this))}
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
