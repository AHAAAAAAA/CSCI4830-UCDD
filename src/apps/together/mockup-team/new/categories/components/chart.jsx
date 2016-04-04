class Votes extends React.Component {

  //Animate initial chart
  componentDidMount(){
    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    var firebase = new Firebase('https://team-polive.firebaseio.com/');
	 if (this.props.data.noVotes==0&&this.props.data.yesVotes==0){
    var data1 = [
    {
      value: 1,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "No"
    },
    {
      value: 1,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Yes"
    }
  ];
  var data = {
      labels: ["Yes", "No"],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [1, 1]
          }
      ]
    };
   }
   else{
    var data1 = [
	  {
		  value: this.props.data.noVotes,
		  color:"#F7464A",
		  highlight: "#FF5A5E",
		  label: "No"
	  },
	  {
		  value: this.props.data.yesVotes,
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
              data: [this.props.data.yesVotes, this.props.data.noVotes]
          }
      ]
    };
}
	
	var options = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,
}
    //Set room votes
    this.props.actions.setRoomVotes();
	console.log("votes are: ", this.props.data.noVotes)
	var ctx = document.getElementById("myChart").getContext("2d");
	var myDoughnutChart = new Chart(ctx).Doughnut(data1);
	var ctx2 = document.getElementById("myChart2").getContext("2d");
	var myBarChart = new Chart(ctx2).Bar(data, options);

  }
  
  //Reanimate component on chart updates
  componentDidUpdate(){
    var yes = this.props.data.yesVotes;
	var no = this.props.data.noVotes;
	var options = {
    //Boolean - Whether we should show a stroke on each segment
    animation:false
	}
	var options2 = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,
    animation:false
}
if (this.props.data.noVotes==0&&this.props.data.yesVotes==0){
    var data1 = [
    {
      value: 1,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "No"
    },
    {
      value: 1,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Yes"
    }
  ];
  var data = {
      labels: ["Yes", "No"],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [1, 1]
          }
      ]
    };
   }
   else{
    var data1 = [
    {
      value: this.props.data.noVotes,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "No"
    },
    {
      value: this.props.data.yesVotes,
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
              data: [this.props.data.yesVotes, this.props.data.noVotes]
          }
      ]
    };
}
    this.props.actions.setRoomVotes();
	var ctx = document.getElementById("myChart").getContext("2d");
	var ctx2 = document.getElementById("myChart2").getContext("2d");
	var myDoughnutChart = new Chart(ctx).Doughnut(data1, options);
	var myBarChart = new Chart(ctx2).Bar(data, options2);
  }
  
  render(){
    
    return (
        <div className="card-panel light-green darken-3">
          <h4 className="card-title" className="center"><b>Live Poll</b></h4>
          <canvas id="myChart" className=""></canvas>
          <canvas id="myChart2" className=""></canvas>
          <div className="row center">            
          <a id= "yesButton" onClick={this.props.actions.setUserVoteYes} className="center waves-effect waves-light blue btn"><i className="material-icons">thumb_up</i></a>
          <a id ="noButton"  onClick={this.props.actions.setUserVoteNo} className="center waves-effect waves-light red btn"><i className="material-icons">thumb_down</i></a>
          </div>
        </div>
    );
  }
}

MyComponents.Votes = Votes

