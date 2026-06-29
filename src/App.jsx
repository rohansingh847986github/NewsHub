// import "./App.css";
// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

// import Navbar from "./components/Navbar";
// import News from "./components/News";

// function App() {
//   const [progress, setProgress] = useState(0);

//   const apiKey = import.meta.env.VITE_NEWS_API;
//   console.log("API KEY:", apiKey);

//   const pageSize = 6;

//   return (
//     <>
//       <LoadingBar
//         color="#f11946"
//         progress={progress}
//         height={3}
//         onLoaderFinished={() => setProgress(0)}
//       />

//       <Navbar />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <News
//               key="general"
//               setProgress={setProgress}
//               apiKey={apiKey}
//               pageSize={pageSize}
//               country="in"
//               category="general"
//             />
//           }
//         />

//         <Route
//           path="/business"
//           element={
//             <News
//               key="business"
//               setProgress={setProgress}
//               apiKey={apiKey}
//               pageSize={pageSize}
//               country="in"
//               category="business"
//             />
//           }
//         />

//         <Route
//           path="/entertainment"
//           element={
//             <News
//               key="entertainment"
//               setProgress={setProgress}
//               apiKey={apiKey}
//               pageSize={pageSize}
//               country="in"
//               category="entertainment"
//             />
//           }
//         />

//         <Route
//           path="/health"
//           element={
//             <News
//               key="health"
//               setProgress={setProgress}
//               apiKey={apiKey}
//               pageSize={pageSize}
//               country="in"
//               category="health"
//             />
//           }
//         />

//         <Route
//           path="/science"
//           element={
//             <News
//               key="science"
//               setProgress={setProgress}
//               apiKey={apiKey}
//               pageSize={pageSize}
//               country="in"
//               category="science"
//             />
//           }
//         />

//         <Route
//           path="/sports"
//           element={
//             <News
//               key="sports"
//               setProgress={setProgress}
//               apiKey={apiKey}
//               pageSize={pageSize}
//               country="in"
//               category="sports"
//             />
//           }
//         />

//         <Route
//           path="/technology"
//           element={
//             <News
//               key="technology"
//               setProgress={setProgress}
//               apiKey={apiKey}
//               pageSize={pageSize}
//               country="in"
//               category="technology"
//             />
//           }
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;

// import "./App.css";
// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

// import Navbar from "./components/Navbar";
// import News from "./components/News";

// function App() {
//   const [progress, setProgress] = useState(0);

//   const apiKey = import.meta.env.VITE_NEWSDATA_IO_API;

//   const pageSize = 6;

//   console.log("GNews API:", apiKey);

//   return (
//     <>
//       <LoadingBar
//         color="#2563eb"
//         progress={progress}
//         height={3}
//         onLoaderFinished={() => setProgress(0)}
//       />

//       <Navbar />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <News
//               key="general"
//               setProgress={setProgress}
//               apiKey={apiKey}
//               pageSize={pageSize}
//               category="general"
//             />
//           }
//         />

//         <Route
//           path="/business"
//           element={
//             <News
//               key="business"
//               setProgress={setProgress}
//               apiKey={apiKey}
//               pageSize={pageSize}
//               category="business"
//             />
//           }
//         />

//         <Route
//           path="/entertainment"
//           element={
//             <News
//               key="entertainment"
//               setProgress={setProgress}
//               apiKey={apiKey}
//               pageSize={pageSize}
//               category="entertainment"
//             />
//           }
//         />

//         <Route
//           path="/health"
//           element={
//             <News
//               key="health"
//               setProgress={setProgress}
//               apiKey={apiKey}
//               pageSize={pageSize}
//               category="health"
//             />
//           }
//         />

//         <Route
//           path="/science"
//           element={
//             <News
//               key="science"
//               setProgress={setProgress}
//               apiKey={apiKey}
//               pageSize={pageSize}
//               category="science"
//             />
//           }
//         />

//         <Route
//           path="/sports"
//           element={
//             <News
//               key="sports"
//               setProgress={setProgress}
//               apiKey={apiKey}
//               pageSize={pageSize}
//               category="sports"
//             />
//           }
//         />

//         <Route
//           path="/technology"
//           element={
//             <News
//               key="technology"
//               setProgress={setProgress}
//               apiKey={apiKey}
//               pageSize={pageSize}
//               category="technology"
//             />
//           }
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;

import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [progress, setProgress] = useState(0);

  // NewsData.io API Key
  const apiKey = import.meta.env.VITE_NEWSDATA_IO_API;

  console.log("NewsData API:", apiKey);

  if (!apiKey) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl font-bold">
        API Key not found. Check your .env file.
      </div>
    );
  }

  const pageSize = 6;

  return (
    <>
      <LoadingBar
        color="#2563eb"
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
              key="top"
              category="world"
              pageSize={pageSize}
              apiKey={apiKey}
              setProgress={setProgress}
            />
          }
        />

        <Route
          path="/business"
          element={
            <News
              key="business"
              category="business"
              pageSize={pageSize}
              apiKey={apiKey}
              setProgress={setProgress}
            />
          }
        />

        <Route
          path="/entertainment"
          element={
            <News
              key="entertainment"
              category="entertainment"
              pageSize={pageSize}
              apiKey={apiKey}
              setProgress={setProgress}
            />
          }
        />

        <Route
          path="/health"
          element={
            <News
              key="health"
              category="health"
              pageSize={pageSize}
              apiKey={apiKey}
              setProgress={setProgress}
            />
          }
        />

        <Route
          path="/science"
          element={
            <News
              key="science"
              category="science"
              pageSize={pageSize}
              apiKey={apiKey}
              setProgress={setProgress}
            />
          }
        />

        <Route
          path="/sports"
          element={
            <News
              key="sports"
              category="sports"
              pageSize={pageSize}
              apiKey={apiKey}
              setProgress={setProgress}
            />
          }
        />

        <Route
          path="/technology"
          element={
            <News
              key="technology"
              category="technology"
              pageSize={pageSize}
              apiKey={apiKey}
              setProgress={setProgress}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
