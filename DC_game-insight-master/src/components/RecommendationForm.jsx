import React, { useState } from "react"
import MenuItem from '@mui/material/MenuItem';
import genres from "../utils/data/genres";
import { Select } from "@mui/material";
import recommendGames from "../utils/countingInversions";
import gameData from "../utils/data/data";
import GameListItem from "./GameListItem";

export default function RecommendationForm() {
    const [genre, setGenre] = useState('')
    const [genreArr, setGenresArr] = useState([])
    const [year, setYear] = useState('')
    const [rating, setRating] = useState('')
    const [recommended, setRecommended] = useState([])
    const [status, setStatus] = useState(false)

    const handleChangeGenre = (event) => {
        setGenre(event.target.value)
    }

    const handleChangeYear = (event) => {
        setYear(event.target.value)
    }

    const handleChangeRating = (event) => {
        setRating(event.target.value)
    }

    const handleGenres = (genre) => {
        setGenresArr((prevGenres) => [...prevGenres, genre])
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-text-primary">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="text-2xl font-bold">Recomendações</h1>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    Escolha o Gênero:
                    <Select
                        className="ml-40 bg-secondary text-text-primary"
                        onChange={handleChangeGenre}
                        value={genre}
                    >
                        {genres.map((item, index) => (
                            <MenuItem key={parseInt(index)} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>

                    <button
                        onClick={() => {
                            handleGenres(genre)
                        }}
                        className="flex-none ml-40 rounded-md bg-accent px-3.5 mt-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                    >
                        Adicionar Gênero
                    </button>

                    <button
                        onClick={() => {
                            setGenresArr([]) // Clear all genres
                        }}
                        className="flex-none ml-40 rounded-md mt-3 bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                    >
                        Remover Todos os Gêneros
                    </button>

                    <div className="mt-4">
                        Gêneros:
                        {genreArr.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>

                    <form className="space-y-6 mt-4">
                        <div>
                            <label className="block text-sm font-medium leading-6">
                                Digite um ano entre 1948 e 2023
                            </label>
                            <div className="mt-2">
                                <input
                                    value={year}
                                    onChange={handleChangeYear}
                                    id="number"
                                    name="number"
                                    type="text"
                                    autoComplete="number"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 bg-primary text-text-primary shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6">
                                    Digite uma nota de 0 a 10
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={handleChangeRating}
                                    value={rating}
                                    id="number"
                                    name="number"
                                    type="number"
                                    autoComplete="current-number"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 bg-primary text-text-primary shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div>
                    <button
                        onClick={() => {
                            const preferences = {
                                genre: genreArr,
                                rating: rating,
                                year: year
                            };
                            const recommended = recommendGames(preferences, gameData)
                            if (recommended[0]) {
                                setStatus(true)
                                setRecommended(recommended[0])
                            }
                        }}
                        className="flex mt-5 w-full justify-center rounded-md bg-accent px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                    >
                        Obter Recomendação
                    </button>
                </div>
                <div className="mt-5 ml-20">
                    {status ? <> <h1 className="-mb-20 ml-7">Jogo Recomendado:</h1> <GameListItem gameProps={[recommended]}/></>: <></>}
                </div>
            </div>
        </>
    )
}
