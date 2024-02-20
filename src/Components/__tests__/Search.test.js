import { render,act,screen} from "@testing-library/react"
import Body from "../Body";
import Mock_Data from "./mocks/mockResListData.test.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//jest.fun() gives the mock fetch function
//global is an global object for whereever render the component.
// fetch will rewrite that fetch function
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(Mock_Data);
        }
    })
})

// we can't write fetch logic inside test()
// test("should render the body component",()=>{
//     render(<Body/>) // jest doesn't understand fetch() we want to write mock fetch function
// })


test("should render the body component",async()=>{
    await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>))

    const searchbtn=screen.getByRole("button",{name:"search"});
    console.log(searchbtn);
    expect(searchbtn).toBeInTheDocument();
})