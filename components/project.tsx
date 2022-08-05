import { Box, SlideFade } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
export default function Project({ text, ...props }) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        ref.current.addEventListener("mouseenter", () => setIsOpen(true))
        ref.current.addEventListener("mouseleave", () => setIsOpen(false))
    }, []);

    return (
        <Box{...props}
            w="full"
            h="200px"
            _hover={{ background: "rgba(0,0,0,0.2)" }}
        >
            <SlideFade in={isOpen} offsetY='20px'>
                <Box
                    {...props}
                    ref={ref}
                    p='120px'
                    color='white'
                    mt='4'
                    bg='teal.500'
                    rounded='md'
                    shadow='md'
                >
                    {text}
                </Box>
            </SlideFade>
        </Box>
    );
}