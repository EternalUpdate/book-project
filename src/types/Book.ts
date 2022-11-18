export type Book = {
    isbn: number;
    bookInfo: {
        title: string;
        year: number;
        blurb: string;
        cover_url: string;
        page_no: number;
        author: string;
        publisher: string;
        genre: string[];
    };
    userBook: {
        user_id: number;
        shelf_id: number;
        pages_read: number;
        rating: number;
        review: string;
    };
}

export const testBooks: Book[] = [
    {
        isbn: 1,
        bookInfo: {
            title: "Test 1",
            year: 1990,
            blurb: "Summary",
            cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617768316i/68428.jpg",
            page_no: 0,
            author: "author",
            publisher: "publisher",
            genre: ["fantasy"]
        },
        userBook: {
            user_id: 1,
            shelf_id: 1,
            pages_read: 1,
            rating: 1,
            review: "review"
        }
    },
    {
        isbn: 2,
        bookInfo: {
            title: "Test 2",
            year: 1980,
            blurb: "summary 2",
            cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1619538925i/68429.jpg",
            page_no: 1,
            author: "author 2",
            publisher: "publisher 2",
            genre: ["fantasy"]
        },
        userBook: {
            user_id: 1,
            shelf_id: 1,
            pages_read: 2,
            rating: 2,
            review: "review 2"
        }
    },
    {
        isbn: 3,
        bookInfo: {
            title: "Test 3",
            year: 1970,
            blurb: "summary 3",
            cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1628563911i/2767793.jpg",
            page_no: 2,
            author: "author 3",
            publisher: "publisher 3",
            genre: ["fantasy"]
        },
        userBook: {
            user_id: 1,
            shelf_id: 2,
            pages_read: 3,
            rating: 3,
            review: "review 3"
        }
    },
    {
        isbn: 4,
        bookInfo: {
            title: "Test 4",
            year: 1960,
            blurb: "summary 4",
            cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659905828i/7235533.jpg",
            page_no: 3,
            author: "author 4",
            publisher: "publisher 4",
            genre: ["fantasy"]
        },
        userBook: {
            user_id: 1,
            shelf_id: 3,
            pages_read: 4,
            rating: 4,
            review: "review 4"
        }
    },
    {
        isbn: 5,
        bookInfo: {
            title: "Test 5",
            year: 1950,
            blurb: "summary 5",
            cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1515691735i/35068705.jpg",
            page_no: 4,
            author: "author 5",
            publisher: "publisher 5",
            genre: ["fantasy"]
        },
        userBook: {
            user_id: 1,
            shelf_id: 1,
            pages_read: 5,
            rating: 5,
            review: "review 5"
        }
    },
    {
        isbn: 5,
        bookInfo: {
            title: "Test 5",
            year: 1950,
            blurb: "summary 5",
            cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1515691735i/35068705.jpg",
            page_no: 4,
            author: "author 5",
            publisher: "publisher 5",
            genre: ["fantasy"]
        },
        userBook: {
            user_id: 1,
            shelf_id: 1,
            pages_read: 5,
            rating: 5,
            review: "review 5"
        }
    },
    {
        isbn: 5,
        bookInfo: {
            title: "Test 5",
            year: 1950,
            blurb: "summary 5",
            cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1515691735i/35068705.jpg",
            page_no: 4,
            author: "author 5",
            publisher: "publisher 5",
            genre: ["fantasy"]
        },
        userBook: {
            user_id: 1,
            shelf_id: 1,
            pages_read: 5,
            rating: 5,
            review: "review 5"
        }
    },
    {
        isbn: 5,
        bookInfo: {
            title: "Test 5",
            year: 1950,
            blurb: "summary 5",
            cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1515691735i/35068705.jpg",
            page_no: 4,
            author: "author 5",
            publisher: "publisher 5",
            genre: ["fantasy"]
        },
        userBook: {
            user_id: 1,
            shelf_id: 1,
            pages_read: 5,
            rating: 5,
            review: "review 5"
        }
    },
    {
        isbn: 5,
        bookInfo: {
            title: "Test 5",
            year: 1950,
            blurb: "summary 5",
            cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1515691735i/35068705.jpg",
            page_no: 4,
            author: "author 5",
            publisher: "publisher 5",
            genre: ["fantasy"]
        },
        userBook: {
            user_id: 1,
            shelf_id: 1,
            pages_read: 5,
            rating: 5,
            review: "review 5"
        }
    },
    {
        isbn: 5,
        bookInfo: {
            title: "Test 5",
            year: 1950,
            blurb: "summary 5",
            cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1515691735i/35068705.jpg",
            page_no: 4,
            author: "author 5",
            publisher: "publisher 5",
            genre: ["fantasy"]
        },
        userBook: {
            user_id: 1,
            shelf_id: 1,
            pages_read: 5,
            rating: 5,
            review: "review 5"
        }
    },
    {
        isbn: 5,
        bookInfo: {
            title: "Test 5",
            year: 1950,
            blurb: "summary 5",
            cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1515691735i/35068705.jpg",
            page_no: 4,
            author: "author 5",
            publisher: "publisher 5",
            genre: ["fantasy"]
        },
        userBook: {
            user_id: 1,
            shelf_id: 1,
            pages_read: 5,
            rating: 5,
            review: "review 5"
        }
    },
    {
        isbn: 6,
        bookInfo: {
            title: "Test 6",
            year: 1940,
            blurb: "summary 6",
            cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1539963703i/41118857.jpg",
            page_no: 5,
            author: "author 6",
            publisher: "publisher 6",
            genre: ["fantasy"]
        },
        userBook: {
            user_id: 1,
            shelf_id: 1,
            pages_read: 6,
            rating: 6,
            review: "review 6"
        }
    }
]