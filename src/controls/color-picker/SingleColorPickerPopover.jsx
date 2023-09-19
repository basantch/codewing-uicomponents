import styled from "@emotion/styled";
import { ColorPalette, ColorPicker } from "@wordpress/components";

const ColorPaletteStyles = styled.div`
  .cw__palette-header {
    padding: 5px;
    margin-bottom: 13px;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    margin-left: -4px;
    margin-right: -4px;
    label {
      display: block;
      margin: 0 0 0.5rem;
      font-size: 14px;
    }
  }
`;

export default ({ palette, value, onChange, ...rest }) => {
  return (
    <ColorPaletteStyles>
      {palette && (
        <header className="cw__palette-header">
          <ColorPalette
            colors={palette}
            value={value}
            onChange={(color) => onChange(color)}
            disableCustomColors={true}
            clearable={false}
            {...rest}
          />
        </header>
      )}
      <ColorPicker
        color={value}
        onChange={(color) => onChange(color)}
        {...rest}
      />
    </ColorPaletteStyles>
  );
};
