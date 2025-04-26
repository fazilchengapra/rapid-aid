import { Theme } from "@radix-ui/themes";
import Chat from "./Chat";
import Nav from "./Nav";
import Cards from "./Cards";

export default function Home() {
  return (
    <div>
      <Theme radius="medium">
        <Nav />
        <Chat />
        <Cards/>
      </Theme>
    </div>
  );
}
