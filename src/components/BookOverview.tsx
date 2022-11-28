import React from "react";
import { Book } from "../types/Book";
import { shelfNames } from "../components/Shelf";
import { Link, useLocation } from "react-router-dom";
import { Image, Heading, Text, Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";

// import "./BookOverview.css";

type Props = {
    id: number;
    shelfName: string;
    books: Book[];
};

 const shelfIDS: { [key: string]:Number } = {
     "To Read":0,
     "Reading":1,
     "Finished":2,
     "Did Not Finish":3,
     "Favorites":4,
     "Recommended":5,
};



function BookOverview() {
    const location = useLocation();
    const book = location.state;
    const navigate = useNavigate();
    const [edit,setEdit]=useState(false);
    const [currentShelf,setCurrentShelf]=useState(shelfNames[book.userBook.shelf_id])
    const [currentBook,setCurrentBook]=useState(book)
    const [currentUserBook,setCurrentUserBook]=useState(book.userBook)


    const handleEdit = () => {
        setEdit(true);
    };

    const goBack = () => {
        navigate(-1);
    };


    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // do the rest here
        console.log(event.target.value);
        setCurrentShelf(event.target.value); 
        
         
        console.log(shelfIDS[event.target.value]);
        
        setCurrentUserBook({...currentUserBook,shelf_id:shelfIDS[event.target.value]});
        setCurrentBook([{...currentBook, userBook:currentUserBook } ])
        console.log(currentBook)
      }


      useEffect(() => {
        // POST request using fetch inside useEffect React hook
        
        fetch(`https://Localhost:8000/users/${book.userBook.user_id}/books/${book.isbn}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(currentBook)
        })
            .then(response => 
                console.log(currentBook)
                )
                .catch((error) => console.log("error", error));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [currentShelf]);

      

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
                        <b>Shelf:</b> 
                    
                    {edit ? 
                    <select name="dog-names" id="dog-names" onChange={handleChange} value={currentShelf} defaultValue={currentShelf}>
                        <option value="To Read">To Read</option>
                        <option value="Reading">Reading</option>
                        <option value="Finished">Finished</option>
                        <option value="Did Not Finish">Did Not Finish</option>
                        <option value="Favorites">Favorites</option>
                        <option value="Recommended">Recommended</option>
                    </select>: shelfNames[book.userBook.shelf_id]
                    }
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
                    <br/>
                    <Button  onClick={handleEdit} colorScheme='teal' size='sm'>
                        Edit
                    </Button>
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
