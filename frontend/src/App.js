import React from 'react';
import DiaryForm from "./components/cafe/DiaryForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DiaryList from "./components/cafe/DiaryList";

const App = () => {
    return (
        <BrowserRouter>
            <div className="m-3">
                <Routes>
                    <Route path="/" element={<DiaryForm/>}/>
                    <Route path="/list" element={<DiaryList/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
