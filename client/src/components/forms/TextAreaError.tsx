import React from 'react'
import { TextAreaProps } from './TextArea'
import { TextArea } from '.';
import { FieldAttributes, useField } from 'formik'
import styled from 'styled-components';
import { Breakpoint, Colors } from '../../variables';

const StyledError = styled.div`
    font-size: 1.2rem;
    margin-top: 0.75rem;
    font-weight: 700;
    color: ${Colors.red};
    @media (min-width: ${Breakpoint.small}) {
        font-size: 1.5rem;
    }
    @media (min-width: ${Breakpoint.small}) {
        font-size: 1.2rem;
    }
`

const TextAreaError: React.FC<TextAreaProps & FieldAttributes<{}>> = ({ ...props }) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : "";  
    return (
        <>
        <TextArea
            {...field}
            placeholder={props.placeholder}
            value={props.value}
        />
        {errorText &&
            <StyledError>
                {errorText}
            </StyledError>
        }

    </>
        // <textarea required id="agenda_content" rows={5} name="agenda_content" placeholder={placeholder}></textarea>
    )
}

export default TextAreaError
