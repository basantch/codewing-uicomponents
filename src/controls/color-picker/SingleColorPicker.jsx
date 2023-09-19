import ControlGroup from "../../containers/ControlGroup";
import ColorPickerTrigger from "./ColorPickerTrigger";
import SingleColorPickerPopover from "./SingleColorPickerPopover";

const SingleColorPicker = ({ colorPalette, value, title, ...ControlGroup }) => {
  return (
    <ColorPickerTrigger color={value} title={title}>
      <SingleColorPickerPopover
        palette={colorPalette}
        value={value}
        onChange={onchange}
        {...ControlGroup}
      />
    </ColorPickerTrigger>
  );
};

export default (props) => {
  return ControlGroup(SingleColorPicker)(props);
};
