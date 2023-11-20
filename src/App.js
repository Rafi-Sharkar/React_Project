import React from 'react';
import QuizPage from './Components/Pages/QuizPage/QuizPage';
import Navbar from './Components/Navbar';
import Home from "./Components/Pages/Home/Home"
import CreateQuizPage from "./Components/Pages/CreateQuiz/CreateQuizPage"
import { Routes,Route } from 'react-router-dom';
const App = () => {
    return (
        <> 
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cqestion' element={<CreateQuizPage/>}/>
                <Route path='/question' element={<QuizPage/>}/>
            </Routes>

        </>
    );
};

export default App;
