import React from "react";
import { Button,useColorMode } from "@chakra-ui/react";
import { useRouter } from 'next/router';

const MenuItems: React.FC = ({ children }) => {
    const router = useRouter();
    let string = String(children);
    const [color, setColor] = React.useState<string>('')
    const { colorMode, toggleColorMode } = useColorMode();


    React.useEffect(() => {
        if(colorMode === "light"){
            if(router.asPath === '/' && children === 'Home'){
                setColor("teal")
            }else if(router.asPath === `/${string.toLowerCase()}`){
               setColor("teal")
            }else{
               setColor("gray.800")
            }
        }else{
            if(router.asPath === '/' && children === 'Home'){
                setColor("green.400")
            }else if(router.asPath === `/${string.toLowerCase()}`){
               setColor("green.400")
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
            >
                {children}
            </Button>
        </>
    );
};

export default MenuItems;