class Needs extends React.Component {
    render() {
        return <div id="needs">
            <h2>What do you want?</h2>
            <form action="#">
                <ul id="items">
                    <li>
                        <input onChange={this.props.actions.filterUpdateBurger} type="checkbox" id="s1" />
                        <label htmlFor="s1">Burger</label>
                    </li>
                    <li>
                        <input onChange={this.props.actions.filterUpdateHotDog} type="checkbox" id="s2" />
                        <label htmlFor="s2">Hot Dog</label>
                    </li>
                    <li>
                        <input onChange={this.props.actions.filterUpdateIceCream} type="checkbox" id="s3" />
                        <label htmlFor="s3">Ice Cream</label>
                    </li>
                    <li>
                        <input onChange={this.props.actions.filterUpdatePizza} type="checkbox" id="s4" />
                        <label htmlFor="s4">Pizza</label>
                    </li>
                    <li>
                        <input onChange={this.props.actions.filterUpdateTacos} type="checkbox" id="s5" />
                        <label htmlFor="s5">Tacos</label>
                    </li>
                </ul>
            </form>
        </div>;
    }
}

MyComponents.Needs = Needs;
