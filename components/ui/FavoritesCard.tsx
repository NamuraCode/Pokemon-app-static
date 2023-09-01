import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  id: number;
}

const router = useRouter();
const goPokemon = (id: number) => {
  router.push(`/pokemon/${id}`);
};

export const FavoritesCard = ({ id }: Props) => {
  return (
    <Card shadow="sm" key={id} isPressable onPress={() => goPokemon(id)}>
      <CardHeader></CardHeader>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width={250}
          height={250}
          className="w-full object-contain h-[140px]"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        />
      </CardBody>
    </Card>
  );
};
