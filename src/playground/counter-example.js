const appRoot = document.getElementById('app');

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
}
const minusOne = () => {
  count--;
  renderCounterApp();
}
const reset = () => {
  count = 0;
  renderCounterApp();
}
const renderCounterApp = () => {
  const templateTwo =
    <div>
      <h1>{count}</h1>
      <button id="my-id" onClick={addOne} className="button">+1</button>
      <button id="minus-one" onClick={minusOne} className="button">-1</button>
      <button id="reset" onClick={reset} className="button">reset</button>
    </div>;

  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
