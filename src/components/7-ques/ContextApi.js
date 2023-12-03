import React, { createContext, useContext, useState } from 'react';

// Create a context
const ThemeContext = createContext();

// Provider component that provides the context
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const contextValue = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Component that uses the context
function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// Component that uses the context
function ThemeDisplay() {
  const { theme } = useContext(ThemeContext);

  return <p>Theme displayed: {theme}</p>;
}

// App component that wraps components in the provider
function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>React Context API Example</h1>
        <ThemeToggler />
        <ThemeDisplay />
      </div>
    </ThemeProvider>
  );
}

export default App;
