import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import loadPokemonThunkAction from '../state/InfinitePokedexStore/thunk/loadPokemonThunkAction';
import {Row, Col} from 'react-bootstrap';
import SiteLogo from "../views/SiteLogo";

export default function PokemonDetailsPage({ pokemonInfo }) {

  const {id} = useParams();

  

  return (
    <>
      <SiteLogo/>
      <Row>

      </Row>
    </>
    // <div>
    //   {(
    //     pokemon != null ? <>
    //       {(pokemon.sprites != null ? <img src={pokemon.sprites.front_default} /> : null)}
    //       {(pokemon != null ? <p>{JSON.stringify(pokemon)}</p> : null)}
    //     </> : null
    //   )}
    // </div>
  )
}
