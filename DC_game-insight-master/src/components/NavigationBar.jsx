import React from "react"
import SortMenu from "./SortMenu";
import RecommendationMenu from "./RecommendationMenu";

const NavigationBar = () => {

    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50 bg-primary">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <h1 className="text-2xl font-bold text-accent">Avaliador de Jogos</h1>
                        </a>

                    </div>
                    <div className="mx-auto grid max-w-2xl mt-6 mr-60 grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <SortMenu/>
                    <RecommendationMenu/>
                    </div>
                    
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text-secondary">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavigationBar