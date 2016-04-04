class Title extends React.Component { 
  render(){
    console.log("Currently in category: ", this.props.data.category);
    $('#categoryTitle').append('<h1 class="black-text center">'+this.props.data.category+'</h1>');
    return (
        null
    );
  }
}
MyComponents.Title = Title

