import { Route, Routes } from "react-router-dom";

import routes from "./routes";

function RouteComponent() {

  function renderRouteItem(route, index) {

    const routeItemProperties = {
      key: index,
      path: route.path,
      element: route.component
    };

    return <Route {...routeItemProperties} />;

  }

  return (
    <Routes>
      {routes.map((route, index) => (
        renderRouteItem(route, index)
      ))}
    </Routes>
  );
}

export default RouteComponent;