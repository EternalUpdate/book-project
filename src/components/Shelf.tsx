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
                        maxWidth="9rem"
                        objectFit="cover"
                        shadow="dark-lg"
                        src={book.bookInfo.cover_url}
                    />
                </Link>
            );
            getUserBooks(shelfId, "1234");
        }
    }

    return elements;
}

function getUserBooks(shelfId: number, userId: string): Book[] {
    let books: Book[] = [];

    let requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow",
    };

    fetch(
        `http://localhost:8000/users/${userId}/shelves/${shelfId}`,
        requestOptions
    )
        .then((response) => response.json())
        .then((result) => {
            for (const book of result) {
                let newBook: Book = {
                    isbn: book.isbn,
                    bookInfo: {
                        title: book.title,
                        year: 0,
                        blurb: "",
                        cover_url: book.cover_url,
                        page_no: 0,
                        author: "",
                        publisher: "",
                        genre: [],
                    },
                    userBook: {
                        user_id: userId,
                        shelf_id: shelfId,
                        pages_read: 0,
                        rating: 0,
                        review: "",
                    },
                };

                books.push(newBook);
            }
        })
        .catch((error) => console.log("error", error));

    console.log(books);

    return books;
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
            <Stack direction={"row"} overflow="scroll" maxWidth="90vw">
                {renderBooks(books, id)}
            </Stack>
        </Box>
    );
}
