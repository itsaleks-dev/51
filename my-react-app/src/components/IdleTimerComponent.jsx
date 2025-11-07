import { useState, useEffect } from "react";
import { useIdleTimer } from "react-idle-timer";
import { toast } from "react-toastify";

import styled from "styled-components";

const Box = styled.div`
    padding: ${({ theme }) => theme.spacing(2)};
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.bg};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const Button = styled.button`
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(3)};
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
  `;

export default function IdleTimerComponent() {
  const [remaining, setRemaining] = useState(0);
  const timeout = 10000;

  const onIdle = () => toast.warning("You have been inactive for more than 10 seconds!");
  const onActive = () => setRemaining(timeout);

  const { getRemainingTime, reset } = useIdleTimer({
    timeout,
    onIdle,
    onActive,
    throttle: 500,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(getRemainingTime());
    }, 500);

    return () => clearInterval(interval);
  }, [getRemainingTime]);

  return (
    <Box>
      <p>Inactivity: {Math.ceil(remaining / 1000)} sec</p>
      <Button onClick={reset}>Reset the timer</Button>
    </Box>
  );
}