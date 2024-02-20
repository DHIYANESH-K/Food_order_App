import { sum } from "../sum";

test("sum of two numbers",()=>{
    let result=sum(5,3);

    //Assertion
    expect(result).toBe(8);
});

