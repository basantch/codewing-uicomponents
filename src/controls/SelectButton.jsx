import ControlGroup from "../containers/ControlGroup";
import styled from "@emotion/styled";
import { Tooltip } from "../components";

const SelectButtonStyles = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
  padding: 10px;
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  color: var(--inactive-color);
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  transition: var(--transition);
  position: relative;
  .cw__select-button {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .cw__icon {
    display: flex;
    svg {
      width: 1em;
      height: 1em;
      vertical-align: -0.12em;
    }
  }
  .cw__icon + span {
    margin-left: 0.25rem;
  }
  .cw__select-button-input {
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }
  &.cw__select-button-wrapper-checked {
    background-color: var(--secondary-color);
    color: #ffffff;
  }
`;

const SelectButtonGroupStyles = styled.div`
  padding: 6px;
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  &.sm {
    padding: 4px;
  }
  > * {
    flex: 1;
    gap: 6px;
  }
  .cw__select-button {
    width: 100%;
    &.cw__select-button-checked {
      background-color: #ffffff;
      color: var(--secondary-color);
      box-shadow: var(--box-shadow);
    }
  }
  &.cw__separate {
    padding: 0;
    background: none;
    border-radius: 0;
    gap: 15px;
    .cw__select-button {
      border: 1px solid var(--border-color);
      background: none;
      &.cw__select-button-checked {
        border-color: var(--secondary-color);
        box-shadow: none;
      }
    }
  }
`;

const sizes = {
  sm: "14px",
  m: "16px",
  lg: "18px",
  xl: "20px",
};

const SelectButton = ({
  value,
  label,
  checked,
  icon,
  onChange,
  title,
  size,
  ...rest
}) => {
  const { style, ..._rest } = { ...rest };
  const handleSelectOnKeyDown = (e) => {
    if (e.type === "keydown" && e.key === "Enter") {
      onChange(value);
    }
  };
  return (
    <Tooltip title={title}>
      <SelectButtonStyles
        tabIndex={0}
        className={`cw__select-button${
          (checked && " cw__select-button-checked") || ""
        }`}
        onKeyDown={handleSelectOnKeyDown}
        style={{ fontSize: sizes[size], ...style }}
      >
        <span className="cw__select-button">
          <input
            tabIndex={-1}
            className="cw__select-button-input"
            type="checkbox"
            value={value}
            checked={checked}
            onChange={onChange}
            {..._rest}
          />
        </span>

        {icon && <span className="cw__icon">{icon}</span>}
        {label && <span>{label}</span>}
      </SelectButtonStyles>
    </Tooltip>
  );
};

const SelectButtonGroup = ({
  options,
  className,
  onChange,
  value,
  separate,
  isMultiple,
  size,
  ...ControlGroup
}) => {
  const handleOnChange = (_value) => () => {
    if (isMultiple) {
      onChange(
        !value.includes(_value)
          ? [...value, _value]
          : value.filter((a) => a != _value),
      );
    } else {
      onChange(_value);
    }
  };

  return (
    <SelectButtonGroupStyles
      className={`cw__select-button-group ${className || ""} ${
        separate ? "cw__separate" : ""
      } ${size || ""}`}
    >
      {options.map(({ value: _value, ...rest }) => {
        const _checked = isMultiple ? value.includes(_value) : value === _value;
        const { ..._rest } = { ...ControlGroup, ...rest };
        return (
          <SelectButton
            size={size}
            key={_value}
            value={_value}
            checked={_checked}
            onChange={handleOnChange(_value)}
            {..._rest}
          />
        );
      })}
    </SelectButtonGroupStyles>
  );
};

export default (props) => {
  return ControlGroup(SelectButtonGroup)(props);
};
