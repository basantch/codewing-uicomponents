import styled from '@emotion/styled';
import { FormFileUpload } from '@wordpress/components';
import ControlGroup from '../containers/ControlGroup';
import Icons from '../assets/Icons';

const FileUploadStyle = styled.div`
    .components-button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 14px;
        line-height: 18.6px;
        padding: 10px 16px;
        border: none;
        background-color: var(--cw__background-color);
        color: var(--cw__secondary-color);
        gap: 8px;
        cursor: pointer;
        border-radius: var(--cw__border-radius);
        transition: var(--cw__transition);
        svg{
            font-size: 24px;
            width: 1em;
            height: 1em;
        }
        &:hover{
            background-color: var(--cw__secondary-color);
            color: #ffffff;
        }
    }
`

const FileUpload = ({buttonLabel, ...ControlGroup}) => (
    <FileUploadStyle>
        <FormFileUpload {...ControlGroup}>
            {Icons.upload}
            {buttonLabel || "Upload"}
        </FormFileUpload>
    </FileUploadStyle>
);

export default (props) => {
    return ControlGroup(FileUpload)(props)
}