import React, { useState, useEffect } from 'react';
import './SwitchToggle.scss';

const SwitchToggle = ({ name = 'toggle' }) => {
  const [checked, setChecked] = useState(false);

  /* eslint-disable */
  useEffect(() => {
    console.log(checked)
  }, [checked]);

  return (
    <>
      <form type="submit" className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          onChange={() => setChecked(!checked)}
          name={name}
          id={name} />
        <label className="toggle-switch-label" htmlFor={name}>
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </form>
    </>
  );
};

export default SwitchToggle;
