import { Input } from "./components/Input";

export const App = () => {
  return (
    <main>
      <Input id="name" label="Your name" />
      <Input id="age" label="Your age" />
    </main>
  );
}