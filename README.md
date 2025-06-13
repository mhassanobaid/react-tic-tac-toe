# 🎮 React Tic Tac Toe

A classic **Tic Tac Toe game** built with **React**, following the official React Docs tutorial. This beginner-friendly project showcases fundamental concepts like **components**, **props**, **state management**, and **time travel (undo/redo)** through a clean and interactive game interface.

## 🚀 Live Demo

👉 [Play the Game on CodeSandbox](https://codesandbox.io/p/sandbox/react-dev-forked-lpwysx)

---

## 🧠 What I Learned

This project helped me grasp core React concepts practically:

### 1. 📦 Component-Based Architecture
- Built modular components: `Square`, `Board`, `Game`
- Encourages reuse and clean UI separation

### 2. 🔁 Unidirectional Data Flow & Props
- Passed data and functions from parent (`Game`) to children (`Board`, `Square`)
- Practiced **lifting state up** to manage shared state

### 3. ⚙️ State Management with `useState`
- Tracked current player and board state using `useState`
- Ensured updates triggered proper re-renders

### 4. 🧊 Immutability & Time Travel
- Implemented undo/redo functionality using immutable state history
- Practiced using `.slice()` to maintain pure and trackable state

### 5. 🧮 Pure Functions
- Created a reusable `calculateWinner()` function for game logic

---

## 🛠️ Getting Started

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/mhassanobaid/react-tic-tac-toe.git
   cd react-tic-tac-toe
