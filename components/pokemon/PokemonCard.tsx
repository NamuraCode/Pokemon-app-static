import { SmallPokemon } from "@/interfaces";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCart = ({ pokemon }: Props) => {
  const res = useRouter()
  const redirect = ()=>{
    res.push(`pokemon/${pokemon.id}`)
  }
  return (
    <Card
      shadow="sm"
      key={pokemon.id}
      isPressable
      onPress={redirect}
    >
      <CardBody className="flex items-center">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={pokemon.name}
          className="w-full object-contain h-[140px]"
          src={pokemon.img}
        />
      </CardBody>
      <CardFooter className="flex items-center text-small justify-between">
        <b className="text-default-500">{pokemon.name}</b>
        <p className="text-default-500">{pokemon.id}</p>
        <Link href={pokemon.url} target="blank" className="text-default-500">
          go to {pokemon.name}
        </Link>
      </CardFooter>
    </Card>
  );
};
