import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    { id: 1, name: 'Masculino' },
    { id: 2, name: 'Femenino' },
]

export default function SelectCombo() {
    const [selected, setSelected] = useState(people[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
            person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    return (
        <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
                <div class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm" displayValue={(person) => person.name}
                >
                    <Combobox.Input
                        class="dark:text-gray-300 dark:bg-boxdark-2 dark:border-gray-600 focus:border-primary-color-purple rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" displayValue={(person) => person.name}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </Combobox.Button>
                </div>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options className="dark:bg-boxdark-2 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {filteredPeople.length === 0 && query !== '' ? (
                            <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                Nada Encontrado.
                            </div>
                        ) : (
                            filteredPeople.map((person) => (
                                <Combobox.Option
                                    key={person.id}
                                    className={({ active, selected }) =>
                                        `dark:text-gray-300 relative cursor-default select-none py-2 pl-10 pr-4 ${active && 'cursor-pointer font-bold dark:text-secondary-color-purple text-primary-color-purple'} ${selected && 'bg-primary-color-purple text-white'
                                        }`
                                    }
                                    value={person}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {person.name}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-primary-color-green' : 'text-primary-color-green'
                                                        }`}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    )
}
