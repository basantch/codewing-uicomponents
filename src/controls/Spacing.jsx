import styled from "@emotion/styled";
import ControlGroup from "../containers/ControlGroup";
import { useState } from "@wordpress/element";
import { UnitPicker } from "../components";
import Icons from "../assets/Icons";

const SpacingInputStyles = styled.label`
  text-align: center;
  flex: 1;
  input[type="number"] {
    text-align: center;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  .label {
    display: inline-block;
    font-size: 10px;
    margin-top: 0.25rem;
    text-transform: uppercase;
  }
`;

const SpacingGroupStyles = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 0.5rem;
  .cw__spacing-button-wrapper {
    background-color: var(--cw__background-color);
    border-radius: var(--cw__border-radius);
    display: flex;
    height: 45px;
    flex: 1;
    button {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--cw__inactive-color);
      padding: 0.5rem;
      font-size: 13px;
      border-radius: var(--cw__border-radius);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      &:hover,
      &.active {
        color: var(--cw__secondary-color);
      }
      &:focus {
        outline: 1px dotted;
      }
      &.cw__spacing-button-link-button {
        flex: 1;
      }
    }
    .cw__unit-picker-wrapper {
      position: relative;
      &::before {
        content: "";
        width: 0;
        height: 14px;
        border-left: 1px solid var(--cw__inactive-color);
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
  }
`;
const properties = [
  { name: "top", label: "Top" },
  { name: "right", label: "Right" },
  { name: "bottom", label: "Bottom" },
  { name: "left", label: "Left" },
];

const SapcingInput = ({ label, ...rest }) => {
  return (
    <SpacingInputStyles className="cw__spacing-input-wrapper">
      <span className="cw__spacing-input">
        <input type="number" {...rest} />
      </span>
      {label && <span className="label">{label}</span>}
    </SpacingInputStyles>
  );
};

const Spacing = ({ onChange, value, units, max, min, ...ControlGroup }) => {
  const [locked, setLocked] = useState(false);

  const handleOnChange = (e) => {
    const val = e.target.value
    const key = e.target.name;
    const _value = val >= max ? max : val <= min ? min : val;
    if (locked) {
      onChange({
        ...value,
        top: _value,
        right: _value,
        bottom: _value,
        left: _value,
      });
    } else {
      onChange({ ...value, [key]: _value });
    }
  };

  const handleLocked = () => {
    const _value = value.top;
    setLocked(!locked);
    onChange({
      ...value,
      top: _value,
      right: _value,
      bottom: _value,
      left: _value,
    });
  };

  return (
    <SpacingGroupStyles className="cw__spacing-group">
      {properties.map(({ name, label }) => {
        return (
          <SapcingInput
            key={name}
            label={label}
            name={name}
            onChange={handleOnChange}
            value={value[name]}
            {...ControlGroup}
          />
        );
      })}
      <div className="cw__spacing-button-wrapper">
        <button
          type="button"
          className={`cw__spacing-button-link-button${locked ? " active" : ""}`}
          onClick={() => handleLocked()}
        >
          {Icons.link}
        </button>
        {(units || value?.unit) && (
          <UnitPicker
            units={units}
            value={value.unit}
            onChange={(u) => onChange({ ...value, unit: u })}
          />
        )}
      </div>
    </SpacingGroupStyles>
  );
};

export default (props) => {
  return ControlGroup(Spacing)(props);
};
