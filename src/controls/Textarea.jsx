import ControlGroup from "../containers/ControlGroup";
const Textarea = ({onChange, ...ControlGroup}) => {
    return <textarea onChange={(e) => onChange(e.target.value)} {...ControlGroup} />
}

export default (props) => {
    return ControlGroup(Textarea)(props)
}