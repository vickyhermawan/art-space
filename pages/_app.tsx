import React from "react";
import { AppProps } from 'next/app';
import { Global } from "@emotion/react"
import {ChakraProvider,extendTheme} from "@chakra-ui/react";
import fonts from '../lib/Font';
import '../styles/globals.css';

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
