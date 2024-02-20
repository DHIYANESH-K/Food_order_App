// import { render, screen } from "@testing-library/react"
// import Contact from "../Contact"
// import "@testing-library/jest-dom";

import Contact from "../Contact";
import { render} from "@testing-library/react";

test(".......",()=>{
    render(<Contact/>);
})

// import Contact from "../Contact";
// import { render,screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// describe("text",()=>{
//     test("contact page",()=>{
//         render(<Contact/>)
//         let btn=screen.getByRole("button");
//         console.log(btn);
//         expect(btn).toBeInTheDocument();
//     })
//     it("contact page",()=>{
//         render(<Contact/>)
//         let btn=screen.getByRole("para");
//         console.log(btn);
//         expect(btn).toBeInTheDocument();
//     })
// })



// describe("contact page test cases",()=>{
//     test("should load contact us component",()=>{
//         // testing the ui component first we need to render com into jsdom
//         render(<Contact/>) //babel preset is helping to convert jsx to html.
//         // is an object. we can get all the elements inside screen object
//         let heading=screen.getByRole("heading") // we can get all the heading tag in heading variable.
    
//         expect(heading).toBeInTheDocument();
//     })
    
//     test("should load contact us component",()=>{
//         render(<Contact/>) 
//         let btn=screen.getByText("submit");
//         expect(btn).toBeInTheDocument();
//     })
    
//     test("should load contact us component",()=>{
//         render(<Contact/>) 
//         let btn=screen.getByRole("button") 
//         expect(btn).toBeInTheDocument();
//     })
//     it("should load contact us component",()=>{
//         render(<Contact/>) 
//         let input=screen.getByPlaceholderText("name");
//         expect(input).toBeInTheDocument();
//     })
//     it("should load contact us component",()=>{    // it act as a alias name to test
//         render(<Contact/>) 
//         let input=screen.getAllByRole("textbox");
//         // expect(input).toBeInTheDocument();
//         // console.log(input);
//         // console.log(input[0]);
//         // expect(input.length).toBe(2)
//         expect(input.length).not.toBe(3)
//     })
// })