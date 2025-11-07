import { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const Card = styled.div`
  width: 320px;
  height: 200px;
  border-radius: 16px;
  background: linear-gradient(135deg, #4e9cff, #ff9f43);
  color: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  padding: ${({ theme }) => theme.spacing(3)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Courier New", monospace;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  }
`;

const Number = styled.div`
  letter-spacing: 2px;
  font-size: 1.2rem;
`;

const Holder = styled.div`
  font-size: 0.9rem;
  opacity: 0.85;
`;

const Expiry = styled.div`
  font-size: 0.9rem;
  opacity: 0.85;
  text-align: right;
`;

const Input = styled.input`
  width: 260px;
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  text-align: center;
`;

export default function CreditCardDemo() {
  const [number, setNumber] = useState("");
  const formatNumber = (val) =>
    val
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .slice(0, 19);

  return (
    <CardContainer>
      <Card>
        <div>
          <Number>{formatNumber(number) || "•••• •••• •••• ••••"}</Number>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Holder>CARDHOLDER</Holder>
          <Expiry>12/26</Expiry>
        </div>
      </Card>
      <Input
        type="text"
        placeholder="Enter card number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </CardContainer>
  );
}