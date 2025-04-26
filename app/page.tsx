import { Theme } from "@radix-ui/themes";
import Chat from "./Chat";
import Nav from "./Nav";

export default function Home() {
  return (
    <div>
      <Theme radius="medium">
        <Nav />
        <Chat />
      </Theme>
    </div>
  );
}
