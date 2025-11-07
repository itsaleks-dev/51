import { useState } from "react";
import Cards from "react-credit-cards-2";
import styled from "styled-components";

import "react-credit-cards-2/dist/es/styled-compiled.css";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing(3)};
    gap: ${({ theme }) => theme.spacing(2)};
`;

const Input = styled.input`
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
`;

export default function CreditCardDemo() {
    const [number, setNumber] = useState("");
    
    return (
        <Wrapper>
            <Cards number={number} name="Aleksandr" expiry="11/25" cvc="123" />
            <Input
            type="text"
            placeholder="Enter your number card"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            />
        </Wrapper>
    );
}
