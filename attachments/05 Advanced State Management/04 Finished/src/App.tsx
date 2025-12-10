import { AddTimer } from "./components/AddTimer.tsx";
import { Header } from "./components/Header.tsx";
import { Timers } from "./components/Timers.tsx";
import { TimersContextProvider } from "./store/timers-context.tsx";

export const App = () => {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
};
