# Calculator
# ♟️ Minor Project: Tic-Tac-Toe (Console Game)

A classic two-player Tic-Tac-Toe game implemented entirely in Python with a clean, text-based interface. This project was built to demonstrate fundamental programming concepts, modular design, and algorithmic thinking.

## 🛠️ Tools Used

* **Python:** Used for all game logic, input handling, and console display.

---

## ✨ Project Highlights

This project focused on developing robust logic and a maintainable code structure:

* **Modular Code Structure:** The game logic is divided into distinct, reusable functions for greater **modularity** and **maintainability**.
    * `display_board()`: Handles the rendering of the board in the console.
    * `check_win()`: Implements the core **algorithmic thinking** to evaluate all eight possible winning conditions (rows, columns, diagonals).
    * `get_player_choice()`: Manages **user input handling**, including validation to ensure players only choose empty spots within the range 1-9.
* **Real-Time Interaction:** The game loop manages turns, updates the board after every move, and immediately checks for win or tie conditions, providing **real-time user interaction**.
* **Text-Based Interface:** The board layout is displayed using ASCII characters, mapping positions to the familiar 1-9 keypad layout for intuitive play.

---

## 🚀 How to Run the Game

1.  **Save:** Save the Python code as `tic_tac_toe.py`.
2.  **Run:** Open your terminal or command prompt and execute the following command:
    ```bash
    python tic_tac_toe.py
    ```
3.  **Play:** Follow the console prompts. Players 'X' and 'O' will take turns entering a number (1-9) corresponding to the desired position on the board.

---

## 📁 File Structure
