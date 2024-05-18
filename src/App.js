import './App.css';
import List from "./component/customer/List";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Create from "./component/customer/Create";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<List/>}>
                </Route>
                <Route path={"/create"} element={<Create/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
