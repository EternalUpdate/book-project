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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShelfView from "./Shared/ShelfView";

export const App = () => (
    <Router>
        
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Heading as="h1" mt="2rem">
                Book Project
            </Heading>
            <Grid minH="100vh" p={3}>
            <Routes>
                <Route path="/" element={<>     
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <ShelfView />
                    </>}>
                </Route>
                
            </Routes>
                
                
            </Grid>
        </Box>
    </ChakraProvider>
    
    </Router>
);
