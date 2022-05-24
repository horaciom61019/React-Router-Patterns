import React from 'react';
// In react-router-dom v6, "Switch" is replaced by routes "Routes".
// "Redirect" is replaced by "Navigate".
import {Routes, Route, Navigate} from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

const AppRoutes = ({ dogs }) => {
    return (
        <Routes>
            <Route exact path="/dogs">
                <DogList dogs={dogs} />
            </Route>
            <Route path="/dogs/:name">
                <FilterDogDetails dogs={dogs} />
            </Route>
            <Navigate to="/dogs" />
        </Routes>
    );
};

export default AppRoutes;