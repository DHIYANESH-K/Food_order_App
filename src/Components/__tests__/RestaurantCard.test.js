import { render,screen } from "@testing-library/react";
import RestaurantCard, { RestaurantCardOffer } from "../RestaurantCard";
import Mock_Data from "./mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("For restaurantCard component",()=>{
    render(<RestaurantCard resData={Mock_Data}/>)
    let name=screen.getByText("McDonald's");
    expect(name).toBeInTheDocument();
})

test("For restaurantCard component",()=>{
    render(<RestaurantCardOffer resData={Mock_Data}/>)
    let name=screen.getByText("ITEMS");
    expect(name).toBeInTheDocument();
})