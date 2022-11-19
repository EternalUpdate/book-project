import React from "react";
import { Box, Heading, Stack, Button } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import ShelfView from "../Shared/ShelfView";

export default function MyBooks() {
    return (
        <Box textAlign="center" fontSize="xl">
            <Heading as="h1" mt="2rem">
                Book Project
            </Heading>
            <Stack direction="row" justify="right" p="1rem">
                <Button maxWidth="10rem" justifySelf="flex-end">
                    Add Book
                </Button>
                <ColorModeSwitcher justifySelf="flex-end" />
            </Stack>
            <ShelfView />
        </Box>
    );
}
