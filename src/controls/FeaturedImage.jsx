import styled from "@emotion/styled";
import { Select } from ".";
import { Popover, PopoverButton } from "../components";
import ControlGroup from "../containers/ControlGroup";
import Icons from "../assets/Icons";
import SelectButton from "./SelectButton";

const PopoverStyle = styled.div`
  .cw__control-item {
    &.cw__divider-top {
      margin-top: 12px;
      padding-top: 12px;
    }
  }
`;

const PopoverContent = ({ value, onChange }) => {
  const { ratio, scale, size, visibility } = value;
  return (
    <PopoverStyle>
      <Select
        label="Image Ratio"
        direction="horizontal"
        options={[
          {
            value: "original",
            label: "Original",
          },
          {
            value: "predefined",
            label: "Predefined",
          },
          {
            value: "custom",
            label: "Custom",
          },
        ]}
        value={ratio}
        onChange={(val) => onChange({ ...value, ratio: val })}
        isChildren
        style={{ width: "136px" }}
        variant="solid"
      />
      <Select
        label="Image Scale"
        direction="horizontal"
        options={[
          { value: "default", label: "Default" },
          { value: "fill", label: "Fill" },
          { value: "contain", label: "Contain" },
          { value: "cover", label: "Cover" },
          { value: "none", label: "None" },
        ]}
        divider="top"
        value={scale}
        onChange={(val) => onChange({ ...value, scale: val })}
        isChildren
        style={{ width: "136px" }}
        variant="solid"
      />
      <Select
        label="Image Size"
        direction="horizontal"
        options={[
          { value: "default", label: "Default" },
          { value: "full-size", label: "Full Size" },
          { value: "medium", label: "Medium" },
          { value: "thumbnail", label: "Thumbnail" },
        ]}
        divider="top"
        value={size}
        onChange={(val) => onChange({ ...value, size: val })}
        isChildren
        style={{ width: "136px" }}
        variant="solid"
      />
      <SelectButton
        label="Image Visibility"
        size="xl"
        options={[
          { value: "desktop", icon: Icons.desktop, title: "Desktop" },
          { value: "tablet", icon: Icons.tablet, title: "Tablet" },
          { value: "mobile", icon: Icons.mobile, title: "Mobile" },
        ]}
        divider="top"
        value={visibility}
        onChange={(val) => onChange({ ...value, visibility: val })}
        isMultiple
        isChildren
      />
    </PopoverStyle>
  );
};

const FeaturedImage = ({ changed, ...ControlGroup }) => {
  return (
    <Popover content={<PopoverContent {...ControlGroup} />}>
      <PopoverButton changed={changed} />
    </Popover>
  );
};

export default (props) => {
  return ControlGroup(FeaturedImage)(props);
};
