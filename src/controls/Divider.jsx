import { Popover, PopoverButton } from "../components"
import ControlGroup from "../containers/ControlGroup"
import Spacing from "./Spacing"

const PopoverContent = ({ value, onChange, ...rest }) => {
    const { margin } = value;
    return <>
        <Spacing
            label="Margin"
            value={margin}
            onChange={m => onChange({ ...value, margin: m })}
            isChildren
            {...rest}
        />
    </>
}

const Divider = ({ changed, ...ControlGroup }) => {
    return <Popover content={<PopoverContent {...ControlGroup} />}>
        <PopoverButton changed={changed} />
    </Popover>
}

export default (props) => {
    return ControlGroup(Divider)(props)
}
