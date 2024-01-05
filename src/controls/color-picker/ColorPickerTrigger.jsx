import styled from "@emotion/styled";
import { Tooltip, Popover } from "../../components";

const ColorPickerStyles = styled.div`
  background-color: #e5e5f7;
  opacity: 1;
  background-image:  repeating-linear-gradient(45deg, #c1c1c1 25%, transparent 25%, transparent 75%, #c1c1c1 75%, #c1c1c1), repeating-linear-gradient(45deg, #c1c1c1 25%, #e5e5f7 25%, #e5e5f7 75%, #c1c1c1 75%, #c1c1c1);
  background-position: 0 0, 6px 6px;
  background-size: 12px 12px;
  border-radius: 50%;
  [aria-expanded] {
    display: flex;
  }
  .cw__color-picker-color-block {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #000000;
    border: 1px solid #efefef;
    &:hover, &:focus {
      outline: 1px solid #dfe1eb;
      outline-offset: 2px;
      outline-color: var(--cw__secondary-color);
    }
  }
  .cw__color-picker-popover {
    position: absolute;
    z-index: 11;
  }
  &:focus {
    .cw__color-picker-color-block {
      outline: 1px solid #dfe1eb;
      outline-offset: 2px;
    }
  }
`;

const ColorPickerTrigger = ({ color, title, children, interactive }) => {
  return (
    <ColorPickerStyles className={`cw__color-picker-trigger`}>
      <Popover content={children} interactive={interactive}>
        <Tooltip title={title}>
          <span
            tabIndex={0}
            className="cw__color-picker-color-block"
            style={{ background: color }}
          >
            <span className="cw__color-picker-color-block-inner"></span>
          </span>
        </Tooltip>
      </Popover>
    </ColorPickerStyles>
  );
};

export default ColorPickerTrigger;
