import { Spacer } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav
      className={"bg-background2"}
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
      }}
    >
      <Image 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
        alt="iccon about app"
        width={50}
        height={50}
      />
      <h2>P</h2>
      <h3 className="white">okémon</h3>
      <Spacer style={{ flex: 1 }} />

      <p className="red">favorites</p>
    </nav>
  );
};
