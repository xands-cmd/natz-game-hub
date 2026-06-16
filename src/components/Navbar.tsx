import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchGames from "./SearchGames";

interface Props {
  onSearch: (searchGame: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="2rem">
      <Image src={logo} boxSize="60px" />
      <SearchGames onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
