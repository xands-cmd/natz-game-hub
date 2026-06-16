import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchGames from "./SearchGames";

const Navbar = () => {
  return (
    <HStack padding="2rem">
      <Image src={logo} boxSize="60px" />
      <SearchGames />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
