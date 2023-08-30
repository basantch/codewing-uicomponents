import styled from '@emotion/styled';
import { ColorPicker, ColorPalette } from '@wordpress/components';
import ControlGroup from "../../containers/ControlGroup";
import ColorPickerTrigger from "./ColorPickerTrigger";

const ColorPaletteStyles = styled.div`
    .cw__palette-header{
        padding: 5px;
        margin-bottom: 13px;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        margin-left: -4px;
        margin-right: -4px;
        label{
            display: block;
            margin: 0 0 .5rem;
            font-size: 14px;
        }
    }
`

const SingleColorPicker = ({colorPalette, value, title, ...ControlGroup}) => {
    return <ColorPickerTrigger color={value} title={title}>
            <ColorPaletteStyles>
                {
                    colorPalette && <header className='cw__palette-header'>
                        <ColorPalette
                            colors={ colorPalette }
                            value={ value }
                            onChange={ ( color ) => onChange( color ) }
                            disableCustomColors={true}
                            clearable={false}
                            {...ControlGroup}
                        />
                    </header>
                }
                <ColorPicker color={value} {...ControlGroup} />
            </ColorPaletteStyles>
        </ColorPickerTrigger>
}

export default (props) => {
    return ControlGroup(SingleColorPicker)(props);
}