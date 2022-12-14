import Class from "../Class";
import Dashboard from "../Dashboard";
import NavBar from "../NavBar";
import NotFound from "../NotFound";
import { ADMIN } from "../vars/roles";
import School from "../School";

const routeDeclartion = () => {
  return [
    {
      path: "/",
      element: NavBar,
      // permissions: [ADMIN],
      children: [
        {
          index: true,
          element: Dashboard,
        },
        {
          path: "school",
          element: School,
          children: [
            {
              path: "class",
              permissions: [ADMIN],
              element: Class,
            },
          ],
        },
        {
          path: "*",
          element: NotFound,
        },
      ],
    },
  ];
};

export default routeDeclartion;
