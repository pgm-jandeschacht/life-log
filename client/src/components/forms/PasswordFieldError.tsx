import React from 'react'
import PasswordField from './TextField';
import { TextFieldProps } from './TextField';
import { FieldAttributes, useField } from 'formik'
import styled from 'styled-components';
import { Colors } from '../../variables';

const StyledError = styled.div`
    font-size: 1.5rem;
    margin-top: 0.5rem;
    font-weight: 700;
    color: ${Colors.red};
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
