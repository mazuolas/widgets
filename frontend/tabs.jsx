import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state = {selectedTab: 0};
    this.updateContent = this.updateContent.bind(this);
  }
  tabNames(){
    let tabList = this.props.tabList;
    return tabList.map(({title}, index) => {
      return <h1 key={index} id={index}>{title}</h1>;
    });
  }

  selectedContent(){
    let selectedTab = this.state.selectedTab;
    let tabList =this.props.tabList;

    return tabList[selectedTab].Content;
  }

  updateContent(e) {
    let selectedTab = e.target.id;

    this.setState( {selectedTab});
    console.log(this.state);
  }



  render(){

    return (
      <div>
        <ul onClick={this.updateContent.bind(this)}>
          {this.tabNames()}
        </ul>
        <article>
          {this.selectedContent()}
        </article>
      </div>
    );
  }
}

export default Tabs;
