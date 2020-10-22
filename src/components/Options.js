import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button onClick={props.deleteOptions}>Remove All</button>
    {!props.options.length && <p>Please add an option to get started!</p>}
    {props.options.map(option =>
      <Option
        key={option}
        removeOption={props.removeOption}
        optionText={option}
      />)}
  </div>
);

export default Options;
