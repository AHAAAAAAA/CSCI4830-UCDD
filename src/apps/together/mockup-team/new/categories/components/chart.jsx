class Votes extends React.Component {

  /*Animate initial chart*/
  componentDidMount(){
    var data1 = [
	  {
		  value: this.props.votes.no,
		  color:"#F7464A",
		  highlight: "#FF5A5E",
		  label: "Red"
	  },
	  {
		  value: this.props.votes.yes,
		  color: "#46BFBD",
		  highlight: "#5AD3D1",
		  label: "Green"
	  }
	]
	var ctx = document.getElementById("myChart").getContext("2d");
	var myDoughnutChart = new Chart(ctx).Doughnut(data1);
  }
  
  //Reanimate component on chart updates
  componentDidUpdate(){
    var data1 = [
	  {
		  value: this.props.votes.no,
		  color:"#F7464A",
		  highlight: "#FF5A5E",
		  label: "Red"
	  },
	  {
		  value: this.props.votes.yes,
		  color: "#46BFBD",
		  highlight: "#5AD3D1",
		  label: "Green"
	  }
	]
	var ctx = document.getElementById("myChart").getContext("2d");
	var myDoughnutChart = new Chart(ctx).Doughnut(data1);
  }
  
  render(){
    return (
      // <span> {this.props.votes.no} + {this.props.votes.yes}</span>
     <div className="right col l5 m5 s5" style={{marginTop: '14%'}}>
        <div className="card-panel light-green darken-1">
          <h4 className="card-title"><b>Live Poll</b></h4>
          <canvas id="myChart" className="center" />
          <div className="row center">
            <a className="center waves-effect waves-light red btn">Red</a>
            <a className="center waves-effect waves-light blue btn">Blue</a>
          </div>
        </div>
      </div>
    );
  }
}
MyComponents.Votes = Votes
