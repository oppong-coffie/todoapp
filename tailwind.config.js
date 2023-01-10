/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "todo": "url('images/todo.jpg')",
        "todo2": "url('images/todo2.jpg')",
      },
      
    },
  },
  plugins: [],
}
