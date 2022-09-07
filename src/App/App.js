import { Routes, Route, Link } from "react-router-dom";

import { 
  Resume,
  Portfolio,
} from '@Pages';

/**
 * App
 * 
 * @returns 
 */
const App = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
