import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense, lazy } from 'react';
import About from './components/pages/about/about';
import AboutMe from './components/pages/aboutMe/aboutMe';
const HomePage = lazy(() => import("./components/pages/homepage/homepage"));
const Layout = lazy(() => import("./components/layout/layout"));


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>loading...</div>}><Layout /></Suspense>}>
          <Route index element={<Suspense fallback={<div>loading...</div>}><HomePage /></Suspense>} />
          <Route path="/about" elemetn={<Suspense fallback={<div>loading...</div>}><About /></Suspense>}/>
          <Route path="/aboutMe" elemetn={<Suspense fallback={<div>loading...</div>}><AboutMe /></Suspense>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
