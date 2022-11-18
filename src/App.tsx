import * as React from "react";
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Heading,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Shelf from "./components/Shelf";
import { testBooks } from "./types/Book";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Heading as="h1" mt="2rem">
                Book Project
            </Heading>
            <Grid minH="100vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack spacing={3}>
                    <Shelf id={1} shelfName="To Read" books={testBooks} />
                    <Shelf id={2} shelfName="Reading" books={testBooks} />
                    <Shelf id={3} shelfName="Finished" books={testBooks} />
                    <Shelf id={4} shelfName="Want to Read" books={testBooks} />
                    <Shelf id={5} shelfName="Favorites" books={testBooks} />
                    <Shelf id={6} shelfName="Recommended" books={testBooks} />
                </VStack>
            </Grid>
        </Box>
    </ChakraProvider>
);
