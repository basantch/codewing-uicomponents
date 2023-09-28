import styled from "@emotion/styled";
import { DateTimePicker } from "@wordpress/components";
import { Popover } from "../components";
import { useState } from "@wordpress/element";
import ControlGroup from "../containers/ControlGroup";
const moment = require("moment");

const DatePickerStyles = styled.div`
  input.cw__date-picker__date-input {
    background-image: url("data:image/svg+xml,%3Csvg width='23' height='20' viewBox='0 0 23 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_567_9557)'%3E%3Cpath d='M20.9446 2.54545H16.9446V0H15.49V2.54545H6.76274V0H5.30819V2.54545H1.30819C1.01897 2.54579 0.741689 2.66083 0.537177 2.86535C0.332665 3.06986 0.217622 3.34714 0.217285 3.63636V18.9091C0.217622 19.1983 0.332665 19.4756 0.537177 19.6801C0.741689 19.8846 1.01897 19.9997 1.30819 20H20.9446C21.2338 19.9997 21.5111 19.8846 21.7156 19.6801C21.9201 19.4756 22.0351 19.1983 22.0355 18.9091V3.63636C22.0351 3.34714 21.9201 3.06986 21.7156 2.86535C21.5111 2.66083 21.2338 2.54579 20.9446 2.54545ZM20.5809 18.5455H1.67183V4H5.30819V5.81818H6.76274V4H15.49V5.81818H16.9446V4H20.5809V18.5455Z' fill='%23216BDB'/%3E%3Cpath d='M4.58093 8.36377H6.03548V9.81832H4.58093V8.36377ZM8.58093 8.36377H10.0355V9.81832H8.58093V8.36377ZM12.2173 8.36377H13.6718V9.81832H12.2173V8.36377ZM16.2173 8.36377H17.6718V9.81832H16.2173V8.36377ZM4.58093 11.6365H6.03548V13.091H4.58093V11.6365ZM8.58093 11.6365H10.0355V13.091H8.58093V11.6365ZM12.2173 11.6365H13.6718V13.091H12.2173V11.6365ZM16.2173 11.6365H17.6718V13.091H16.2173V11.6365ZM4.58093 14.9092H6.03548V16.3638H4.58093V14.9092ZM8.58093 14.9092H10.0355V16.3638H8.58093V14.9092ZM12.2173 14.9092H13.6718V16.3638H12.2173V14.9092ZM16.2173 14.9092H17.6718V16.3638H16.2173V14.9092Z' fill='%23216BDB'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_567_9557'%3E%3Crect width='21.8182' height='20' fill='white' transform='translate(0.217285)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    background-size: 20px;
    background-position: center right 10px;
    background-repeat: no-repeat;
    padding-right: 32px;
  }
  .components-datetime__time {
    .components-datetime__time-field {
      .components-base-control.components-input-control {
        width: 44px !important;
      }
    }
    [class*="-MonthSelectWrapper"] {
      max-width: 126px;
    }
    .components-input-control__input,
    .components-select-control__input {
      padding: 9px 8px !important;
      min-height: unset !important;
      height: 39px !important;
    }
    .components-datetime__time-separator {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 12px;
      border: none;
    }
    .components-button-group {
      background-color: var(--cw__background-color);
      border-radius: var(--cw__border-radius);
      padding: 6px;
      .components-button {
        font-size: 14px;
        line-height: 18.5px;
        padding: 4px 8px;
        border-radius: var(--cw__border-radius);
        background: none;
        border: none;
        text-transform: uppercase;
        cursor: pointer;
        &.is-primary {
          font-weight: 600;
          background-color: #ffffff;
          box-shadow: var(--cw__box-shadow);
          color: var(--cw__secondary-color);
        }
      }
    }
    .components-datetime__timezone {
      text-decoration: underline !important;
    }
    .components-datetime__time-field-day {
      width: 44px !important;
    }
    .components-datetime__time-field-year {
      width: auto !important;
    }
  }
  .components-datetime__date {
    padding: 8px;
    border: 1px solid var(--cw__border-color);
    border-radius: var(--cw__border-radius);
    .components-button {
      background: none;
      border: none;
      cursor: pointer;
      &:not(.components-datetime__date__day) {
        color: var(--cw__secondary-color);
        svg {
          fill: currentColor;
        }
      }
      &[aria-label*="Selected"] {
        background-color: var(--cw__secondary-color);
        color: #ffffff;
      }
    }
  }
`;

const MyDateTimePicker = ({ value, format, placeholder, ...ControlGroup }) => {
  const [datePopover, setDatePopover] = useState(false);

  const dateFormat = format || "YYY-MM-DD, h:mm:ss a";
  const date = moment(value).format(dateFormat);

  const handleOnKeyDown = (e) => {
    if (e.type === "keydown" && e.key === "Enter") {
      setDatePopover(true);
    }
  };

  return (
    <DatePickerStyles className="cw__date-picker-wrapper">
      <Popover
        content={<DateTimePicker currentDate={value} {...ControlGroup} />}
      >
        <input
          tabIndex={0}
          value={date === "Invalid date" ? "" : date}
          className="cw__date-picker__date-input"
          type="text"
          readOnly
          placeholder={placeholder || dateFormat}
          onClick={() => setDatePopover(!datePopover)}
          onKeyDown={handleOnKeyDown}
        />
      </Popover>
    </DatePickerStyles>
  );
};

export default (props) => {
  return ControlGroup(MyDateTimePicker)(props);
};
