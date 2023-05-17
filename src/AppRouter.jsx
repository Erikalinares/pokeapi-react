import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './Components/Navigation';
import { HomePage, PokemonPage, SearchPage } from './Pages/index/';
//import {HomePage} from './Pages/Homepage';
//import {PokemonPage} from './Pages/Pokemonpage';
//import {SearchPage} from './Pages/Searchpage';


export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />} >
				<Route index element={<HomePage />} />
				<Route path='pokemon/:id' element={<PokemonPage />} />
                <Route path='search' element={<SearchPage />} />
			</Route>

            <Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};
