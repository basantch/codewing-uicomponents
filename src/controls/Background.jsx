import { useState } from "react"
import { Popover, PopoverButton } from "../components"
import ControlGroup from "../containers/ControlGroup"
import SingleColorPicker from "./color-picker/SingleColorPicker"
import { GradientColorPicker, Select, SelectButtonGroup } from "."
import Icons from "../assets/Icons"
import styled from "@emotion/styled"

const BackgroundStyles = styled.div`
    display: inline-flex;
    gap: 8px;
`

const UploaderStyles = styled.div`
    border: 2px dashed var(--cw__secondary-color);
    border-radius: var(--cw__border-radius);
    background-color: #F6F6F6;
    width: 100%;
    min-height: 100px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
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
`

const ImageUploader = (props) => {
    return ControlGroup(() => {
        return <UploaderStyles>
            <button type="button">{Icons.plus}</button>
        </UploaderStyles>
    })(props)
}

const PopoverContent = ({ value, onChange }) => {

    const [color, setColor] = useState('#000000')
    return <>
        <SingleColorPicker
            label="Color"
            value={color}
            onChange={setColor}
            direction="horizontal"
            interactive={true}
        />
        <SingleColorPicker
            label="Overlay Color"
            value={color}
            onChange={setColor}
            direction="horizontal"
            interactive={true}
            divider="bottom"
        />
        <ImageUploader label="Image" />
        <Select
            label="Position"
            direction="horizontal"
            value={'default'}
            onChange={{}}
            options={[
                {value: "default", label: "Default"},
                {value: "center-center", label: "Center Center"},
                {value: "center-left", label: "Center Left"},
                {value: "center-right", label: "Center Right"},
                {value: "top-center", label: "Top Center"},
                {value: "top-left", label: "Top left"},
                {value: "top-right", label: "Top Right"},
                {value: "bottom-center", label: "Bottom Center"},
                {value: "bottom-left", label: "Bottom Left"},
                {value: "bottom-right", label: "Bottom Right"},
                {value: "custom", label: "Custom"},
            ]}
            style={{minWidth: "160px"}}
            divider="top"
        />
        <Select
            label="Repeat"
            direction="horizontal"
            value={'default'}
            onChange={{}}
            options={[
                {value: "default", label: "Default"},
                {value: "no-repeat", label: "No-repeat"},
                {value: "repeat", label: "Repeat"},
                {value: "repeat-x", label: "Repeat-x"},
                {value: "repeat-y", label: "Repeat-y"},
            ]}
            style={{minWidth: "160px"}}
            divider="bottom"
        />
        <SelectButtonGroup
            label="Attachment"
            value={'default'}
            onChange={{}}
            options={[
                {value: "default", label: "Default"},
                {value: "scroll", label: "Scroll"},
                {value: "fixed", label: "Fixed"},
            ]}
        />
        <SelectButtonGroup
            label="Size"
            value={'auto'}
            onChange={{}}
            options={[
                {value: "auto", label: "Auto"},
                {value: "cover", label: "Cover"},
                {value: "contain", label: "Contain"},
            ]}
        />
    </>
}

const Background = (props) => {
    return (
        <BackgroundStyles>
            <Popover content={<PopoverContent {...props} />}>
                <PopoverButton className="changed">
                    {Icons.brush}
                </PopoverButton>
            </Popover>
            <Popover content={<PopoverContent {...props} />}>
                <PopoverButton>
                    {Icons.gradient}
                </PopoverButton>
            </Popover>
        </BackgroundStyles>
    )
}

export default (props) => {
    return ControlGroup(Background)(props)
}