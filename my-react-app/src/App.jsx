import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

import { Header } from "./components/Header";
import IconComponent from "./components/IconComponent";
import ToastNotification from "./components/ToastNotification";
import IdleTimerComponent from "./components/IdleTimerComponent";
import CreditCardDemo from "./components/CreditCardDemo";
import ColorPickerDemo from "./components/ColorPickerDemo";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacing(4)};
    gap: ${({ theme }) => theme.spacing(3)};
`;

const Section = styled.section`
    width: 100%;
    max-width: 800px;
    padding: ${({ theme }) => theme.spacing(3)};
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h2`
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Main>
                <Section>
                    <Title>Toastify</Title>
                    <ToastNotification />
                </Section>

                <Section>
                    <Title>Idle Timer</Title>
                    <IdleTimerComponent />
                </Section>

                <Section>
                    <Title>React Icons</Title>
                    <IconComponent />
                </Section>

                <Section>
                    <Title>Credit Cards</Title>
                    <CreditCardDemo />
                </Section>

                <Section>
                    <Title>Color Picker</Title>
                    <ColorPickerDemo />
                </Section>
            </Main>
        </ThemeProvider>
    );
}

export default App;
