MyComponents.Task = React.createClass({

  render: function() {
    return (
        <li className="row">
        <b className="">{this.props.task.title}</b>
        </li>
    );
  }

});

MyComponents.TaskList = React.createClass({
  render: function() {

    var taskElements = this.props.tasks.map(function(s,i){
      return <MyComponents.Task task={s} key={i}/>
    })

    return (
        <ul className="tasks">
        {taskElements}
        </ul>
    );
  }
});