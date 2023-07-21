import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch() {
  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)
  }

  return (
    <div className="toggle-switch">
			<div className='ele'>Solo-Mode</div>
      <div className='ele'><ReactSwitch
        checked={checked}
        onChange={handleChange}
      /></div>
			<div className='ele'>Mulitplayer-Mode</div>
    </div>
  );
}

export default ToggleSwitch;