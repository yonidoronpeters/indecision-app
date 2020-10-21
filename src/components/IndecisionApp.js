import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: []
    }
  }

  // component lifecycle methods
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      // do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
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
