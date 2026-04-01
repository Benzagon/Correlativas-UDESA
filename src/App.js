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
            url={"https://udesa.edu.ar/diseno?utm_source=google&utm_medium=dise%C3%B1o%20udesa&utm_campaign=GSGD0_LDK_UDESA_AR_SC_PROD_X_DISE%C3%91O_LEAD_GRADO&utm_content=GSGD0_Brand&keyword=dise%C3%B1o%20udesa&device=c&accountid=6124370329&gad_source=1&gad_campaignid=1465565459&gbraid=0AAAAADP4wlOQ3NdI6zr2mvXEfApyyRTSm&gclid=CjwKCAjwhLPOBhBiEiwA8_wJHEVIZJTjkdyjeR0UEMz-rigColuAEHGHIfXD_Wt2vfxlFvxfm8ef6BoCD5UQAvD_BwE"}
        />} />
      </Routes>
    </div>
  );
}

export default App;
