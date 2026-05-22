import { Routes, Route } from 'react-router-dom';

import { Resume } from '@Pages';

const App = () => {
  return (
    <div className="min-h-screen text-ink">
      <Routes>
        <Route path="/" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
