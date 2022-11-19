import React, { ReactElement } from "react";
import { Book, testBooks } from "../types/Book";
import {Link, useLocation } from 'react-router-dom';
import { Stack, Image, Heading, Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import './BookOverview.css';

type Props = {
    id: number;
    shelfName: string;
    books: Book[];
};

function BookOverview(){
    const location = useLocation()
    const book = location.state;
    const navigate=useNavigate();
    const goBack = () => {
        navigate(-1);
      };
    
    return (
        <div>
        <h1 id="center">Book Details</h1>
        <div className="img">
        <img src={book.bookInfo.cover_url} alt="image"/>
        </div>
        <div className="detail">
        <p className="txt">Title: {book.bookInfo.title}</p>
        <p className="txt">Shelf: </p>
        <p className="txt">Genre:{book.bookInfo.genre}</p>
        <p className="txt">Author:{book.bookInfo.author}</p>
        </div>
        <button onClick={goBack} className='back-button'>
        &larr; Go Back
      </button>
        </div>
    );
}


export default BookOverview