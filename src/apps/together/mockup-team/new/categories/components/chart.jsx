class Votes extends React.Component {

  /*Animate initial chart*/
  componentDidMount(){
  
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    var firebase = new Firebase('https://team-polive.firebaseio.com/');
	
    var data1 = [
	  {
		  value: this.props.votes.no,
		  color:"#F7464A",
		  highlight: "#FF5A5E",
		  label: "No"
	  },
	  {
		  value: this.props.votes.yes,
		  color: "#46BFBD",
		  highlight: "#5AD3D1",
		  label: "Yes"
	  }
	]
	var data = {
    labels: ["Yes", "No"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [this.props.votes.yes, this.props.votes.no]
        }
    ]
};
	var options = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "#fff",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

}
	var ctx = document.getElementById("myChart").getContext("2d");
	var myDoughnutChart = new Chart(ctx).Doughnut(data1);
	var ctx2 = document.getElementById("myChart2").getContext("2d");
	var myBarChart = new Chart(ctx2).Bar(data, options);

  }
  
  //Reanimate component on chart updates
  componentDidUpdate(){
    
	var options = {
    //Boolean - Whether we should show a stroke on each segment
    animation:false
	}
	var options2 = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : false,
    animation:false,
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : false,

    //String - Colour of the grid lines
    scaleGridLineColor : "#fff",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,
 
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: false,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 1,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 10,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

}
	var data1 = [
	  {
		  value: this.props.votes.no,
		  color:"#F7464A",
		  highlight: "#FF5A5E",
		  label: "No"
	  },
	  {
		  value: this.props.votes.yes,
		  color: "#46BFBD",
		  highlight: "#5AD3D1",
		  label: "Yes"
	  }
	]
	var data = {
    labels: ["Yes", "No"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [this.props.votes.yes, this.props.votes.no]
        }
    ]
};
	var ctx = document.getElementById("myChart").getContext("2d");
	var ctx2 = document.getElementById("myChart2").getContext("2d");
	var myDoughnutChart = new Chart(ctx).Doughnut(data1, options);
	var myBarChart = new Chart(ctx2).Bar(data, options2);

  }
  
  render(){

    var handler = this.props.castVote
    // function(){
    //     console.log('button is working')
    // }

    // console.log('render', this.props)

    return (
        <div className="card-panel light-green darken-3">
          <h4 className="card-title" className="center"><b>Live Poll</b></h4>
          <canvas id="myChart" className=""></canvas>
          <canvas id="myChart2" className=""></canvas>
          <div className="row center">            
          <a id= "yesButton" onClick={handler} className="center waves-effect waves-light blue btn"><i className="material-icons">thumb_up</i></a>
          <a id ="noButton" className="center waves-effect waves-light red btn"><i className="material-icons">thumb_down</i></a>
          </div>
        </div>
    );
  }
}

MyComponents.Votes = Votes

