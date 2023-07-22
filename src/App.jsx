import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Posts from './components/Posts/Posts';
function App() {
  return (
    <div>
      <div class='flex flex-row flex-wrap justify-between mx-5'>
        <div class='md:basis-1/6 h-screen'>
          <Sidebar />
        </div>
        <div class='md:basis-4/6 mt-20 justify-center flex '>
          <Posts />
        </div>
        <div class='md:basis-1/6 '>
          <h1>Hammad Ahmad</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
