import { InputNumber, SingleColorPicker, Select, Spacing } from "./";
import ControlContainer from "../containers/ControlContainer";
import styled from "@emotion/styled";
import { Popover, PopoverButton } from "../components";
import Icons from "../assets/Icons";

const BorderStyle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const PopoverContent = ({
  value,
  onChange,
  responsiveState,
  setResponsiveState,
  units,
}) => {
  const { borderWidth, borderStyle, borderRadius } = value;
  return (
    <>
      <InputNumber
        label="Border Widget"
        direction="horizontal"
        value={borderWidth}
        onChange={(_width) => onChange({ ...value, borderWidth: _width })}
        isChildren
      />
      <Select
        responsive={{
          currentState: responsiveState,
          setState: setResponsiveState,
        }}
        label="Border Style"
        options={[
          { value: "none", label: "None", icon: Icons.none },
          { value: "solid", label: "Solid", icon: Icons.minus },
          { value: "dashed", label: "Dash", icon: Icons.dashed },
          { value: "double", label: "Double", icon: Icons.menu },
          { value: "dotted", label: "Dot", icon: Icons.ellipsis },
        ]}
        value={borderStyle}
        onChange={(_style) => onChange({ ...value, borderStyle: _style })}
        isChildren
      />
      <Spacing
        responsive={{
          currentState: responsiveState,
          setState: setResponsiveState,
        }}
        label="Border Radius"
        value={borderRadius}
        units={units}
        onChange={(_radius) => onChange({ ...value, borderRadius: _radius })}
        isChildren
      />
    </>
  );
};

const Border = ({
  colorPalette,
  changed,
  value,
  onChange,
  ...ControlContainer
}) => {
  const { borderColor } = value;
  return (
    <BorderStyle>
      <SingleColorPicker
        colorPalette={colorPalette}
        title="Border Color"
        value={borderColor}
        onChange={(color) => onChange({ ...value, borderColor: color })}
        {...ControlContainer}
      />
      <Popover
        content={
          <PopoverContent value={value} onChange={onChange} {...ControlContainer} />
        }
      >
        <PopoverButton changed={changed} />
      </Popover>
    </BorderStyle>
  );
};

export default (props) => {
  return ControlContainer(Border)(props);
};
