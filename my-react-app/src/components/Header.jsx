import styled from "styled-components";
import { FaReact } from "react-icons/fa";

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: ${({ theme }) => theme.spacing(2)};
    background: ${({ theme })=> theme.colors.primary};
    color: #fff;
    font-size: 1.5rem;
`;

export default function Header() {
    return (
        <Wrapper>
            <FaReact />
            <span>React Demo</span>
        </Wrapper>
    );
}
