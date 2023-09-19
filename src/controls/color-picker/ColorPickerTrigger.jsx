import styled from "@emotion/styled";
import { useState } from "@wordpress/element";
import { Tooltip, Popover } from "../../components";

const ColorPickerStyles = styled.div`
  .cw__color-picker-color-block {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #000000;
    border: 1px solid #efefef;
    &:hover {
      outline: 1px solid #dfe1eb;
      outline-offset: 2px;
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
  .cw_popover {
    padding: 12px;
  }
`;

const ColorPickerTrigger = ({ color, title, children }) => {
  return (
    <ColorPickerStyles className={`cw__color-picker-trigger`}>
      <Popover content={children}>
        <div>
          <Tooltip title={title}>
            <span
              tabIndex={0}
              className="cw__color-picker-color-block"
              style={{ background: color }}
            >
              <span className="cw__color-picker-color-block-inner"></span>
            </span>
          </Tooltip>
        </div>
      </Popover>
    </ColorPickerStyles>
  );
};

export default ColorPickerTrigger;
