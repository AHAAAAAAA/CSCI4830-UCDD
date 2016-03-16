class NavBar extends React.Component {

  render(){
    return (
    <nav>
        <div className="nav-wrapper black">
        <a href="#" className="brand-logo center">Uber Cart</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="../index.html">Home</a></li>
        <li><a href="../client">Clients</a></li>
         <li><a href="../admin">Admin</a></li>
        </ul>

      </div>
     </nav>
    );
  }

}
MyComponents.NavBar = NavBar
