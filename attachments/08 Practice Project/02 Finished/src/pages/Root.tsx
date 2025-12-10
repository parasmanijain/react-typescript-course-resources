import { Outlet } from "react-router-dom";
import { MainHeader } from "../components/Navigation/MainHeader.tsx";
import { SessionsContextProvider } from "../store/sessions-context.tsx";

export const Root = () => {
  return (
    <SessionsContextProvider>
      <MainHeader />
      <Outlet />
    </SessionsContextProvider>
  );
};
