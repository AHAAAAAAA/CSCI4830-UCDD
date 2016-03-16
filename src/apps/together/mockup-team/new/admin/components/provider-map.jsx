class ProviderMap extends React.Component {
  render(){
    return <div>
      <div><h1>Implemented on user-map</h1>
        <pre>{JSON.stringify(this.props.users)}</pre>
      </div>
    </div>
  }
}

MyComponents.ProviderMap = ProviderMap
