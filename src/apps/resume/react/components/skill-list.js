MyComponents.Skill = React.createClass({

  render: function() {
    return (
        <li>
        <b>{this.props.skill}</b>
        </li>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
        <ul className="skillset">
        {skillElements}
        </ul>
    );
  }
});