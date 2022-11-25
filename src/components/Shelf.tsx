import { Stack, Image, Heading, Box, Flex } from "@chakra-ui/react";
import React, { ReactElement, useEffect, useState } from "react";
import { Book } from "../types/Book";
import { Link } from "react-router-dom";

type Props = {
    shelfID: number;
    userID: string;
    shelfName: string;
};

function renderBooks(books: Book[], shelfID: number): ReactElement[] {
    const elements = Array<ReactElement>();

    for (const book of books) {
        console.log(book);
        if (book.userBook.shelf_id === shelfID) {
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
        }
    }

    return elements;
}

export default function Shelf({ shelfID, userID, shelfName }: Props) {
    const [shelfBooks, setShelfBooks] = useState<Book[]>([]);

    useEffect(() => {
        // get the userBooks when the shelf loads
        let books: Book[] = [];

        let requestOptions: RequestInit = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            `http://localhost:8000/users/${userID}/shelves/${shelfID}`,
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
                            user_id: userID,
                            shelf_id: shelfID,
                            pages_read: 0,
                            rating: 0,
                            review: "",
                        },
                    };

                    books.push(newBook);
                }

                setShelfBooks(books);
            })
            .catch((error) => console.log("error", error));
    }, [shelfID, userID]);

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
                {renderBooks(shelfBooks, shelfID)}
            </Stack>
        </Box>
    );
}
