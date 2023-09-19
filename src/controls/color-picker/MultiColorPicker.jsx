import styled from "@emotion/styled";
import ControlGroup from "../../containers/ControlGroup";
import SingleColorPicker from "./SingleColorPicker";

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
          <SingleColorPicker
            value={value[name]}
            title={title}
            colorPalette={colorPalette}
            onChange={(_color) => onChange({ ...value, [name]: _color })}
            {...ControlGroup}
          />
        );
      })}
    </MultiColorPickerStyle>
  );
};

export default (props) => {
  return ControlGroup(MultiColorPicker)(props);
};
