# Hello React Component

This project focuses on learning the fundamentals of React by building a simple greeting application. It demonstrates how to create reusable components, pass data through props, and dynamically render UI elements while styling them with Tailwind CSS.
The application dynamically generates greeting cards for multiple users, showing how React components can render lists of data and accept flexible content using props.children.

Features
- Dynamic Greeting Rendering:
Greeting cards are generated from a JavaScript array of users. The component maps through the data and renders a greeting for each user, demonstrating React's declarative rendering approach.
- Reusable React Components:
A dedicated Greeting component encapsulates the UI logic for displaying a greeting message, promoting reusable and maintainable component architecture.
- Props for Data Passing:
User names are passed into the component through props, demonstrating how React components receive and display external data.
- Flexible Content with props.children:
The component accepts additional content through props.children, allowing messages to be inserted dynamically inside each greeting card.
- Tailwind CSS Styling:
The interface uses Tailwind CSS utilities to create modern UI cards with spacing, shadows, rounded corners, and hover animations.
- Interactive Theme Toggle:
A theme toggle button switches between light and dark modes using JavaScript class toggling, demonstrating simple UI state manipulation.
- Responsive Layout:
Tailwind responsive utilities ensure that greeting cards adapt across screen sizes for a clean layout on mobile, tablet, and desktop devices.
- Smooth UI Interactions:
Hover scaling effects and shadow transitions create subtle feedback that improves the user experience.

## Tech Stack

- HTML5
- React
- JavaScript (ES6+)
- Tailwind CSS
- Vite

## Purpose

This project reinforces important frontend engineering concepts:

- Building UI with React function components
- Rendering lists dynamically using map()
- Passing and consuming props in React components
- Using props.children for flexible component composition
- Structuring components for maintainability
- Styling modern interfaces with Tailwind CSS
- Understanding the separation between React rendering and DOM manipulation
- Creating responsive layouts with utility-first CSS

## How to Use

Download the file and run `npm run dev` in the terminal or Tap on the live link associated with this folder