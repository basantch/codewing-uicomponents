import styled from '@emotion/styled';
import { useState } from '@wordpress/element'
import { Popover } from '@wordpress/components';
import Tooltip from '../Tooltip';
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';

const ColorPickerStyles = styled.div`
    position: relative;
    .cw__color-picker-color-block{
        display: inline-block;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #000000;
        border: 1px solid #efefef;
        &:hover{
            outline: 1px solid #DFE1EB;
            outline-offset: 2px;
        }
    }
    .cw__color-picker-popover{
        position: absolute;
        z-index: 11;
    }
    &.open{
        .cw__color-picker-color-block{
            outline: 1px solid #DFE1EB;
            outline-offset: 2px;
        }
    }
`

const ColorPickerTrigger = ({color, title, children}) => {

    const [popoverOpen, setPopoverOpen] = useState(false);

    const handleOpenOnKeyDown = (e) => {
        if(e.type === "keydown" && e.key === "Enter"){
            setPopoverOpen(true)
        }
    }

    return <ColorPickerStyles 
                className={`cw__color-picker-trigger${popoverOpen && ' open' || ''}`}
            >
                <Tooltip title={title}>
                    <span 
                        tabIndex={0} 
                        className='cw__color-picker-color-block' 
                        onClick={() => setPopoverOpen(!popoverOpen)}
                        onKeyDown={handleOpenOnKeyDown}
                        style={{background: color}}
                    >
                        <span className="cw__color-picker-color-block-inner"></span>
                    </span>
                </Tooltip>
                {
                    popoverOpen && <Popover className='cw__color-picker-popover'>
                        <OutsideClickHandler onOutsideClick={() => setPopoverOpen(false)}>{children}</OutsideClickHandler>
                    </Popover>
                }
            </ColorPickerStyles>
}


export default ColorPickerTrigger