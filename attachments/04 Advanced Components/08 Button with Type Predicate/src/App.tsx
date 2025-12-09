import { Button } from "./components/Button";

export const App = () => {
  return (
    <main>
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href='https://google.com'>A Link</Button>
      </p>
    </main>
  );
}