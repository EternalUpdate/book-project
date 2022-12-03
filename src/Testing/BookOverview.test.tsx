import React from "react";
// import { shallow } from 'enzyme';
import { render,screen,fireEvent } from "@testing-library/react";
import BookOverviewTest from "./BookOverviewTest";
import { BrowserRouter } from 'react-router-dom';


// Testing for edit button in bookoverview page
test('renders BookOverview component and It has edit button',()=>{  

        // render(<Shelf shelfID={0} shelfName="To Read" userID="1234" />);
        const handleClick = jest.fn()
        const {queryByTestId} = render(
        <BrowserRouter>
                <BookOverviewTest />
         </BrowserRouter>
        );
        expect(queryByTestId("editButton")).toBeTruthy()!; 
        // fireEvent.click(screen.getByText("Edit"));
        // expect(handleClick).toHaveBeenCalledTimes(1);

});

// Testing for back button in bookoverview page
test('renders BookOverview component and It has back button',()=>{  

        // render(<Shelf shelfID={0} shelfName="To Read" userID="1234" />);
        
        const {queryByTestId} = render(
        <BrowserRouter>
                <BookOverviewTest />
         </BrowserRouter>
        );
        expect(queryByTestId("backbutton")).toBeTruthy()!; 
});

// Testing for favourite button in bookoverview page
test('renders BookOverview component and It has favorites button',()=>{  
 
        const {queryByTestId} = render(
        <BrowserRouter>
                <BookOverviewTest />
         </BrowserRouter>
        );
        expect(queryByTestId("favButton")).toBeTruthy()!; 
});

// testing wheather book overview page showing proper details or not
test('renders Bookoverview page and showing all details of book',()=>{  
        const {getByText} = render(
        <BrowserRouter>
                <BookOverviewTest />
         </BrowserRouter>);
        expect(getByText("Genre(s):" && "Author(s):" && "Summary:" && "Rating:" && "Review:")).toBeInTheDocument();          
});
test('renders BookOverview component and It shows image of book',()=>{  
 
        const {queryByTestId} = render(
        <BrowserRouter>
                <BookOverviewTest />
         </BrowserRouter>
        );
        expect(queryByTestId("image")).toBeInTheDocument(); 
});

test('renders BookOverview component and It provide shelf name or dropdown menu',()=>{  
 
        const {queryByTestId} = render(
        <BrowserRouter>
                <BookOverviewTest />
         </BrowserRouter>
        );
        expect(queryByTestId("dropdown")).toBeInTheDocument(); 
});




// describe("<BookOverview />",()=>{
//     const handledelete=jest.fn();
//     const { queryByText } = render(
//         <BrowserRouter>
//         <BookOverview />
//         </BrowserRouter>
//     )
//     const button = queryByText("img")!;
//     fireEvent.click(button);
//     expect(handledelete).toHaveBeenCalledTimes(1);
// });