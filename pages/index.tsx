
import Info from "@/components/info";
import Project from "@/components/project";
import { grid, Grid, Image } from "@chakra-ui/react";
export default function Home() {
  return (
    <><header>
      <title>Inicio Portafolio</title>
    </header>
      <Grid placeItems="center" p={3} templateAreas={[
        '"i" "t" "p1" "p2" "p3" "p4" "p5" "p6" "p7" "p8" "p9" "p10"',
        '"i t" "p1 p2" "p3 p4" "p5 p6" "p7 p8" "p9 p10"',
        '"p1 p2 p3 p4" "p5 i t p6" "p7 p8 p9 p10"'
      ]}
        minH="100vh"
      >
        <Image
          borderRadius='full'
          boxSize='300px'
          src='https://assets.puzzlefactory.pl/puzzle/355/785/original.webp'
          alt='Andres Abarzua'
          grid-area="i"
        ></Image>
        <Info />
        <Project icon={null} link={null} text="Proyecto 1" gridArea="p1" />
        <Project icon={null} link={null} text="Proyecto 2" gridArea="p2" />
        <Project icon={null} link={null} text="Proyecto 3" gridArea="p3" />
        <Project icon={null} link={null} text="Proyecto 4" gridArea="p4" />
        <Project icon={null} link={null} text="Proyecto 5" gridArea="p5" />
        <Project icon={null} link={null} text="Proyecto 6" gridArea="p6" />
        <Project icon={null} link={null} text="Proyecto 7" gridArea="p7" />
        <Project icon={null} link={null} text="Proyecto 8" gridArea="p8" />
        <Project icon={null} link={null} text="Proyecto 9" gridArea="p9" />
        <Project icon={null} link={null} text="Proyecto 10" gridArea="p10" />
      </Grid></>
  )
}
