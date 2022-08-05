import { Heading, HStack, Icon, Link, Text, VStack, Button, Image } from "@chakra-ui/react";
//import { PhoneIcon, AddIcon, WarningIcon, ExternalLinkIcon, EmailIcon } from '@chakra-ui/icons'
//import { text } from "stream/consumers";


export default function Info() {
    return (
        <VStack>
            <Heading>Este es mi portafolio.</Heading>
            <text >Estudiante de Ingenieria en Informatica</text>
            <HStack>

                <Link href="https://github.com/vnnndrew" target="_blank" >
                    <Image
                        borderRadius='full'
                        boxSize='40px'
                        src='https://img2.freepng.es/20180716/tza/kisspng-github-computer-icons-clip-art-gits-5b4d20ab1f4131.145288281531781291128.jpg'
                        alt='Github'
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/andres-ignacio-abarzua-escobar-74090923a/" target="_blank" >
                    <Image
                        borderRadius='full'
                        boxSize='40px'
                        src='https://e7.pngegg.com/pngimages/747/29/png-clipart-linkedin-linkedin.png'
                        alt='Linkedin'
                    ></Image>
                </Link>

            </HStack>
        </VStack>
    )
} 