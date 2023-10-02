import styled from "@emotion/styled";
import { RangeControl } from "@wordpress/components";
import ControlGroup from "../containers/ControlGroup";
import { UnitPicker } from "../components";

const RangeStyles = styled.div`
  display: flex;
  > .components-base-control {
    flex: 1;
    .components-base-control__field {
      margin-bottom: 0;
      .components-input-control__input {
        border: none;
        background-color: var(--cw__background-color);
        padding-left: 5px;
        padding-right: 5px;
      }
    }
  }
  &.cw__has-unit {
    .components-input-control__container {
      max-width: 40px;
    }
    .components-input-control__input {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      text-align: center;
      -moz-appearance: textfield;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
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
    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      color: var(--cw__inactive-color);
    }
  }
`;

const RangeSlider = ({ units, value, onChange, ...ControlGroup }) => {
  return (
    <RangeStyles className={units || value?.unit ? "cw__has-unit" : ""}>
      <RangeControl
        value={+value.value}
        onChange={(val) => onChange({ ...value, value: val })}
        {...ControlGroup}
      />
      {(units || value?.unit) && (
        <UnitPicker
          units={units}
          value={value?.unit}
          onChange={(u) => onChange({ ...value, unit: u })}
        />
      )}
    </RangeStyles>
  );
};

export default (props) => {
  return ControlGroup(RangeSlider)(props);
};
