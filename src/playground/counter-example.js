// 1. Setup default state object
// 2. Component rendered with default state values
// 3. Change state based on event (using this.setState())
// 4. Component re-rendered using new state values
// 5. Start again at 3

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
    // old approach (not preferred)
    // this.setState({ count: 0 });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
// const appRoot = document.getElementById('app');
//
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }
// const renderCounterApp = () => {
//   const templateTwo =
//     <div>
//       <h1>{count}</h1>
//       <button id="my-id" onClick={addOne} className="button">+1</button>
//       <button id="minus-one" onClick={minusOne} className="button">-1</button>
//       <button id="reset" onClick={reset} className="button">reset</button>
//     </div>;
//
//   ReactDOM.render(templateTwo, appRoot);
// }
//
// renderCounterApp();
