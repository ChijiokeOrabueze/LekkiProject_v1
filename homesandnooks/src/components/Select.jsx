import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    select{
        height: 40px;
        width: 300px;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }    

`

const Select = (props) =>{
    const {name, title, value, handleChange, width, placeholder} = props;
    return(
        <Container>
            <label htmlFor={name}>{title}</label>
            <select
                id={name}
                value={value}
                name = {name}
                onChange={handleChange}
                style = {{width: width}}>


                    <option value="" disabled>{placeholder}</option>
                    {props.options.map((value)=>{
                        return(
                            <option key={value} value={value} label={value}>{value}</option>
                        )
                    })}

            </select>
        </Container>
    )
}

export default Select;