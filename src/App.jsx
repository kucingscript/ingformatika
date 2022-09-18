import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Beranda from "./components/Beranda";
import ScrollTop from "./components/ScrollTop";

const Komentar = lazy(() => import("./components/Komentar"));
const Stack = lazy(() => import("./components/Stack"));
const Request = lazy(() => import("./components/Request"));

function App() {
  return (
    <>
      <Navbar />
      <Beranda />
      <ScrollTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Komentar />
        <Stack />
        <Request />
      </Suspense>
    </>
  );
}

export default App;
