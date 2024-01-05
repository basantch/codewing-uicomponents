import styled from "@emotion/styled";
import { ColorPalette, ColorPicker } from "@wordpress/components";
import ControlGroup from "../../containers/ControlGroup";
import ColorPickerTrigger from "./ColorPickerTrigger";

const ColorPickerHeader = styled.header`
  padding: 5px;
  border: 1px solid var(--cw__border-color);
  border-radius: var(--cw__border-radius);
  margin: 0 -4px 13px;
`;

const SingleColorPicker = ({ colorPalette, value, title, interactive, ...ControlGroup }) => {
  return (
    <ColorPickerTrigger color={value} title={title} interactive={interactive}>
      {colorPalette && (
        <ColorPickerHeader>
          <ColorPalette
            colors={colorPalette}
            value={value}
            clearable={false}
            disableCustomColors
            {...ControlGroup}
          />
        </ColorPickerHeader>
      )}
      <ColorPicker
        color={value}
        enableAlpha
        defaultValue="#000"
        {...ControlGroup}
      />
    </ColorPickerTrigger>
  );
};

export default (props) => {
  return ControlGroup(SingleColorPicker)(props);
};
