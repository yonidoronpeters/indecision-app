
const showDetails = 'Show details';
const hideDetails = 'Hide details';

const appRoot = document.getElementById('app');

let currLabel = showDetails;
const toggleDescription = () => {
  currLabel = currLabel === showDetails ? hideDetails : showDetails;
  render();
}
const render = () => {
  const template =
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDescription}>{currLabel}</button>
      {<p>{currLabel === hideDetails && 'This is the details!'}</p>}
    </div>

  ReactDOM.render(template, appRoot)
}

render();
