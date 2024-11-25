import { ConfigProvider as AntProvider } from "antd";
import { Suspense } from "react";
import Loading from "./components/loading";
import "./i18n";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";
import { supportedLngs } from "./constants";
import NotFound from "./pages/404";
import Layout from "./components/layouts/layout";
import { useTranslation } from "react-i18next";
import Landing from "@layouts/landing";
import Contact from "@layouts/contact";
import NewsLayout from "@layouts/news";
import Projects from "@layouts/projects";
import About from "@layouts/about";
import Complex from "@layouts/complex";

function App() {
  return (
    <>
      <AntProvider
        theme={{
          token: {
            colorPrimary: "#234192",
          },
        }}
      >
        <Suspense fallback={<Loading />}>
          <RouterProvider router={Routes()} />
        </Suspense>
      </AntProvider>
    </>
  );
}
function LangWrapper() {
  const { lang } = useParams();
  return lang && supportedLngs.includes(lang) ? <Outlet /> : <NotFound />;
}

function Routes() {
  const { i18n } = useTranslation();
  const routes = createBrowserRouter([
    {
      path: "/:lang",
      element: <LangWrapper />,
      children: [
        {
          path: "",
          element: <Layout />,
          children: [
            { path: "", element: <Landing /> },
            { path: "projects", element: <Projects /> },
            { path: "contact-us", element: <Contact /> },
            {
              path: "news",
              element: <NewsLayout />,
            },
            { path: "about", element: <About /> },
            { path: "complex", element: <Complex /> },
          ],
        },
      ],
    },
    { path: "", element: <Navigate to={`/${i18n.language}`} /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
}

export default App;
