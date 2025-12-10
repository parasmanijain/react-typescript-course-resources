import { Button } from "./components/Button.tsx";
import { Container } from "./components/Container.tsx";

export const App = () => {
  return (
    <main>
      <Container as={Button} />
    </main>
  );
};