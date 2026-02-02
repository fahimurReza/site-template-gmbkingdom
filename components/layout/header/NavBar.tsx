import Logo from "../../common/Logo";
import Navigation from "./Navigation";
import QuoteButton from "./QuoteButton";

const NavBar = () => {
  return (
    <main className="base-padding h-16 flex items-center">
      <div className="flex justify-between w-full items-center">
        <a href="/">
          <Logo />
        </a>
        <div className="flex items-center gap-6">
          <Navigation />
          <QuoteButton />
        </div>
      </div>
    </main>
  );
};

export default NavBar;
