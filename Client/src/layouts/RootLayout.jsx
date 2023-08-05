import { Outlet, NavLink } from "react-router-dom";

export const RootLayer = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>User-Sector</h1>
          <NavLink to="/">View Users</NavLink>
          <NavLink to="create">Create User</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
