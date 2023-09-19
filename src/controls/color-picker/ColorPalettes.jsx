import { useState } from "@wordpress/element";
import { Popover } from "../../components";
import styled from "@emotion/styled";
import ControlGroup from "../../containers/ControlGroup";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

const ColorPaletteSwatches = styled.div`
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  padding-right: 24px;
  position: relative;
  cursor: pointer;
  .cw__color-palette-swatches-inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
  }
  .cw__color-palette-swatch {
    width: 25px;
    height: 25px;
    border: 1px solid var(--border-color);
    border-radius: 50%;
  }
  &.has-dropdown {
    &::after {
      content: "";
      width: 12px;
      height: 12px;
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      background-image: url("data:image/svg+xml,%3Csvg width='13' height='9' viewBox='0 0 13 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_336_894)'%3E%3Cpath d='M1.01758 2L6.01758 7L11.0176 2' stroke='%23A3B1BF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_336_894'%3E%3Crect width='12' height='8' fill='white' transform='translate(0.0175781 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  &.selected {
    &::after {
      content: "";
      width: 14px;
      height: 14px;
      background-image: url("data:image/svg+xml,%3Csvg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7' cy='7.5' r='6.74' fill='%23216BDB' stroke='%23216BDB' stroke-width='0.52'/%3E%3Cg clip-path='url(%23clip0_336_1961)'%3E%3Cpath d='M5.40589 11.2598L2.44189 8.29584L3.18289 7.55484L5.40589 9.77784L10.1769 5.00684L10.9179 5.74784L5.40589 11.2598Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_336_1961'%3E%3Crect width='9.36' height='6.76' fill='white' transform='translate(2 4.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
      background-size: 14px 14px;
      background-repeat: no-repeat;
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  }
`;

const ColorPaletteOptions = styled.div`
  .cw__palette-label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    margin: 0 0 8px;
  }
  .cw__color-palette-option {
    &:not(:last-child) {
      margin-bottom: 13px;
    }
    .cw__color-palette-swatches-inner {
      gap: 2px;
    }
  }
`;

const ColorPalette = ({ className, colors, ...rest }) => {
  return (
    <ColorPaletteSwatches
      tabIndex={0}
      className={`cw__color-palette-swatches ${className}`}
      {...rest}
    >
      <div className="cw__color-palette-swatches-inner">
        {colors?.map((color) => {
          return (
            <span
              key={color.name}
              className="cw__color-palette-swatch"
              style={{ backgroundColor: color.color }}
            />
          );
        })}
      </div>
    </ColorPaletteSwatches>
  );
};

const ColorPalettes = ({ value, onChange, colorPalettes, ...ControlGroup }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleTrigger = (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      setIsVisible(!isVisible);
    }
  };

  const handleSelectPalette = (_value) => (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      onChange(_value);
    }
  };

  const selectedPalette = colorPalettes.find((a) => a.name === value);

  return (
    <Popover
      className="cw__color-palettes-popover"
      content={
        <ColorPaletteOptions className="cw__color-palette-options">
          {colorPalettes &&
            colorPalettes.map((palette) => {
              return (
                <div key={palette.name} className="cw__color-palette-option">
                  <label className="cw__palette-label">{palette.name}</label>
                  <ColorPalette
                    className={palette.name === value ? "selected" : ""}
                    colors={palette.colors}
                    onClick={handleSelectPalette(palette.name)}
                    onKeyDown={handleSelectPalette(palette.name)}
                  />
                </div>
              );
            })}
        </ColorPaletteOptions>
      }
    >
      <div>
        <ColorPalette
          className="has-dropdown"
          onClick={handleTrigger}
          onKeyDown={handleTrigger}
          colors={selectedPalette.colors}
        />
      </div>
    </Popover>
  );
};

export default (props) => {
  return ControlGroup(ColorPalettes)(props);
};
