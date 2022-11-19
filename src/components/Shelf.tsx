import { Stack, Image, Heading, Box, Button, Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Book, testBooks } from "../types/Book";
import { Link } from "react-router-dom";

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
                <Link to="/OverView" state={book}>
                    <Image
                        boxSize="150px"
                        maxWidth="7rem"
                        objectFit="cover"
                        src={book.bookInfo.cover_url}
                    />
                </Link>
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
            </Flex>
            <Stack direction={"row"} overflow="scroll" maxWidth="3xl">
                {renderBooks(books, id)}
            </Stack>
        </Box>
    );
}
