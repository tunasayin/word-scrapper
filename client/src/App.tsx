import { FC, ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Main from "./components/pages/Main";
import Search from "./components/pages/Search";
import PageNotFound from "./components/pages/PageNotFound";

const App: FC = (): ReactElement => {
  return (
    <div className="ws-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Navigate to="/" />} />
          <Route path="/search/:word" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
