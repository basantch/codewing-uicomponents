import ControlGroup from "../containers/ControlGroup";
import styled from "@emotion/styled";

const SwitchStyles = styled.div`
    width: 40px;
    height: 22px;
    border-radius: 45px;
    background-color: #d1d1d1;
    position: relative;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    cursor: pointer;
    span{
        content: "";
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #ffffff;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: var(--transition);
        box-shadow: 2px 0px 4px rgba(0,0,0, .1)
    }
    &.checked{
        background-color: var(--secondary-color);
        span{
            left: 20px;
            box-shadow: -2px 0px 4px rgba(0,0,0, .1)
        }
    }
`

const Switch = ({onChange, value}) => {

            const handleSwitchOnKeyDown = (e) => {
                if(e.type === "keydown" && e.key === "Enter"){
                    onChange(!value)
                }
            }

            return <SwitchStyles 
                        tabIndex={0}
                        className={`cw__switch${value ? ' checked' : ''}`}
                        onClick={() => onChange(!value)}
                        onKeyDown={handleSwitchOnKeyDown}
                    >
                        <span></span>
                    </SwitchStyles>
}

export default (props) => {
    return ControlGroup(Switch)(props)
}