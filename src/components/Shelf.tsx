import { Stack, Image, Heading, Box, Button, Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Book, testBooks } from "../types/Book";

type Props = {
    id: number;
    shelfName: string;
    books: Book[];
};

function renderBooks(books: Book[], shelfId: number): ReactElement[] {
    const elements = Array<ReactElement>();
    for (let book of books) {
        if (book.userBook.shelf_id === shelfId) {
            elements.push(
                <Image
                    boxSize="150px"
                    objectFit="cover"
                    src={book.bookInfo.cover_url}
                />
            );
        }
    }

    return elements;
}

export default function Shelf({ id, shelfName, books }: Props) {
    return (
        <Box
            borderRadius="lg"
            shadow="lg"
            p="1.5rem"
            bgColor="white"
            minWidth="lg"
        >
            <Flex justify="space-between" mb="1.5rem">
                <Heading as="h2" size="md">
                    {shelfName}
                </Heading>
                <Button>View All</Button>
            </Flex>
            <Stack direction={"row"} overflow="scroll">
                {renderBooks(books, id)}
            </Stack>
        </Box>
    );
}
