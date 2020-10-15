class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer!';
    const options = ['thing 1', 'thing 2', 'thing 4'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return(
    <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
    </div>);
  }
}

class Action extends React.Component {
  render() {
    return(
    <div>
      <button>what should I do?</button>
    </div>);
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map(option => <Option key={option} optionText={option} />)}
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <form >
        <input type="text" name="option"/>
        <button>add option</button>
      </form>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>{this.props.optionText}</div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
