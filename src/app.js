class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: props.options
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({options: []}));
  }

  handleDeleteOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter(o => o !== option)
    }));
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value';
    }
    if (this.state.options.includes(option)) {
      return 'This option already exists'
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  }

  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    alert(option);
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer!';
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length}
        />
        <Options
          options={this.state.options}
          deleteOptions={this.handleDeleteOptions}
          removeOption={this.handleDeleteOption}
        />
        <AddOption addOption={this.handleAddOption}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        what should I do?
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteOptions}>Remove All</button>
      {props.options.map(option =>
        <Option
          key={option}
          removeOption={props.removeOption}
          optionText={option}
        />)}
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {error: undefined};
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);
    this.setState(() => ({error}));
    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>add option</button>
        </form>
      </div>
    );
  }
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e) => { props.removeOption(props.optionText) }}>Remove</button>
    </div>
  );
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
