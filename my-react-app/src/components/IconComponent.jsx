import { FaBell, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import styled from "styled-components";

const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${({ theme }) => theme.spacing(3)} 0;
    gap: ${({ theme }) => theme.spacing(2)};
`;

const IconButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    transition: all 0.25s ease;
    font-size: 1.2rem;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
        background: ${({ theme }) => theme.colors.primary};
        color: #ffffff;
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
    }
`;

export default function IconComponent() {
    return (
        <IconsWrapper>
            <IconButton title="Notification">
                <FaBell />
            </IconButton>

            <IconButton title="Cart">
                <FaShoppingCart />
            </IconButton>

            <IconButton title="Profile">
                <FaUserAlt />
            </IconButton>
        </IconsWrapper>
    );
}
