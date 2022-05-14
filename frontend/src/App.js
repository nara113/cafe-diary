import React from 'react';
import DiaryForm from "./components/cafe/DiaryForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact={true} element={<DiaryForm/>}/>
        </Routes>
    </BrowserRouter>
)

export default App;
