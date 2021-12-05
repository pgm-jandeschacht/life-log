import React from 'react'
import { DropDownProps } from './DropDown';
import { DropDown } from '.';
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
            dropDownTitle={props.dropDownTitle}
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
