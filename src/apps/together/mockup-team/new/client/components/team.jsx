//Team is on the main page!
MyComponents.Team = React.createClass({
  render: function() {

    // inspect this.props.team to make sure we load the data correctly
    

    // For each 'member' in 'team', create a <li> component to display
    // information about this member.

    var members = this.props.members.map(function(member, i){
      return ( <li key={i} className="collection-item">
              <PersonChip name={member.name} image={member.image} href={member.github} />
            </li> );
    });

    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">Team Members</span>
          <div className="collection">
            {members}
          </div>
        </div>
      </div>
    );
  }
});

var PersonChip = React.createClass({
  render: function() {
    return (
      <div className="chip blue">
        <img src={this.props.image} />
        <a className="white-text" href={this.props.github}>{this.props.name}</a>
      </div>
    );
  }
});