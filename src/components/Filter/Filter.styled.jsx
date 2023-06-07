import styled from 'styled-components';

export const Label = styled.label`
    width: 200px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
`;

export const Input = styled.input`
    display: block;
    margin: 0 auto;
    width: 300px;
    margin-bottom: 20px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #000;
    text-align: center;
    font=size: 26px;
    transition: all 250ms ease;

    &:focus {
        outline: none;
        border-bottom: 1px solid #2196F3; 
    }
    
    &:placeholder {
        color: #2196F3;
        font-size: 40px;
`;