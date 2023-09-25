import ControlGroup from "../containers/ControlGroup";
import { useState, useRef, useEffect } from "@wordpress/element";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "@emotion/styled";

const Icons = {
  close: (
    <svg
      width="9"
      height="10"
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.12428 1.46449L1.05321 8.53556M1.05321 1.46449L8.12428 8.53556"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const SelectStyles = styled.div`
  position: relative;
  font-size: 14px;
  &::after {
    content: "";
    width: 1rem;
    height: 1rem;
    background-color: var(--inactive-color);
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    transition: var(--transition);
    mask: url("data:image/svg+xml,%3Csvg width='15' height='8' viewBox='0 0 15 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5177 1L7.5177 7L13.5177 1' stroke='%2393999F' stroke-width='2' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E%0A");
    mask-size: 100%;
    mask-position: center;
    mask-repeat: no-repeat;
  }
  &.open {
    &::after {
      transform: translateY(-50%) rotate(180deg);
    }
  }
  .cw__select-input {
    padding-right: 2rem;
    cursor: default;
  }
  .cw__select-dropdown {
    padding: 6px;
    margin: 6px 0 0;
    background-color: #ffffff;
    border-radius: var(--border-radius);
    box-shadow:
      0px 4px 6px -2px #10182808,
      0px 12px 16px -4px #10182814;
    border: 1px solid var(--border-color);
    padding-top: 0.5rem;
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 100%;
    z-index: 1;
    animation: fadeInDown 0.2s ease;
    input[type="search"] {
      margin: 0 0 8px;
    }
    .cw__404-text {
      display: block;
      text-align: center;
      color: #ff0e0e;
      font-weight: 600;
      padding: 6px;
    }
  }
  .cw__select-options {
    padding: 0;
    margin: 0;
    list-style: none;
    max-height: 202px;
    overflow-y: auto;
    li {
      padding: 10.5px 8px;
      cursor: default;
      border-radius: var(--border-radius);
      color: #2b3034;
      cursor: pointer;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      &:not(:last-child) {
        margin-bottom: 0.25rem;
      }
      &:hover {
        color: var(--secondary-color);
      }
      &.selected {
        font-weight: 600;
        color: var(--secondary-color);
        background-color: var(--background-color);
        background-image: url("data:image/svg+xml,%3Csvg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.7021 5L7.53544 14.1667L3.36877 10' stroke='%23216BDB' stroke-width='1.66667' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E%0A");
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position: center right 10px;
        padding-right: 40px;
      }
      .icon {
        display: inline-flex;
        font-size: 20px;
        svg {
          width: 1em;
          height: 1em;
        }
      }
      .icon + .text {
        margin-left: 8px;
      }
    }
  }
  .cw__custom-select__input-wrapper {
    min-width: 100px;
    color: #2b3034;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    min-height: 44px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px;
    gap: 8px;
    input.cw__custom-select__input {
      min-height: unset;
      padding: 0;
      width: 1px;
      min-width: unset;
      border: none;
    }
    &:focus {
      border-color: var(--secondary-color);
    }
    .cw__custom-select__input-value {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .placeholder {
      color: var(--inactive-color);
    }
  }
  &.is-multiple {
    &::after {
      content: none;
    }
  }
  &:not(.is-multiple) {
    .cw__custom-select__input-wrapper {
      padding-right: 32px;
    }
  }
`;

const SelectedBadgeStyle = styled.span`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  color: #2b3034;
  padding: 6px 12px;
  background-color: #e5f0ff;
  border-radius: var(--border-radius);
  .cw__cancel {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;

const SelectedBadge = ({ text, onCancel }) => {
  return (
    <SelectedBadgeStyle className="cw__selected-badge">
      {text}
      <button
        type="button"
        aria-label="cancel"
        className="cw__cancel"
        onClick={onCancel}
      >
        {Icons.close}
      </button>
    </SelectedBadgeStyle>
  );
};

const removeItems = (a, b) => {
  return a?.filter((item) => {
    return b?.indexOf(item.value) < 0;
  });
};

const Select = ({
  onChange,
  options,
  value,
  isMultiple,
  isSearchable,
  placeholder,
  ...ControlGroup
}) => {
  const [selectOptions, setSelectOptions] = useState(options);
  const [open, setOpen] = useState(false);
  const selectInput = useRef(null);
  const chosen = options?.find((a) => a.value === value);

  useEffect(() => {
    if (isMultiple) {
      setSelectOptions(removeItems(options, value));
    }
  }, [value]);

  const escape = (e) => {
    if (e.type === "keydown" && e.key === "Escape") {
      setOpen(false);
      selectInput.current.focus();
    }
  };

  const handleSelectOnKeyDown = (_value) => (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      onChange(
        isMultiple
          ? !value.includes(_value)
            ? [...value, _value]
            : value.filter((v) => v != _value)
          : _value,
      );
      selectInput.current.focus();
    }
  };

  const handleOpenOnKeyDown = (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      setOpen(true);
      selectInput.current.focus();
    }
    escape(e);
  };

  const handleOnSearch = (e) => {
    const keywords = e.target.value.toLowerCase();
    setSelectOptions(
      isMultiple
        ? removeItems(options, value).filter((f) =>
            f.label.toLowerCase().startsWith(keywords),
          )
        : options.filter((f) => f.label.toLowerCase().startsWith(keywords)),
    );
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <SelectStyles
        className={`cw__custom-select${(open && " open") || ""}${
          isMultiple ? " is-multiple" : ""
        }`}
      >
        <div
          tabIndex={0}
          className="cw__custom-select__input-wrapper"
          onKeyDown={handleOpenOnKeyDown}
          onClick={handleOpenOnKeyDown}
          ref={selectInput}
        >
          {isMultiple &&
            value?.map((val, i) => {
              const _selectedValue = options?.find(
                (a) => a.value === val,
              )?.label;
              return (
                <SelectedBadge
                  key={i}
                  text={_selectedValue}
                  onCancel={() => onChange(value?.filter((a) => a !== val))}
                />
              );
            })}
          {!isMultiple && (
            <span className="cw__custom-select__input-value">
              {chosen?.icon}
              {chosen?.label}
            </span>
          )}
          {placeholder && value?.length <= 0 && (
            <span className="placeholder">{placeholder}</span>
          )}
        </div>
        {selectOptions && open && (
          <div className="cw__select-dropdown">
            {isSearchable && (
              <input
                type="search"
                placeholder="Search..."
                onChange={handleOnSearch}
              />
            )}
            {selectOptions.length <= 0 && (
              <span className="cw__404-text">There is no options!</span>
            )}
            <ul className="cw__select-options">
              {selectOptions?.map(({ value: _value, label, icon }, i) => {
                const selected = value?.includes(_value);
                return (
                  <li
                    key={i}
                    tabIndex={0}
                    className={selected ? "selected" : ""}
                    onClick={handleSelectOnKeyDown(_value)}
                    onKeyDown={handleSelectOnKeyDown(_value)}
                  >
                    {icon && <i className="icon">{icon}</i>}
                    <span className="text">{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </SelectStyles>
    </OutsideClickHandler>
  );
};

export default (props) => {
  return ControlGroup(Select)(props);
};
