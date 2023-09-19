import styled from "@emotion/styled";
import { useRef } from "@wordpress/element";
import { Tooltip } from "../components";
import Icons from "../controls/Icons";
import "tippy.js/dist/tippy.css";

const ControlItemStyles = styled.div`
  color: var(--primary-color);
  padding: 16px;
  &.cw__divider-top {
    border-top: 1px solid var(--background-color);
  }
  &.cw__divider-bottom {
    border-bottom: 1px solid var(--background-color);
  }
  header {
    &:not(:empty) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      flex: 1;
    }
    label {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      position: relative;
      display: inline-flex;
      align-items: center;
      color: #2b3034;
    }
    .cw__action-buttons {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  &:not(.horizontal) {
    header {
      margin: 0 0 16px;
    }
  }
  .cw__control-description {
    flex: 0 0 100%;
    margin: 12px 0 16px;
    font-size: 13px;
    line-height: 1.5;
  }
  .cw__reset-button {
    display: inline-block;
    padding: 0;
    width: 16px;
    height: 16px;
    border: none;
    background: none;
    background-image: url("data:image/svg+xml,%3Csvg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.93963 2.09581C2.49505 1.53695 3.15568 1.09348 3.88342 0.790986C4.61115 0.488489 5.3916 0.332942 6.17978 0.333314C9.49685 0.333314 12.176 3.01831 12.176 6.33331C12.176 9.64831 9.49685 12.3333 6.17978 12.3333C3.38053 12.3333 1.04657 10.4208 0.378653 7.83331H1.93963C2.24877 8.71045 2.82267 9.4701 3.58215 10.0074C4.34162 10.5448 5.24924 10.8333 6.17978 10.8333C8.66383 10.8333 10.6826 8.81581 10.6826 6.33331C10.6826 3.85081 8.66383 1.83331 6.17978 1.83331C4.934 1.83331 3.82331 2.35081 3.0128 3.16831L5.42931 5.58331H0.176025V0.333314L1.93963 2.09581Z' fill='%2393999F'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    font-size: 0;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      transform: rotate(-30deg);
    }
  }
  .cw__reset-button + .cw__responsive-buttons {
    position: relative;
    padding-left: 10px;
    &::before {
      content: "";
      width: 0;
      height: 14px;
      border-left: 2px solid var(--border-color);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  &.horizontal {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    column-gap: 8px;
    > section {
      input {
        max-width: 150px;
      }
    }
    .cw__custom-select {
      .select-dropdown {
        left: auto;
        right: 0;
      }
    }
    .cw__color-picker-popover {
      right: 0;
    }
    .cw__action-buttons {
      padding-right: 10px;
      position: relative;
      &::after {
        content: "";
        width: 0;
        height: 14px;
        border-right: 2px solid var(--border-color);
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
  }
`;

const ResponsiveButtons = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  .cw__responsive-button {
    font-size: 15px;
    cursor: pointer;
    color: var(--inactive-color);
    transition: var(--transition);
    padding: 0;
    border: none;
    background: none;
    svg {
      width: 1em;
      height: 1em;
      vertical-align: -0.12em;
    }
    &:hover,
    &.active {
      color: var(--secondary-color);
    }
  }
`;

const ControlHelpStyle = styled.i`
  margin: 0 8px;
`;

// Responsive Buttons
const ResponsiveControl = ({ device, onChange }) => {
  return (
    <ResponsiveButtons className="cw__responsive-buttons">
      <button
        className={`cw__responsive-button${
          device === "desktop" ? " active" : ""
        }`}
        onClick={() => onChange("desktop")}
        title="Desktop"
      >
        {Icons.desktop}
      </button>
      <button
        className={`cw__responsive-button${
          device === "tablet" ? " active" : ""
        }`}
        onClick={() => onChange("tablet")}
        title="Tablet"
      >
        {Icons.tablet}
      </button>
      <button
        className={`cw__responsive-button${
          device === "mobile" ? " active" : ""
        }`}
        onClick={() => onChange("mobile")}
        title="Mobile"
      >
        {Icons.mobile}
      </button>
    </ResponsiveButtons>
  );
};

// Controls Container
const ControlGroup =
  (Component) =>
  ({
    direction,
    className,
    label,
    divider,
    description,
    value,
    defaultValue,
    onChange,
    responsive,
    help,
    ...rest
  }) => {
    let _ref = useRef(null);
    if (_ref.current == null) {
      _ref.current = value;
    }

    const handleOnChange = (_value) => {
      onChange(
        responsive ? { ...value, [responsive?.currentState]: _value } : _value,
      );
    };

    const border = divider ? ` cw__divider-${divider}` : "";
    return (
      <ControlItemStyles
        className={`cw__control-item ${direction || ""}${border}`}
      >
        {label && (
          <header>
            <label>
              {label}
              {help && (
                <Tooltip title={help} trigger="click">
                  <ControlHelpStyle>{Icons.help}</ControlHelpStyle>
                </Tooltip>
              )}
            </label>
            {(_ref.current !== value || responsive) && (
              <div className="cw__action-buttons">
                {_ref.current !== value && (
                  <button
                    tabIndex={0}
                    className="cw__reset-button"
                    onClick={() => onChange(_ref.current)}
                  >
                    Reset
                  </button>
                )}
                {responsive && (
                  <ResponsiveControl
                    onChange={responsive.setState}
                    device={responsive.currentState}
                  />
                )}
              </div>
            )}
          </header>
        )}
        {description && direction !== "horizontal" && (
          <div className="cw__control-description">{description}</div>
        )}
        <section className={className || ""}>
          <Component
            value={responsive ? value[responsive?.currentState] : value}
            onChange={(res) => handleOnChange(res)}
            {...rest}
          />
        </section>
        {description && direction === "horizontal" && (
          <div
            className="cw__control-description"
            style={{ margin: "16px 0 0" }}
          >
            {description}
          </div>
        )}
      </ControlItemStyles>
    );
  };

export default ControlGroup;
