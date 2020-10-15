console.log('app.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'This is a basic app',
  options: []
};
const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onResetOptions = () => {
  app.options = [];
  render();
}

const onMakeDecision = () => {
  const random = Math.floor(Math.random() * app.options.length);
  const option = app.options[random];
  alert(option);
}
const appRoot = document.getElementById('app');

const render = () => {
  const template =
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle && app.subtitle}</p>
      <p>{(app.options && app.options.length > 0) ? 'Here are your options: ' : 'No options'}</p>
      <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onResetOptions}>remove all</button>
      <ol>
        { app.options.map(option => <li key={option}>{option}</li>) }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>add option</button>
      </form>
    </div>;
  ReactDOM.render(template, appRoot);
};

render();

const user = {
  name: 'Yoni',
  age: 35,
  location: 'Boulder, CO'
};
const getLocation = (user) => {
  if (user.location) {
    return <p>Location: {user.location}</p>;
  }
}

