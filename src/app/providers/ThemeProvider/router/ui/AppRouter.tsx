import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export function AppRouter() {
  <Suspense fallback={<div>Laoding...</div>}>
    <Routes>
      {Object.values(routeConfig).map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  </Suspense>;
}