MyComponents.Hour = React.createClass({
  render: function() {
    console.log(this.props.hour.BEG)
    return (
      <div className="card">
        <div className="card-content">
          <b> From {this.props.hour.FROM} to {this.props.hour.TO} </b>
          Beggining: {this.props.hour.BEG}
          End: {this.props.hour.END}
          From {this.props.hour.FROM} to {this.props.hour.TO}
        </div>
      </div>
    );
  }
});

//TODO: This is a component to display an item in the hours array
   //       Raw props data is {JSON.stringify(this.props)}
MyComponents.GarageHours = React.createClass({
  render: function() {

    var hours = this.props.hours.map(function(h,i){
      return <MyComponents.Hour hour={h} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
          TODO: This is a component to display the hours of this garage.
          Raw props data is {JSON.stringify(this.props)}

          { hours }

        </div>
      </div>
    );
  }
});
