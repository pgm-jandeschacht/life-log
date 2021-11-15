import React from 'react'
import { DropDownProps } from './DropDown';
import { DropDown } from '.';
import { FieldAttributes, useField } from 'formik'
import styled from 'styled-components';
import { Colors } from '../../variables';

const StyledError = styled.div`
    font-size: 1.5rem;
    margin-top: 0.5rem;
    font-weight: 700;
    color: ${Colors.red};
`

const DropDownError: React.FC<DropDownProps & FieldAttributes<{}>> = ({ ...props }) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : "";  
    return (
        <>
            <DropDown
            dummyText={props.dummyText}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            />
            {errorText &&
                <StyledError>
                    {errorText}
                </StyledError>
            }
        </>
    )
}

export default DropDownError
