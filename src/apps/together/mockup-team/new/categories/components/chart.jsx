class Votes extends React.Component {

  /*Animate initial chart*/
  componentDidMount(){
  
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
	
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
        <div className="card-panel light-green darken-3">
          <h4 className="card-title" className="center"><b>Live Poll</b></h4>
          <canvas id="myChart" className="center"></canvas>
          <div className="row center">
            <a className="center waves-effect waves-light red btn"><i className="material-icons">thumb_down</i></a>
            <a className="center waves-effect waves-light blue btn"><i className="material-icons">thumb_up</i></a>
          </div>
        </div>
 
    );
  }
}
MyComponents.Votes = Votes

