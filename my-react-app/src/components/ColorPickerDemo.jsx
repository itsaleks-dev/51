import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing(4)};
    gap: ${({ theme }) => theme.spacing(2)};
`;

const Box = styled.div`
    width: 120px;
    height: 120px;
    border: 1px solid #ccc;
    border-radius: 12px;
    background: ${({ color }) => color};
`;

export default function ColorPickerDemo() {
    const [color, setColor] = useState("#4e9cff");

    return (
        <Wrapper>
            <HexColorPicker color={color} onChange={setColor} />
            <Box color={color} />
        </Wrapper>
    );
}
