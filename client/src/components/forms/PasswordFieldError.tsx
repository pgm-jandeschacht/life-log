import React from 'react'
import PasswordField from './TextField';
import { TextFieldProps } from './TextField';
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
    @media (min-width: ${Breakpoint.large}) {
        font-size: 1.2rem;
    }
`

const PasswordFieldError: React.FC<TextFieldProps & FieldAttributes<{}>> = ({ ...props }) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : ""; 
    return (
        <>
            <PasswordField
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
    )
}

export default PasswordFieldError
