// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import MainMap from './MainMap'; // rename of your flowchart component (was App)
import CoursesPage from './CoursesPage';
import Home from './Home';

import { nodes as disNodes, edges as disEdges, year_labels as disYears } from './courses/diseno';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={
          <Home />
          } />
        <Route path="/diseño" element={
          <CoursesPage
            initialEdges={disEdges}
            initialNodes={disNodes}
            years={disYears}
            url={"https://www.utdt.edu/ver_contenido.php?id_contenido=24484&id_item_menu=40415"}
        />} />
      </Routes>
    </div>
  );
}

export default App;
