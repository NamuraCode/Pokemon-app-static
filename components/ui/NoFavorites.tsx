import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
  <>
     <Card className="py-4 bg-transparent w-full h-screen flex items-center justify-center">
      <CardHeader className="self-center">
        <h2 className="font-bold text-large">No Favorites</h2>
      </CardHeader>
      <CardBody className="self-center">
        <Image
          alt="dont-find-pokemon"
          className="object-cover rounded-xl"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
          width={270}
          height={270}
          style={{
            opacity: 0.1
          }}
        />
      </CardBody>
    </Card>
  </>);
};
