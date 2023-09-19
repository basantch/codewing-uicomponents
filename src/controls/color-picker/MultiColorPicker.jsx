import styled from "@emotion/styled";
import ControlGroup from "../../containers/ControlGroup";
import ColorPickerTrigger from "./ColorPickerTrigger";
import SingleColorPickerPopover from "./SingleColorPickerPopover";

const MultiColorPickerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const MultiColorPicker = ({ colors, value, onChange, ...ControlGroup }) => {
  return (
    <MultiColorPickerStyle>
      {colors?.map(({ title, name, colorPalette }) => {
        return (
          <ColorPickerTrigger color={value[name]} title={title}>
            <SingleColorPickerPopover
              palette={colorPalette}
              value={value[name]}
              onChange={(_color) => onChange({ ...value, [name]: _color })}
              {...ControlGroup}
            />
          </ColorPickerTrigger>
        );
      })}
    </MultiColorPickerStyle>
  );
};

export default (props) => {
  return ControlGroup(MultiColorPicker)(props);
};
