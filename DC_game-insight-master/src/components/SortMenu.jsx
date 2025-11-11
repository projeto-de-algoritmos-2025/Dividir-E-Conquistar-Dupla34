import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, CalendarDaysIcon, StarIcon, ListBulletIcon } from '@heroicons/react/20/solid'
import mergeSort from '../utils/mergeSort'
import gameData from '../utils/data/data'
import { useFlyMenuData } from '../context/flyMenuContext'

const solutions = [
  { name: 'Nome (A-Z)', description: 'Ordenar por nome', href: '#', icon: ListBulletIcon },
  { name: 'Nome (Z-A)', description: 'Ordenar por nome em ordem inversa', href: '#', icon: ListBulletIcon },
  { name: 'Nota (0-10)', description: 'Ordenar por nota', href: '#', icon: StarIcon },
  { name: 'Nota (10-0)', description: 'Ordenar por nota em ordem inversa', href: '#', icon: StarIcon },
  { name: 'Mais antigo', description: "Ordenar por data de lançamento", href: '#', icon: CalendarDaysIcon },
  { name: 'Mais novo', description: "Ordenar por data de lançamento em ordem inversa", href: '#', icon: CalendarDaysIcon },
]

function SortMenu() {
  const { setFlyMenuData } = useFlyMenuData()
  const mergelist = (key) => {
    let reverse = false
    let toOrdenate = ""
    switch (key) {
      case "Nome (A-Z)":
        toOrdenate = "name";
        break;
      case 'Nome (Z-A)':
        toOrdenate = "name";
        reverse = true
        break;
      case 'Nota (0-10)':
        toOrdenate = "rating";
        break;
      case 'Nota (10-0)':
        toOrdenate = "rating";
        reverse = true
        break;
      case "Mais antigo":
        toOrdenate = "year"
        break;
      case "Mais novo":
        toOrdenate = "year"
        reverse = true
        break;
    }

    if (reverse) {
      const { sortedArray, inversionCount } = mergeSort(gameData, toOrdenate)
      return { ordenated: sortedArray.reverse(), inversions: inversionCount }
    }

    const { sortedArray, inversionCount } = mergeSort(gameData, toOrdenate)
    return { ordenated: sortedArray, inversions: inversionCount }
  }


  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-text-primary">
        <span>Opções de Ordenação</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-secondary text-sm leading-6 shadow-lg ring-1 ring-gray-700">
            <div className="p-4">
              {solutions.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-primary">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-900">
                    <item.icon className="h-6 w-6 text-gray-400 group-hover:text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <a onClick={(() => {
                      const ordenated = mergelist(item.name)
                      setFlyMenuData({ loaded: true, ordenated: ordenated.ordenated, inversions: ordenated.inversions })
                    })}
                      className="font-semibold text-text-primary">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}


export default SortMenu;