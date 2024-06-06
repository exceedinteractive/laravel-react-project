import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid'

export default function TableHeading({name, children, sortable = true, sort_field = null, sort_direction = null, sortChanged = () => {}}) {
    return (
        <th onClick={(e) => sortChanged(name)} className="px-3 py-2">
            <div className="flex items-center justify-between gap-1 cursor-pointer">
                {children}
                {sortable && (
                <div className="text-gray-300">
                    <ChevronUpIcon className={
                        "w-4" +
                        (sort_field === name && sort_direction === 'asc' ? " text-black" : "")
                    } />
                    <ChevronDownIcon className={
                        "w-4 -mt-2" +
                        (sort_field === name && sort_direction === 'desc' ? " text-black" : "")
                    } />
                </div>
                )}
            </div>
        </th>
    )
}