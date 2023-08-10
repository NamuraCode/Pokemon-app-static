import { Layout } from "@/components/layouts";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <Layout title="Listado de pokemons"> 
        <h1 className="">Next.js + TypeScript</h1>
        <Button color="danger">Click me</Button>
    </Layout>
  );
}
