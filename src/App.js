import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

import './style.css';

export default function App() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState('#fc3503');

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
    console.log('Color changing is', color.hex);
  };

  const hideColorPicker = (e) => {
    console.log('Hiding color picker', e);
  };

  return (
    <div>
      {/* Color Display */}
      <div
        style={{
          width: '25px',
          height: '25px',
          backgroundColor: color,
          cursor: 'pointer',
        }}
        onClick={toggleColorPicker}
      ></div>

      {/* Color Picker */}
      <div
        style={{
          visibility: showColorPicker ? 'visible' : 'hidden',
          position: 'absolute',
          zIndex: 2,
          marginTop: '10px',
          tabIndex: 0,
        }}
        onBlur={hideColorPicker}
      >
        <SketchPicker color="#fff" onChange={handleColorChange} />
      </div>
    </div>
  );
}
