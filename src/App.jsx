import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense, lazy } from 'react';
const HomePage = lazy(() => import("./components/pages/homepage/homepage"));
const Layout = lazy(() => import("./components/layout/layout"));


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>loading...</div>}><Layout /></Suspense>}>
          <Route index element={<Suspense fallback={<div>loading...</div>}><HomePage /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
