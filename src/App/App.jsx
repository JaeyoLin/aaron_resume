import { Routes, Route } from 'react-router-dom';

import {
  Resume,
  Portfolio,
} from '@Pages';

const App = () => {
  return (
    <div className="min-h-screen text-ink">
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default App;
