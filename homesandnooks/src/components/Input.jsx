import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

    input{
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

const Input = (props) =>{
    const {title, name, width, type, value, placeholder, handleChange,} = props;
    return(
        <Container>
            <label htmlFor={name}>{title}</label>
            <input
                style = {{width: width}}
                type={type}
                id={name}
                value={value}
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                min = {type === "number" ? 1 : null}
                max = {type === "number" ? 4 : null}
                accept = {type === "image"? "image/png, image/jpeg, image/jpg": null}
                     />
                
        </Container>
    )
}

export default Input;