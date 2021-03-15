import styled from 'styled-components';

/* Write all styled components here */

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 24px;

    position: static;
    width: 121px;
    height: 48px;
    left: 208px;
    top: 0px;

    background: #000000;
    border-radius: 90px;
    color: white;


`;

export const InputField = styled.input`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 0px 0px 0px 16px;

    position: static;
    width: 200px;
    height: 48px;
    left: 0px;
    top: 0px;

    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 40px;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 8px;
`;

export const LabelBig = styled.text`

`;