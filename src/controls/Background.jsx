import { useState } from "react"
import { Popover, PopoverButton } from "../components"
import ControlGroup from "../containers/ControlGroup"
import SingleColorPicker from "./color-picker/SingleColorPicker"
import { GradientColorPicker, RangeSlider, Select, SelectButtonGroup } from "."
import Icons from "../assets/Icons"
import styled from "@emotion/styled"
import { GradientPicker } from "@wordpress/components"

const BackgroundStyles = styled.div`
    display: inline-flex;
    gap: 8px;
`

const UploaderStyles = styled.label`
    border: 2px dashed var(--cw__secondary-color);
    border-radius: var(--cw__border-radius);
    background-color: #F6F6F6;
    width: 100%;
    min-height: 100px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: all .3s ease;
    &:hover{
        background-color: var(--cw__background-color);
    }
    >button{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #ffffff;
        font-size: 24px;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .3s ease;
        svg{
            width: 1em;
            height: 1em;
        }
        &:hover{
            background-color: var(--cw__secondary-color);
            color: #ffffff;
        }
    }
    input[type="file"]{
        visibility: hidden;
        position: absolute;
        top: -9999999px;
        width: 0;
        height: 0;
    }
`

const ImageUploader = (props) => {
    return ControlGroup(({ url, background_position, onChange }) => {
        return <div>
            <UploaderStyles htmlFor="image" style={{ background: `url(${url}) ${background_position};` }}>
                <button type="button">{Icons.plus}</button>
                <input id="image" type="file" onChange={e => onChange(e.target.value)} />
            </UploaderStyles>
        </div>
    })(props)
}

const SolidPopover = ({ value, onChange }) => {

    const {
        backgroundColor,
        overlayColor,
        background_image: {
            url,
            x,
            y
        },
        background_image,
        background_position,
        background_repeat,
        background_attachment,
        background_size
    } = value

    // value = {backgroundType: 'solid'}

    const handleOnChange = (key) => (value) => {
        onChange({
            backgroundType: 'solid',
            [key]: value
        })
    }

    return <>
        <SingleColorPicker
            label="Color"
            value={backgroundColor}
            onChange={val => handleOnChange('color')(val)}
            direction="horizontal"
            interactive={true}
        />
        <SingleColorPicker
            label="Overlay Color"
            value={overlayColor}
            onChange={val => handleOnChange('overlayColor')(val)}
            direction="horizontal"
            interactive={true}
            divider="bottom"
        />
        <ImageUploader label="Image" url={url} onChange={val => handleOnChange('background_image')({ ...background_image, url: val })} />
        {
            "" != url && <>
                <Select
                    label="Position"
                    direction="horizontal"
                    value={background_position}
                    onChange={handleOnChange('background_position')}
                    options={[
                        { value: "default", label: "Default" },
                        { value: "center-center", label: "Center Center" },
                        { value: "center-left", label: "Center Left" },
                        { value: "center-right", label: "Center Right" },
                        { value: "top-center", label: "Top Center" },
                        { value: "top-left", label: "Top left" },
                        { value: "top-right", label: "Top Right" },
                        { value: "bottom-center", label: "Bottom Center" },
                        { value: "bottom-left", label: "Bottom Left" },
                        { value: "bottom-right", label: "Bottom Right" },
                        { value: "custom", label: "Custom" },
                    ]}
                    style={{ minWidth: "160px" }}
                    divider="top"
                />
                {
                    'custom' == background_position && <>
                        <RangeSlider
                            label="X Position"
                            value={x || { value: 0, unit: '%' }}
                            onChange={val = handleOnChange('background_image')({ ...background_image, x: val })}
                            units={['px', '%']}
                        />
                        <RangeSlider
                            label="Y Position"
                            value={y || { value: 0, unit: '%' }}
                            onChange={val = handleOnChange('background_image')({ ...background_image, y: val })}
                            units={['px', '%']}
                        />
                    </>
                }
                <Select
                    label="Repeat"
                    direction="horizontal"
                    value={background_repeat}
                    onChange={handleOnChange('background_repeat')}
                    options={[
                        { value: "default", label: "Default" },
                        { value: "no-repeat", label: "No-repeat" },
                        { value: "repeat", label: "Repeat" },
                        { value: "repeat-x", label: "Repeat-x" },
                        { value: "repeat-y", label: "Repeat-y" },
                    ]}
                    style={{ minWidth: "160px" }}
                    divider="bottom"
                />
                <SelectButtonGroup
                    label="Attachment"
                    value={background_attachment}
                    onChange={handleOnChange('background_attachment')}
                    options={[
                        { value: "default", label: "Default" },
                        { value: "scroll", label: "Scroll" },
                        { value: "fixed", label: "Fixed" },
                    ]}
                />
                <SelectButtonGroup
                    label="Size"
                    value={background_size}
                    onChange={handleOnChange('background_size')}
                    options={[
                        { value: "auto", label: "Auto" },
                        { value: "cover", label: "Cover" },
                        { value: "contain", label: "Contain" },
                    ]}
                />
            </>
        }
    </>
}

const GradientPopover = ({ value, onChange }) => {
    return <GradientPicker
        __nextHasNoMargin
        value={value?.gradient}
        gradients={[
            {
                name: "JShine",
                gradient:
                    "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
                slug: "jshine",
            },
            {
                name: "Moonlit Asteroid",
                gradient:
                    "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
                slug: "moonlit-asteroid",
            },
            {
                name: "Rastafarie",
                gradient:
                    "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
                slug: "rastafari",
            },
        ]}
        clearable={false}
        onChange={val => onChange({ backgroundType: 'gradient', gradient: val })}
    />
}


const Background = ({ value, onChange }) => {
    const handleOnChange = (val) => {
        onChange({ ...value, ...val })
    }
    return (
        <BackgroundStyles>
            <Popover content={<SolidPopover value={value} onChange={handleOnChange} />} >
                <PopoverButton className={'solid' == value.backgroundType && 'changed'}>
                    {Icons.brush}
                </PopoverButton>
            </Popover>
            <Popover content={<GradientPopover value={value} onChange={handleOnChange} />} >
                <PopoverButton className={'gradient' == value.backgroundType && 'changed'}>
                    {Icons.gradient}
                </PopoverButton>
            </Popover>
        </BackgroundStyles>
    )
}

export default (props) => {
    return ControlGroup(Background)(props)
}