import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__subtitle">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.deleteOptions}
      >
        Remove All
      </button>
    </div>
    {!props.options.length && <p className="widget__message">Please add an option to get started!</p>}
    {props.options.map((option, index) =>
      <Option
        key={option}
        removeOption={props.removeOption}
        count={index + 1}
        optionText={option}
      />)}
  </div>
);

export default Options;
