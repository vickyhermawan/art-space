import React from "react";
import { Button,useColorMode } from "@chakra-ui/react";
import { useRouter } from 'next/router';

const MenuItems: React.FC = ({ children }) => {
    const router = useRouter();
    let string = String(children);
    const [color, setColor] = React.useState<string>('')
    const { colorMode } = useColorMode();


    React.useEffect(() => {
        if(colorMode === "light"){
            if(router.asPath === '/' && children === 'Home'){
                setColor("blue.600")
            }else if(router.asPath === `/${string.toLowerCase()}`){
               setColor("blue.600")
            }else{
               setColor("gray.800")
            }
        }else{
            if(router.asPath === '/' && children === 'Home'){
                setColor("blue.200")
            }else if(router.asPath === `/${string.toLowerCase()}`){
               setColor("blue.200")
            }else{
               setColor("white")
            }
        }
    }, [router.asPath,colorMode]);
    
    return (
        <>
            <Button 
                mt={{ base: 5, md: 0 }} 
                mr={6} 
                display="block" 
                size="xs" 
                backgroundColor="transparent" 
                onClick={()=> router.push(string.toLowerCase())}
                color={color}
                aria-label="button-header"
            >
                {children}
            </Button>
        </>
    );
};

export default MenuItems;