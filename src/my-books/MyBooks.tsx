import React from "react";
import { Box, Heading, Stack, Button } from "@chakra-ui/react";
import ShelfView from "../Shared/ShelfView";
import AddBookModal from "../components/AddBookModal";

// MyBooks page that containg component of shelf and eventually all shelves will be rendered
export default function MyBooks() {
    return (
        <Box textAlign="center" fontSize="xl" pt="2rem" pb="2rem">
            <Heading as="h1">Book Project</Heading>
            <Stack direction="row" justify="right" p="1rem">
                <AddBookModal />
            </Stack>
            <ShelfView />
        </Box>
    );
}
