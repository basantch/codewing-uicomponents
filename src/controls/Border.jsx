import { InputNumber, SingleColorPicker, Select, Spacing } from "./";
import ControlGroup from "../containers/ControlGroup";
import styled from "@emotion/styled";
import { Popover } from "../components";
import Icons from "./Icons";

const BorderStyle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const PopoverButton = styled.button`
  padding: 4px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  cursor: pointer;
  background: none;
  &:hover,
  &.changed {
    color: var(--secondary-color);
    border-color: var(--secondary-color);
  }
`;

const PopoverContent = ({
  value,
  onChange,
  responsiveState,
  setResponsiveState,
}) => {
  const { borderWidth, borderStyle, borderRadius } = value;
  return (
    <>
      <InputNumber
        label="Border Widget"
        direction="horizontal"
        value={borderWidth}
        onChange={(_width) => onChange({ ...value, borderWidth: _width })}
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
      />
      <Spacing
        responsive={{
          currentState: responsiveState,
          setState: setResponsiveState,
        }}
        label="Border Radius"
        value={borderRadius}
        units={["px", "%", "em", "rem"]}
        onChange={(_radius) => onChange({ ...value, borderRadius: _radius })}
      />
    </>
  );
};

const Border = ({
  colorPalette,
  changed,
  value,
  onChange,
  ...ControlGroup
}) => {
  const { borderColor } = value;
  return (
    <BorderStyle>
      <SingleColorPicker
        colorPalette={colorPalette}
        title="Border Color"
        value={borderColor}
        onChange={(color) => onChange({ ...value, borderColor: color })}
        {...ControlGroup}
      />
      <Popover
        content={
          <PopoverContent value={value} onChange={onChange} {...ControlGroup} />
        }
      >
        <PopoverButton type="button" className={changed ? "changed" : ""}>
          {Icons.pen}
        </PopoverButton>
      </Popover>
    </BorderStyle>
  );
};

export default (props) => {
  return ControlGroup(Border)(props);
};
