import "./styles.css";
import { Global } from "@emotion/react";
import styles from "./assets/styles";
import {
  GradientColorPicker,
  SelectButtonGroup,
  RangeSlider,
  Select,
  SingleColorPicker,
  MultiColorPicker,
  Spacing,
  Switch,
  Text,
  Textarea,
  FileUpload,
  DateTimePicker,
  InputNumber,
  ColorPalettes,
  Border,
  BoxShadow,
  Typography,
  Ratio,
  Background,
  GradientPicker,
  TokenField,
  ControlGroup,
} from "./controls";
import { useState, useEffect, useMemo } from "@wordpress/element";
import Icons from "./assets/Icons";
import Sort from "./Sort";
import { FocalPointPicker } from "@wordpress/components";
import Button from "./controls/Button";

const colorPalettes = [
  {
    name: "Palette #1",
    colors: [
      { name: "Color 1", color: "#216BDB" },
      { name: "Color 2", color: "#E5F0FF" },
      { name: "Color 3", color: "#F2F7FC" },
      { name: "Color 4", color: "#2B3034" },
      { name: "Color 5", color: "#42474B" },
      { name: "Color 6", color: "#E0E3E7" },
      { name: "Color 7", color: "#FFFFFF" },
      { name: "Color 8", color: "#CED0D3" },
    ],
  },
  {
    name: "Palette #2",
    colors: [
      { name: "Color 1", color: "#03A6A6" },
      { name: "Color 2", color: "#334848" },
      { name: "Color 3", color: "#001A1A" },
      { name: "Color 4", color: "#FFFFFF" },
      { name: "Color 5", color: "#E5E8E8" },
      { name: "Color 6", color: "#F4FCFC" },
      { name: "Color 7", color: "#FFFFFF" },
      { name: "Color 8", color: "#CED0D3" },
    ],
  },
  {
    name: "Palette #3",
    colors: [
      { name: "Color 1", color: "#FF8B3C" },
      { name: "Color 2", color: "#FFF7F1" },
      { name: "Color 3", color: "#FFFBF9" },
      { name: "Color 4", color: "#2B3034" },
      { name: "Color 5", color: "#42474B" },
      { name: "Color 6", color: "#E0E3E7" },
      { name: "Color 7", color: "#FFFFFF" },
      { name: "Color 8", color: "#CED0D3" },
    ],
  },
  {
    name: "Palette #4",
    colors: [
      { name: "Color 1", color: "#8CB369" },
      { name: "Color 2", color: "#A3C287" },
      { name: "Color 3", color: "#F3F7F0" },
      { name: "Color 4", color: "#2B3034" },
      { name: "Color 5", color: "#42474B" },
      { name: "Color 6", color: "#E0E3E7" },
      { name: "Color 7", color: "#FFFFFF" },
      { name: "Color 8", color: "#CED0D3" },
    ],
  },
  {
    name: "Palette #5",
    colors: [
      { name: "Color 1", color: "#DEA200" },
      { name: "Color 2", color: "#F8ECCC" },
      { name: "Color 3", color: "#FDFCF7" },
      { name: "Color 4", color: "#2B3034" },
      { name: "Color 5", color: "#42474B" },
      { name: "Color 6", color: "#E0E3E7" },
      { name: "Color 7", color: "#FFFFFF" },
      { name: "Color 8", color: "#CED0D3" },
    ],
  },
];

