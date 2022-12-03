import React from "react";
// import { shallow } from 'enzyme';
import { render,screen,fireEvent } from "@testing-library/react";
import BookOverviewTest from "./BookOverviewTest";
import { BrowserRouter } from 'react-router-dom';

     


test('renders BookOverview conmonent and It has edit button',()=>{  

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

test('renders BookOverview conmonent and It has edit button',()=>{  

        // render(<Shelf shelfID={0} shelfName="To Read" userID="1234" />);
        
        const {queryByTestId} = render(
        <BrowserRouter>
                <BookOverviewTest />
         </BrowserRouter>
        );
        expect(queryByTestId("backbutton")).toBeTruthy()!; 
});

test('renders BookOverview conmonent and It has edit button',()=>{  
 
        const {queryByTestId} = render(
        <BrowserRouter>
                <BookOverviewTest />
         </BrowserRouter>
        );
        expect(queryByTestId("favButton")).toBeTruthy()!; 
});

test('renders Bookoverview page and showing all details of book',()=>{  
        const {getByText} = render(
        <BrowserRouter>
                <BookOverviewTest />
         </BrowserRouter>);
        expect(getByText("Genre(s):" && "Author(s):" && "Summary:" && "Rating:" && "Review:")).toBeInTheDocument();          
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