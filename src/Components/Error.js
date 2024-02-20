import { useRouteError } from "react-router-dom";
let Error=()=>{
    let err=useRouteError();
    return (
        <div className="error">
            <h1>{err.status}:{err.statusText}</h1>
        </div>
    );
}

export default Error;