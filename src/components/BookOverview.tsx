import React from "react";
import { Book } from "../types/Book";
import { shelfNames } from "../components/Shelf";
import { Link, useLocation } from "react-router-dom";
import { Image, Heading, Text, Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// import "./BookOverview.css";

type Props = {
    id: number;
    shelfName: string;
    books: Book[];
};

function BookOverview() {
    const location = useLocation();
    const book = location.state;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <Flex direction="column" alignItems="center" p="1rem">
            <Heading as="h1">Book Details</Heading>
            <Flex direction="row" m="4rem">
                <Image
                    src={book.bookInfo.cover_url}
                    maxHeight="sm"
                    boxShadow="dark-lg"
                    alt="image"
                    className="img"
                />
                <Box
                    className="detail"
                    ml="4rem"
                    p="2rem"
                    // bgColor="gray.50"
                    minWidth="2xs"
                >
                    <Heading as="h2" fontSize="3xl" mb="1rem">
                        {book.bookInfo.title}
                    </Heading>
                    <Text>
                        <b>Shelf:</b> {shelfNames[book.userBook.shelf_id]}
                    </Text>
                    <Text>
                        <b>Genre(s):</b> {book.bookInfo.genre}
                    </Text>
                    <Text>
                        <b>Author(s):</b> {book.bookInfo.author}
                    </Text>
                    <Text>
                        <b>Summary:</b> {book.bookInfo.blurb}
                    </Text>
                    <Text>
                        <b>Rating:</b> {book.userBook.rating}
                    </Text>
                    <Text>
                        <b>Review:</b> {book.userBook.review}
                    </Text>
                </Box>
            </Flex>
            <Button
                onClick={goBack}
                className="back-button"
                justifySelf="right"
            >
                &larr; Go Back
            </Button>
        </Flex>
    );
}

export default BookOverview;
