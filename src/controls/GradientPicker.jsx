import React, { useState } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'
import { Popover, PopoverButton } from '../components';

const GradientPicker = ({ value, onChange }) => {
  const [color, setColor] = useState("linear-gradient(90deg, transparent 0%)");
  const [isVisible, setIsVisible] = useState(false)
  // return <Popover content={<ColorPicker
  //   value={color}
  //   onChange={setColor}
  // />}>
  //   <PopoverButton />
  // </Popover>
  return <ColorPicker
    value={value}
    onChange={onChange}
  />
}

export default GradientPicker