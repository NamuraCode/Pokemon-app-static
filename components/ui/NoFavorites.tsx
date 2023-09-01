import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
  <>
     <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">No Favorites</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
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
