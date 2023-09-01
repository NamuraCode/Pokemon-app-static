import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  id: number;
}


export const FavoritesCard = ({ id }: Props) => {
    const router = useRouter();
    const goPokemon = () => {
      router.push(`/pokemon/${id}`);
    };

    return (
    <Card shadow="sm" key={id} isPressable onPress={goPokemon}>
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
