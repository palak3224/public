import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/Components/About";
import App from "../App";
import Team from "@/pages/Team/Team";
import FinanceAndTax from "@/pages/Services/FinanceAndTax/FinanceAndTax";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "services/",
        children : [
          {
            path : "finance-and-tax",
            element : <FinanceAndTax />
          },
        ]
      },
    ],
  },
]);

export default router;
