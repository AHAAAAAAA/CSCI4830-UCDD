MyComponents.Chart = React.createClass({

  render: function() {
    return (
      <ul className="collection">
      <li className="collection-item"> <b>{this.props.name}:</b> {this.props.skill.years} Years</li>
      </ul>
    );
  }
});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card teal">
        <div className="card-content">
        {skillElements}
        </div>
      </div>
    );
  }
});