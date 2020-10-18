class BuildItVisible extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.showDetails = 'Show details';
    this.hideDetails = 'Hide details';

    this.state = {
      detailsVisible: false,
    }
  }
  handleToggle() {
    this.setState((prevState) => {
      return {
        detailsVisible: !prevState.detailsVisible,
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>{this.state.detailsVisible ? this.hideDetails :  this.showDetails}</button>
        {this.state.detailsVisible && <p>This is the details!</p>}
      </div>
    )
  }
}

ReactDOM.render(<BuildItVisible />, document.getElementById('app'));

// const showDetails = 'Show details';
// const hideDetails = 'Hide details';
//
// const appRoot = document.getElementById('app');
//
// let currLabel = showDetails;
// const toggleDescription = () => {
//   currLabel = currLabel === showDetails ? hideDetails : showDetails;
//   render();
// }
// const render = () => {
//   const template =
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDescription}>{currLabel}</button>
//       {<p>{currLabel === hideDetails && 'This is the details!'}</p>}
//     </div>
//
//   ReactDOM.render(template, appRoot)
// }
//
// render();
