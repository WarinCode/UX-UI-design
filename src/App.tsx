import { ReactElement, FC } from "react";
import Card from "./components/Card";
import AllComponentsProps from "./types";

const App: FC<AllComponentsProps.AppProps<HTMLElement>> = (
  props: AllComponentsProps.AppProps<HTMLElement>
): ReactElement<HTMLElement> => {
  return (
    <main {...props}>
      <Card id="cardContainer" />
    </main>
  );
};

export default App;
