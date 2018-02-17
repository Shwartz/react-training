import React from 'react';

import styles from './Input.css';

const input = (props) => {
  let inputElement;

  switch (props.elementType) {
    case ('input'):
      inputElement = <input
        className={styles.InputElement}
        {...props.elementConfig}
        onChange={props.changed}
        value={props.value}/>;
      break;
    case('textarea'):
      inputElement = <textarea
        className={styles.InputElement}
        {...props.elementConfig}
        onChange={props.changed}
        value={props.value}/>;
      break;
    case('select'):
      inputElement = (
        <select
          value={props.value}
          onChange={props.changed}
          className={styles.InputElement}>
          {props.elementConfig.options.map((option, index) => (
            <option value={option.value} key={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>);
      break;
    default:
      inputElement = <input
        className={styles.InputElement}
        onChange={props.changed}
        {...props.elementConfig}
        value={props.value}/>
  }
  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );

};

export default input;