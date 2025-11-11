import React from "react";

const GameListItem = ({ gameProps }) => {
    const props = gameProps
    return (
        <>
            <ul role="list" className="grid mt-40 gap-x-8 gap-y-16 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {props.map((game) => (
                    <li key={game.name} className="bg-secondary p-4 rounded-lg border border-gray-700">
                        <div className="flex items-center sm:ml-6 gap-x-6">
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-text-primary">{game.name}</h3>
                                <h5 className="text-base font-semibold leading-7 tracking-tight text-text-secondary">Ano: {game.year}</h5>
                                {game.genre.map((genre) => {
                                    return (
                                        <p key={genre} className="text-sm font-semibold leading-6 text-accent">
                                            Gênero: {genre}
                                        </p>
                                    );
                                })}
                                <p className="text-sm font-semibold leading-6 text-yellow-400">Avaliação: {game.rating}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default GameListItem;