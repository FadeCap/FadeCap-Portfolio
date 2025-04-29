module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Specify paths to all of your components so Tailwind can tree-shake unused styles
  ],
  theme: {
    extend: {
      colors: {
        base: "#1e1e2e", // Base background color
        mantle: "#292c3c", // Darker shade for the header
        lavender: "#a78bfa", // Light purple for headings, etc.
        rosewater: "#f4dbd6", // Soft pink for text
        green: "#c0e8d5", // Light green for hover effects
        surface0: "#2c2f3b", // Slightly lighter background for sections
        overlay0: "#a0a3b1", // Lighter grayish text
        overlay1: "#707385", // Darker gray text for subtle contrast
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)", // Card shadow
        "card-hover": "0 4px 10px rgba(0, 0, 0, 0.2)", // Hover effect shadow
      },
    },
  },
  plugins: [],
}

