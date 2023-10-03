import { SelectButtonGroup, Switch, Text } from "."
import { Popover, PopoverButton } from "../components"
import ControlGroup from "../containers/ControlGroup"

const PopoverContent = ({ value, onChange, ...rest }) => {
    const { type, buttonLabel, showArrow } = value;
    return <>
        <SelectButtonGroup
            value={type}
            onChange={t => onChange({ ...value, type: t })}
            options={[
                {value: "simple", label: "Simple"},
                {value: "button", label: "Button"}
            ]}
            size="md"
            divider="bottom"
            isChildren
        />
        <Text
            label="Text"
            direction="horizontal"
            value={buttonLabel}
            onChange={l => onChange({ ...value, buttonLabel: l })}
            divider="bottom"
            isChildren
        />
        <Switch
            label="Show Arrow"
            direction="horizontal"
            value={showArrow}
            onChange={s => onChange({ ...value, showArrow: s })}
            isChildren
        />
    </>
}

const ReadMoreButton = ({ changed, ...ControlGroup }) => {
    return <Popover content={<PopoverContent {...ControlGroup} />}>
        <PopoverButton changed={changed} />
    </Popover>
}

export default (props) => {
    return ControlGroup(ReadMoreButton)(props)
}
