MyComponents.chart = React.createClass({

componentDidMount() {
  this.firebaseRef = new Firebase("https://team-polive.firebaseio.com/rooms/");
  this.firebaseRef.on("child_added", function(dataSnapshot) {
    this.items.push(dataSnapshot.val());
    this.setState({
      rooms: this.rooms
    });
  }.bind(this));
}

  render: function() {
    return (
      <ul className="collection">
       <b>{this.props.no}:</b> {this.props.yes} Years
      </ul>
    );
  }
});

MyComponents.chart = chart