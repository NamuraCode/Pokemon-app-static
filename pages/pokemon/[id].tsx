import { Layout } from "@/components/layouts";

interface Props {
  id: number;
  name: string;
}
export const PokemonPage = ({ id, name }: Props) => {
  return <Layout title={`Pokemon - ${name}`}></Layout>;
};
