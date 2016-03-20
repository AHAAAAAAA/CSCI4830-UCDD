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
      <span> {this.props.votes.no} + "  ss" + {this.props.votes.yes}</span>
    );
  }
}
MyComponents.Votes = Votes
