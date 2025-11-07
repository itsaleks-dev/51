import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import "react-toastify/dist/ReactToastify.css";

const Button = styled.button`
    padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    font-weight: 600;
`;

export default function ToastNotification() {
    const handleClick = () => {
        toast.success("The operation was successful!");
    };
    return (
        <>
        <Button onClick={handleClick}>Show notifications</Button>
        <ToastContainer position="bottom-right" />
        </>
    );
}
