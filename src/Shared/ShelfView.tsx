import { VStack } from "@chakra-ui/react";
import { testBooks } from "../types/Book";
import Shelf from "../components/Shelf";

export default function ShelfView() {
    return (
        <VStack spacing={3}>
            <Shelf id={1} shelfName="To Read" books={testBooks} />
            <Shelf id={2} shelfName="Reading" books={testBooks} />
            <Shelf id={3} shelfName="Finished" books={testBooks} />
            <Shelf id={4} shelfName="Want to Read" books={testBooks} />
            <Shelf id={5} shelfName="Favorites" books={testBooks} />
            <Shelf id={6} shelfName="Recommended" books={testBooks} />
        </VStack>
    );
}
