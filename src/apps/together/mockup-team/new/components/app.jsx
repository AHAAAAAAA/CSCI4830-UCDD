class App extends React.Component {
  render(){
    return (
      <div className="container">
      
    <h3><i className="fa fa-user"></i> User Info: </h3>
      <MyComponents.People 
        data={this.props.data}
        members={this.props.members}
        actions={this.props.actions}/>
      
      </div>
      );
  } 
}

MyComponents.App = App