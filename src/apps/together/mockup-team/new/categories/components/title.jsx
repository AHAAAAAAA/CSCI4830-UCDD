class Title extends React.Component { 
  render(){
    $('#category_title').append('<h1 class="black-text center">'+this.props.title.category+'</h1>');
    return (
        null
    );
  }
}
MyComponents.Title = Title

