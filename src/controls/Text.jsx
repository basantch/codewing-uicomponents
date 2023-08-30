import ControlGroup from "../containers/ControlGroup";
const Text = ({onChange, ...ControlGroup}) => {
    return <input type="text" onChange={(e) => onChange(e.target.value)} {...ControlGroup} />
}

export default (props) => {
    return ControlGroup(Text)(props)
}