MyComponents.Team = React.createClass({
  render: function() {

    // inspect this.props.team to make sure we load the data correctly
    console.log('members', this.props.members)

    // For each 'member' in 'team', create a <li> component to display
    // information about this member.

    var members = this.props.members.map(function(member, i){
      return <li key={i} className="collection-item row">
              <span className="chip light-blue center col-lg-2 left">{member.firstname} {member.lastname}</span>
              <a className="white col-lg-4 right" href={member.github}>Github</a>
            </li>
    })

    return (
      <div className="card">

        <div className="card-content">
          <ul className="collection with-header">
          <li class="collection-header"><h4 class="team-title">  Team Members</h4></li>
            {members}
          </ul>
        </div>
      </div>
    );
  }
});


