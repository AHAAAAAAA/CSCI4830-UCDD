MyComponents.Chart = React.createClass({

  render: function() {
    return (
      <ul className="collection">
      <li className="collection-item"> <b>{this.props.no}: NO</b> {this.props.yes}: Yes</li>
      </ul>
    );
  }
});

MyComponents.votes = React.createClass({
  render: function() {

    var skillElements = this.props.Room1.map(function(s,i){
      return <MyComponents.votes skill={s} key={i}/>
    })

    return (
      <div className="right col l5 m5 s5" style="margin-top:14%;">
        <div className="card-panel light-green darken-1">
          <h4 className="card-title" className="center"><b>Live Poll</b></h4>
        <canvas id="myChart" className="center"></canvas>
        <div className="row center">
          <a className="center waves-effect waves-light red btn">Red</a>
          <a className="center waves-effect waves-light blue btn">Blue</a>
       </div>
      </div>
     </div>
    );
  }
});
