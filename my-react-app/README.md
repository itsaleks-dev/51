## React Demo App

A training project created to demonstrate working with popular React libraries and a custom interface based on **styled-components**.

## Project goal

This application shows how to integrate modern React libraries into a Vite project  
while creating your own interactive components without external dependencies.

## Technologies used

**React 19 + Vite** | Modern development environment for SPA |
**styled-components** | Styling components via CSS-in-JS |
**React Toastify** | Displaying notifications (success, error, warning) |
**React Idle Timer** | Tracking user inactivity |
**React Icons** | Using popular icons (Font Awesome) |
**React Colorful** | Real-time color selection |
**Custom Credit Card Component** | Custom card implementation without external libraries |

## Structure project

my-react-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── IconComponent.jsx
│   │   ├── ToastNotification.jsx
│   │   ├── IdleTimerComponent.jsx
│   │   ├── CreditCardDemo.jsx
│   │   └── ColorPickerDemo.jsx
│   ├── styles/
│   │   ├── GlobalStyle.js
│   │   └── theme.js

## Installation and launch

Cloning a repository
git clone https: https://github.com/itsaleks-dev/51
cd my-react-app
npm install
npm run dev
npm run build

## Demonstration of functionality

**Idle Timer**
Tracks user inactivity (displays a warning after 10 seconds).
Features a visual timer and a reset button.

**Icons**
Use of icons from react-icons/fa (React, Bell, User, Cart).

**Credit Card**

Interactive card with number input —
created by hand using styled-components, without external libraries.

**Color Picker**

Demonstration of the react-colorful library for color selection.

**Toastify**

Displays messages of types success, error, warning.

## Demo
https://51-gamma.vercel.app
