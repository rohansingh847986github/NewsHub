import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [progress, setProgress] = useState(0);

  const apiKey = import.meta.env.VITE_NEWS_API;
  console.log("API KEY:", apiKey);

  const pageSize = 6;

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <News
              key="general"
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />

        <Route
          path="/business"
          element={
            <News
              key="business"
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="business"
            />
          }
        />

        <Route
          path="/entertainment"
          element={
            <News
              key="entertainment"
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          }
        />

        <Route
          path="/health"
          element={
            <News
              key="health"
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        />

        <Route
          path="/science"
          element={
            <News
              key="science"
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        />

        <Route
          path="/sports"
          element={
            <News
              key="sports"
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          }
        />

        <Route
          path="/technology"
          element={
            <News
              key="technology"
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