export default function App() {
  const [selectValue, setSelectValue] = useState("");
  const [multiSelectValue, setMultiSelectValue] = useState([]);
  const [responsiveState, setResponsiveState] = useState("desktop");
  const [text, setText] = useState("");
  const [columns, setColumns] = useState({
    desktop: { value: 5, unit: "px" },
    tablet: { value: 2, unit: "em" },
    mobile: { value: 1, unit: "rem" },
  });
  const [color, setColor] = useState("#216BDB");
  const [message, setMessage] = useState({
    desktop: "",
    tablet: "",
    mobile: "",
  });
  const [gradient, setGradient] = useState(
    "linear-gradient(135deg, rgb(6, 147, 227) 13%, rgb(163, 45, 45) 48%, rgb(155, 81, 224) 83%)",
  );
  const [switchButton, setSwitchButton] = useState({
    desktop: false,
    tablet: false,
    mobile: false,
  });
  const [alignment, setAlignment] = useState({
    desktop: "left-alignment",
    tablet: "left-alignment",
    mobile: "left-alignment",
  });
  const [tab, setTab] = useState({
    desktop: "color",
    tablet: "color",
    mobile: "color",
  });
  const [padding, setPadding] = useState({
    desktop: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      unit: "px",
    },
    tablet: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      unit: "px",
    },
    mobile: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      unit: "px",
    },
  });
  const [visibility, setVisibility] = useState(["desktop", "tablet"]);
  const [image, setImage] = useState("");
  const [date, setDate] = useState('');
  const [number, setNumber] = useState(0);
  const [palette, setPalette] = useState(colorPalettes[0]);
  const [linkColor, setLinkColor] = useState({
    initial: "#2B3034",
    hover: "#216BDB",
  });
  const [borderStyle, setBorderStyle] = useState({
    color: "#000000",
    width: 0,
    style: "none"
  });

  const [boxShadow, setBoxShadow] = useState({
    enable: false,
    color: "",
    horizontal: { value: 0, unit: "px" },
    vertical: { value: 0, unit: "px" },
    blur: { value: 0, unit: "px" },
    spread: { value: 0, unit: "px" },
    position: "inset",
  });

  const [font, setFont] = useState({
    family: "default",
    size: {
      desktop: { value: 16, unit: "px" },
      tablet: { value: 16, unit: "px" },
      mobile: { value: 16, unit: "px" },
    },
    "line-height": {
      desktop: { value: "", unit: "px" },
      tablet: { value: "", unit: "px" },
      mobile: { value: "", unit: "px" },
    },
    "letter-spacing": {
      desktop: { value: "", unit: "px" },
      tablet: { value: "", unit: "px" },
      mobile: { value: "", unit: "px" },
    },
    "word-spacing": {
      desktop: { value: "", unit: "px" },
      tablet: { value: "", unit: "px" },
      mobile: { value: "", unit: "px" },
    },
    weight: "normal",
    style: "default",
    transform: "default",
    decoration: "default",
  });

  const [imageRatio, setImageRatio] = useState({ ratioType: "predefined", ratio: "1:1", size: "300" });

  const [focalPoint, setFocalPoint] = useState({
    x: 0.5,
    y: 0.5,
  });

  const [url, setUrl] = useState(false)

  const [background, setBackground] = useState({
    background_type: '',
    backgroundColor: '#000000',
    overlayColor: '#000000',
    background_image: {
      url: '',
      x: { value: 0, unit: '%' },
      y: { value: 0, unit: '%' }
    },
    background_position: 'default',
    background_repeat: 'default',
    background_attachment: 'default',
    background_size: 'auto',
    gradient: '#000000'
  });
  const [token, setToken] = useState([]);

  /* Example function to render the CSS styles based on Focal Point Picker value */
  const style = {
    backgroundImage: `url(${url})`,
    backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
  };

  useEffect(() => {
    setColor(palette.colors.find((n) => n.name === "Color 1").color);
    setLinkColor({
      initial: palette.colors.find((n) => n.name === "Color 4").color,
      hover: palette.colors.find((n) => n.name === "Color 1").color,
    });
    setBorderStyle({
      ...borderStyle,
      borderColor: palette.colors.find((n) => n.name === "Color 2").color,
    });
    setBoxShadow({
      ...boxShadow,
      color: palette.colors.find((n) => n.name === "Color 5").color,
    });
  }, [palette]);

  console.debug(url)

  return (
    <>
      <div style={{ width: "100%", textAlign: "center" }}>
        <h3>Codewing UI Components</h3>
      </div>
      <div className="controls-wrapper">
        {/* <Global styles={styles} /> */}
        <Select
          help="Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur velit sem faucibus sagittis felis convallis turpis"
          label="Select Input"
          placeholder="Select Option"
          divider={"top"}
          value={selectValue}
          options={[
            { value: "option-one", label: "Option One" },
            { value: "option-two", label: "Option Two" },
            { value: "option-three", label: "Option Three" },
            { value: "option-four", label: "Option Four" },
            { value: "option-five", label: "Option Five" },
          ]}
          onChange={setSelectValue}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          isSearchable
        />
        <Select
          help="Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur velit sem faucibus sagittis felis convallis turpis"
          label="Multi Select Input"
          placeholder="Select Multiple Options..."
          divider={"top"}
          value={multiSelectValue}
          options={[
            { value: "option-one", label: "Option One" },
            { value: "option-two", label: "Option Two" },
            { value: "option-three", label: "Option Three" },
            { value: "option-four", label: "Option Four" },
            { value: "option-five", label: "Option Five" },
          ]}
          onChange={setMultiSelectValue}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          isMultiple
          isSearchable
        />
        <Text
          label="Text Input"
          placeholder="Text"
          onChange={setText}
          value={text}
          divider={"top"}
          help="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <Textarea
          responsive={{
            currentState: responsiveState,
            setState: setResponsiveState,
          }}
          label="Textarea"
          placeholder="Textarea"
          value={message}
          onChange={setMessage}
          divider={"top"}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <Switch
          responsive={{
            currentState: responsiveState,
            setState: setResponsiveState,
          }}
          label="Switch"
          direction="horizontal"
          value={switchButton}
          onChange={setSwitchButton}
          divider={"top"}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <SelectButtonGroup
          responsive={{
            currentState: responsiveState,
            setState: setResponsiveState,
          }}
          size="lg"
          label="Aligment"
          divider="top"
          options={[
            { value: "left-alignment", icon: Icons.leftAlignment },
            { value: "center-alignment", icon: Icons.centerAlignment },
            { value: "right-alignment", icon: Icons.rightAlignment },
          ]}
          onChange={setAlignment}
          value={alignment}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
      </div>
      <div className="controls-wrapper">
        <SelectButtonGroup
          responsive={{
            currentState: responsiveState,
            setState: setResponsiveState,
          }}
          size="lg"
          label="Vertical Aligment"
          divider="top"
          options={[
            { value: "left-alignment", icon: Icons.top },
            { value: "center-alignment", icon: Icons.middle },
            { value: "right-alignment", icon: Icons.bottom },
          ]}
          onChange={setAlignment}
          value={alignment}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <SelectButtonGroup
          responsive={{
            currentState: responsiveState,
            setState: setResponsiveState,
          }}
          label="Tab"
          divider="top"
          options={[
            { value: "color", label: "Color" },
            { value: "image", label: "Image" },
          ]}
          onChange={setTab}
          value={tab}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <SelectButtonGroup
          size="lg"
          responsive={{
            currentState: responsiveState,
            setState: setResponsiveState,
          }}
          label="Tab"
          divider="top"
          options={[
            { value: "color", label: "Color" },
            { value: "image", label: "Image" },
          ]}
          onChange={setTab}
          value={tab}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          separate
        />
        <RangeSlider
          responsive={{
            currentState: responsiveState,
            setState: setResponsiveState,
          }}
          label="Columns"
          divider="top"
          value={columns}
          onChange={setColumns}
          min={0}
          max={1500}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          units={["px", "rem", "em", "pt", "vh", "vw"]}
        />
        <ColorPalettes
          divider="top"
          label="Global Color Palettes"
          colorPalettes={colorPalettes}
          value={palette}
          onChange={setPalette}
        />
        <SingleColorPicker
          colorPalette={
            colorPalettes.find((c) => c.name === palette.name)?.colors
          }
          label="Color"
          divider="top"
          direction="horizontal"
          title="Color"
          value={color}
          onChange={setColor}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          units={["px", "rem", "em", "pt", "vh", "vw"]}
        />
      </div>
      <div className="controls-wrapper">
        <MultiColorPicker
          label="Multi Color"
          divider="top"
          direction="horizontal"
          colors={[
            {
              name: "initial",
              title: "Initial Color",
              colorPalette: colorPalettes.find((c) => c.name === palette.name)
                ?.colors,
            },
            {
              name: "hover",
              title: "Hover Color",
              colorPalette: colorPalettes.find((c) => c.name === palette.name)
                ?.colors,
            },
          ]}
          value={linkColor}
          onChange={setLinkColor}
        />
        <GradientColorPicker
          title="Gradient Color Picker"
          label="Gradient Color Picker"
          divider="top"
          direction="horizontal"
          value={gradient}
          onChange={setGradient}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <Spacing
          responsive={{
            currentState: responsiveState,
            setState: setResponsiveState,
          }}
          label="Padding"
          divider="top"
          value={padding}
          onChange={setPadding}
        />
        <SelectButtonGroup
          divider="top"
          size="xl"
          label="Visibility"
          isMultiple
          value={visibility}
          options={[
            {
              value: "desktop",
              icon: Icons.desktop,
              title: "Desktop",
            },
            {
              value: "tablet",
              icon: Icons.tablet,
              title: "Tablet",
            },
            {
              value: "mobile",
              icon: Icons.mobile,
              title: "Mobile",
            },
          ]}
          onChange={setVisibility}
        />
        <FileUpload
          divider="top"
          label="Upload 404 Image"
          value={image}
          onChange={setImage}
          help="Lorem ipsum dolor sit amet consectetur adipiscing elit taciti hac, risus diam euismod varius eu nullam facilisis quam tempus eleifend"
        />
        <DateTimePicker
          label="Date Time Picker"
          divider="top"
          value={date}
          onChange={setDate}
          is12Hour={true}
        // placeholder="Updated on"
        />
        <InputNumber
          label="Number of Posts"
          direction="horizontal"
          divider="top"
          value={number}
          onChange={setNumber}
          min={-1}
          max={11}
        />
        <Border
          help="Lorem ipsum dolor sit amet consectetur, adipiscing elit vivamus nam vehicula"
          divider="top"
          label="Border"
          direction="horizontal"
          value={borderStyle}
          onChange={setBorderStyle}
          colorPalette={
            colorPalettes.find((c) => c.name === palette.name)?.colors
          }
          units={["px", "rem", "em", "pt", "vh", "vw"]}
          responsiveState={responsiveState}
          setResponsiveState={setResponsiveState}
        />
        <BoxShadow
          divider="top"
          label="Box Shadow"
          direction="horizontal"
          value={boxShadow}
          onChange={setBoxShadow}
          colorPalette={
            colorPalettes.find((c) => c.name === palette.name)?.colors
          }
          units={["px", "rem", "em", "pt", "vh", "vw"]}
        />
      </div>
      <div className="controls-wrapper">
        <Typography
          divider="bottom"
          direction="horizontal"
          label="Typography"
          value={font}
          onChange={setFont}
          responsiveState={responsiveState}
          setResponsiveState={setResponsiveState}
          fontFamilies={[{ value: "default", label: "Default" }]}
          fontWeights={[{ value: "normal", label: "Normal" }]}
        />
        <Sort />
        <Ratio
          label="Image Ratio"
          direction="horizontal"
          // divider="top"
          value={imageRatio}
          onChange={setImageRatio}
          divider="bottom:top"
        />
        <ControlGroup
          label="Control Group"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        >
          <Background
            label="Background"
            direction="horizontal"
            divider="bottom"
            value={background}
            onChange={setBackground}
          />
          <TokenField
            label="Token Field"
            value={token}
            onChange={setToken}
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
        </ControlGroup>
        <Button value="Button" />
      </div>
    </>
  );
}
