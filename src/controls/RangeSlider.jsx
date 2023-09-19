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
        background-color: var(--background-color);
        padding-left: 10px;
        padding-right: 10px;
      }
      .components-range-control__track,
      span[class*="-Rail-railBackgroundColor"] {
        height: 6px;
      }
      span[class*="-Rail-railBackgroundColor"] {
        background-color: #e0e3e7;
      }
      .components-range-control__tooltip {
        font-size: 13px;
        line-height: 17.3px;
        padding: 8px;
        border-radius: var(--border-radius);
        background-color: #2b3034;
        bottom: 100%;
        margin-bottom: 10px;
        &::after {
          content: "";
          border: 6px solid transparent;
          border-top-color: #2b3034;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
  .components-range-control__wrapper {
    .components-range-control__thumb-wrapper {
      width: 20px;
      height: 20px;
      transform: translateY(-50%);
      top: 50%;
      margin-top: 0;
      margin-left: -12px;
      > span {
        background-color: #ffffff;
        box-shadow: 0 0 0 2px #e6e6e6;
        background-image: url("data:image/svg+xml,%3Csvg width='12' height='6' viewBox='0 0 12 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.40393 5.22144L1.40393 3.22144L3.40393 1.22144' stroke='%2393999F' strokeLinecap='round' strokeLinejoin='round'/%3E%3Cpath d='M8.73718 1.22144L10.7372 3.22144L8.73718 5.22144' stroke='%2393999F' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-size: 12px;
        background-position: center;
        &::before {
          width: calc(100% + 12px);
          height: calc(100% + 12px);
          top: -6px;
          left: -6px;
          opacity: 0.15;
          z-index: -1;
        }
      }
      > span[class*="-thumbFocus"] {
        box-shadow: 0 0 0 2px var(--secondary-color);
      }
    }
  }
  &.cw__has-unit {
    .components-input-control__container {
      max-width: 50px;
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
      border-left: 1px solid var(--inactive-color);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      color: var(--inactive-color);
    }
  }
`;

const RangeSlider = ({ units, value, onChange, ...ControlGroup }) => {
  return (
    <RangeStyles className={units ? "cw__has-unit" : ""}>
      <RangeControl
        value={value.value}
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
