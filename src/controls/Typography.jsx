import { RangeSlider, Select } from ".";
import { Popover, PopoverButton } from "../components";
import ControlContainer from "../containers/ControlContainer";

const TypographyContent = ({
  value,
  onChange,
  responsiveState,
  setResponsiveState,
  fontFamilies,
  fontWeights,
}) => {
  const {
    family,
    size,
    "line-height": lineHeight,
    "letter-spacing": letterSpacing,
    "word-spacing": wordSpacing,
    weight,
    style,
    transform,
    decoration,
  } = value;

  const handleOnChange = (key, _value) => {
    onChange({ ...value, [key]: _value });
  };

  return (
    <>
      <Select
        label="Font Family"
        direction="horizontal"
        value={family}
        onChange={(val) => handleOnChange("family", val)}
        options={fontFamilies}
        placeholder="Select Font Family"
        variant="solid"
        isChildren
        isSearchable
        style={{ width: "136px" }}
      />
      <RangeSlider
        label="Size"
        value={size}
        onChange={(val) => handleOnChange("size", val)}
        isChildren
        responsive={{
          currentState: responsiveState,
          setState: setResponsiveState,
        }}
        units={["px", "em", "rem", "vw"]}
        max={size[responsiveState].unit === "px" ? 100 : 10}
      />
      <RangeSlider
        label="Line Height"
        value={lineHeight}
        onChange={(val) => handleOnChange("line-height", val)}
        isChildren
        responsive={{
          currentState: responsiveState,
          setState: setResponsiveState,
        }}
        units={["px", "em"]}
        max={lineHeight[responsiveState].unit === "px" ? 100 : 10}
      />
      <RangeSlider
        label="Letter Spacing"
        value={letterSpacing}
        onChange={(val) => handleOnChange("letter-spacing", val)}
        isChildren
        responsive={{
          currentState: responsiveState,
          setState: setResponsiveState,
        }}
        units={["px"]}
        max={letterSpacing[responsiveState].unit === "px" ? 100 : 10}
      />
      <RangeSlider
        label="Word Spacing"
        value={wordSpacing}
        onChange={(val) => handleOnChange("word-spacing", val)}
        isChildren
        responsive={{
          currentState: responsiveState,
          setState: setResponsiveState,
        }}
        units={["px", "em"]}
        max={wordSpacing[responsiveState].unit === "px" ? 100 : 10}
      />
      <Select
        label="Font Weight"
        direction="horizontal"
        value={weight}
        options={fontWeights}
        onChange={(val) => handleOnChange("weight", val)}
        variant="solid"
        isChildren
        style={{ width: "136px" }}
      />
      <Select
        label="Style"
        direction="horizontal"
        options={[
          { value: "default", label: "Default" },
          { value: "italic", label: "Italic" },
          { value: "oblique", label: "Oblique" },
          { value: "normal", label: "Normal" },
        ]}
        value={style}
        onChange={(val) => handleOnChange("style", val)}
        variant="solid"
        isChildren
        style={{ width: "136px" }}
      />
      <Select
        label="Transform"
        direction="horizontal"
        options={[
          { value: "default", label: "Default" },
          { value: "uppercase", label: "Uppercase" },
          { value: "lowercase", label: "Lowercase" },
          { value: "capitalize", label: "Capitalize" },
          { value: "normal", label: "Normal" },
        ]}
        value={transform}
        onChange={(val) => handleOnChange("transform", val)}
        variant="solid"
        isChildren
        style={{ width: "136px" }}
      />
      <Select
        label="Decoration"
        direction="horizontal"
        options={[
          { value: "default", label: "Default" },
          { value: "underline", label: "Underline" },
          { value: "overline", label: "Overline" },
          { value: "line-through", label: "Line Through" },
          { value: "none", label: "None" },
        ]}
        value={decoration}
        onChange={(val) => handleOnChange("decoration", val)}
        variant="solid"
        isChildren
        style={{ width: "136px" }}
      />
    </>
  );
};

const Typography = ({ changed, ...ControlContainer }) => {
  return (
    <Popover content={<TypographyContent {...ControlContainer} />}>
      <PopoverButton changed={changed} />
    </Popover>
  );
};

export default (props) => {
  return ControlContainer(Typography)(props);
};
