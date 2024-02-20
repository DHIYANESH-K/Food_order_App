import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should header component loaded",()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );
    let btn=screen.getByRole("button",{name:"Login"});
    // let btn=screen.getByText("Login");
    expect(btn).toBeInTheDocument();
});


test("Should header component loaded",()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );
    let btn_in=screen.getByRole("button",{name:"Login"});
    // let btn=screen.getByText("Login");
    fireEvent.click(btn_in)
    let btn_out=screen.getByRole("button",{name:"Logout"});
    expect(btn_out).toBeInTheDocument();
});