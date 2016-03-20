MyComponents.Votes = React.createClass({
  render: function() {
    return (
      <span> {this.props.votes.no} + "  ss" + {this.props.votes.yes}</span>
     //  <div className="right col l5 m5 s5" style="margin-top:14%;">
     //    <div className="card-panel light-green darken-1">
     //      <h4 className="card-title" className="center"><b>Live Poll</b></h4>
     //    <canvas id="myChart" className="center"></canvas>
     //    <div className="row center">
     //      <a className="center waves-effect waves-light red btn">Red</a>
     //      <a className="center waves-effect waves-light blue btn">Blue</a>
     //   </div>
     //  </div>
     // </div>
    );
  }
});

