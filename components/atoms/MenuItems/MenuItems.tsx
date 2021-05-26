import React from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from 'next/router';

const MenuItems: React.FC = ({ children }) => {
    const router = useRouter();
    let string = String(children)
    return (
        <>
            <Button mt={{ base: 5, md: 0 }} mr={6} display="block" size="xs" backgroundColor="transparent" onClick={()=> router.push(string.toLowerCase())}>
                {children}
            </Button>
        </>
    );
};

export default MenuItems;