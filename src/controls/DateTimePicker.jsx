import styled from '@emotion/styled';
import { DateTimePicker, Popover } from '@wordpress/components';
import {useState} from "@wordpress/element";
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';
import ControlGroup from '../containers/ControlGroup';
const moment = require('moment');

const DatePickerStyles = styled.div`
    input.cw__date-picker__date-input{
        background-image: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_236_6378)'%3E%3Cpath d='M14.232 1.71436H2.8034C1.85662 1.71436 1.08911 2.48187 1.08911 3.42864V13.7144C1.08911 14.6611 1.85662 15.4286 2.8034 15.4286H14.232C15.1787 15.4286 15.9463 14.6611 15.9463 13.7144V3.42864C15.9463 2.48187 15.1787 1.71436 14.232 1.71436Z' stroke='%23565C62' strokeLinejoin='round'/%3E%3Cpath d='M10.3034 7.14279C10.3034 7.34003 10.1435 7.49993 9.94625 7.49993C9.74901 7.49993 9.58911 7.34003 9.58911 7.14279C9.58911 6.94554 9.74901 6.78564 9.94625 6.78564C10.1435 6.78564 10.3034 6.94554 10.3034 7.14279Z' fill='black' stroke='%23565C62'/%3E%3Cpath d='M13.1606 7.14279C13.1606 7.34003 13.0007 7.49993 12.8034 7.49993C12.6062 7.49993 12.4463 7.34003 12.4463 7.14279C12.4463 6.94554 12.6062 6.78564 12.8034 6.78564C13.0007 6.78564 13.1606 6.94554 13.1606 7.14279Z' fill='black' stroke='%23565C62'/%3E%3Cpath d='M10.3034 10.0002C10.3034 10.1975 10.1435 10.3574 9.94625 10.3574C9.74901 10.3574 9.58911 10.1975 9.58911 10.0002C9.58911 9.80296 9.74901 9.64307 9.94625 9.64307C10.1435 9.64307 10.3034 9.80296 10.3034 10.0002Z' fill='black' stroke='%23565C62'/%3E%3Cpath d='M13.1606 10.0002C13.1606 10.1975 13.0007 10.3574 12.8034 10.3574C12.6062 10.3574 12.4463 10.1975 12.4463 10.0002C12.4463 9.80296 12.6062 9.64307 12.8034 9.64307C13.0007 9.64307 13.1606 9.80296 13.1606 10.0002Z' fill='black' stroke='%23565C62'/%3E%3Cpath d='M4.58916 10.0002C4.58916 10.1975 4.42927 10.3574 4.23202 10.3574C4.03478 10.3574 3.87488 10.1975 3.87488 10.0002C3.87488 9.80296 4.03478 9.64307 4.23202 9.64307C4.42927 9.64307 4.58916 9.80296 4.58916 10.0002Z' fill='black' stroke='%23565C62'/%3E%3Cpath d='M7.44622 10.0002C7.44622 10.1975 7.28632 10.3574 7.08908 10.3574C6.89183 10.3574 6.73193 10.1975 6.73193 10.0002C6.73193 9.80296 6.89183 9.64307 7.08908 9.64307C7.28632 9.64307 7.44622 9.80296 7.44622 10.0002Z' fill='black' stroke='%23565C62'/%3E%3Cpath d='M4.58916 12.8571C4.58916 13.0544 4.42927 13.2143 4.23202 13.2143C4.03478 13.2143 3.87488 13.0544 3.87488 12.8571C3.87488 12.6599 4.03478 12.5 4.23202 12.5C4.42927 12.5 4.58916 12.6599 4.58916 12.8571Z' fill='black' stroke='%23565C62'/%3E%3Cpath d='M7.44622 12.8571C7.44622 13.0544 7.28632 13.2143 7.08908 13.2143C6.89183 13.2143 6.73193 13.0544 6.73193 12.8571C6.73193 12.6599 6.89183 12.5 7.08908 12.5C7.28632 12.5 7.44622 12.6599 7.44622 12.8571Z' fill='black' stroke='%23565C62'/%3E%3Cpath d='M10.3034 12.8571C10.3034 13.0544 10.1435 13.2143 9.94625 13.2143C9.74901 13.2143 9.58911 13.0544 9.58911 12.8571C9.58911 12.6599 9.74901 12.5 9.94625 12.5C10.1435 12.5 10.3034 12.6599 10.3034 12.8571Z' fill='black' stroke='%23565C62'/%3E%3Cpath d='M3.94629 0.571289V1.71415M13.0891 0.571289V1.71415' stroke='%23565C62' strokeLinecap='round' strokeLinejoin='round'/%3E%3Cpath d='M15.9463 4.57129H1.08911' stroke='%23565C62' strokeLinejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_236_6378'%3E%3Crect width='16' height='16' fill='white' transform='translate(0.5177)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
        background-size: 16px;
        background-position: center right 10px;
        background-repeat: no-repeat;
        padding-right: 32px;
    }
`

const MyDateTimePicker = ({value, format, placeholder, ...ControlGroup}) => {

    const [datePopover, setDatePopover] = useState(false);

    const dateFormat = format || "YYY-MM-DD, h:mm:ss a";
    const date = moment(value).format(dateFormat);

    const handleOnKeyDown = (e) => {
        if(e.type === "keydown" && e.key === "Enter"){
            setDatePopover(true)
        }
    }

    return <DatePickerStyles className="cw__date-picker-wrapper">
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
            {
                datePopover && <Popover className="cw__date-popover">
                    <OutsideClickHandler onOutsideClick={() => setDatePopover(!datePopover)}>
                        <DateTimePicker currentDate={ value } {...ControlGroup} />
                    </OutsideClickHandler>
                </Popover>
            }
        </DatePickerStyles>
};

export default (props) => {
    return ControlGroup(MyDateTimePicker)(props);
}