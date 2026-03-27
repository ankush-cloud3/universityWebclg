import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Departments } from "./pages/Departments";
import { DepartmentDetail } from "./pages/DepartmentDetail";
import { Academics } from "./pages/Academics";
import { Admissions } from "./pages/Admissions";
import { Placements } from "./pages/Placements";
import { Research } from "./pages/Research";
import { CampusLife } from "./pages/CampusLife";
import { Alumni } from "./pages/Alumni";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "departments", Component: Departments },
      { path: "departments/:id", Component: DepartmentDetail },
      { path: "academics", Component: Academics },
      { path: "admissions", Component: Admissions },
      { path: "placements", Component: Placements },
      { path: "research", Component: Research },
      { path: "campus-life", Component: CampusLife },
      { path: "alumni", Component: Alumni },
      { path: "contact", Component: Contact },
    ],
  },
]);
