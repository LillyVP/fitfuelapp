import React, { useState } from 'react';
import './App.css';
import CalorieChart from './CalorieChart';

function App() {
  const [calories, setCalories] = useState('');
  const [meals, setMeals] = useState([]);

  const logMeal = () => {
    const value = parseInt(calories);
    if (!isNaN(value)) {
      setMeals([...meals, value]);
      setCalories('');
    }
  };

  const clearMeals = () => setMeals([]);
  const removeLast = () => setMeals(meals.slice(0, -1));

  return (
    <div className="App">
      <h1>Lillian FitFuelApp</h1>
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Enter meal calories"
      />
      <div>
        <button onClick={logMeal}>Log Meal</button>
        <button onClick={removeLast}>Undo Last</button>
        <button onClick={clearMeals}>Clear All</button>
      </div>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>Meal {index + 1}: {meal} cal</li>
        ))}
      </ul>
      <CalorieChart meals={meals} />
    </div>
  );
}

export default App;
