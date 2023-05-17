import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../Components';
import { PokemonContext } from '../Context/PokemonContext';

export const SearchPage = () => {
	const location = useLocation();

	const { globalPokemons } = useContext(PokemonContext);

    let filteredPokemons = null

    if(location.state!=null){
     filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))
    console.log("entra1")
    }



    return (

        location.state ? (
          <div className="container">
          <p className="p-search">
            Se encontraron <span>{filteredPokemons.length}</span>{' '}resultados:
          </p>
          <div className="card-list-pokemon container">
            {filteredPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id}/>)}
          </div>
         </div>
         
         ):(
         
         
          <p className="p-search">
            Se encontraron <span>0</span>{' '}resultados:
          </p>
         
        
       )
        
       
      )




	return (
		<div className='container'>
			<p className='p-search'>
				Se encontraron <span>{filteredPokemons.length}</span>{' '}
				resultados:
			</p>
			<div className='card-list-pokemon container'>
				{filteredPokemons.map(pokemon => (
					<CardPokemon pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
	);
};