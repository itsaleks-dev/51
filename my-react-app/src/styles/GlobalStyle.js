import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        font-family: "Inter", sans-serif;
        background-color: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.text};
        transition: background 0.3s ease;
    }

    button {
        border: none;
        cursor: pointer;
    }
`;
