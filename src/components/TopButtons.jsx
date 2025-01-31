import React from 'react'

const TopButtons = ({setQuery}) => {

    const defaultCities = [
        {
            id: 1,
            name: 'Hanover',
        },
        {
            id: 2,
            name: 'Boston',
        },
        {
            id: 3,
            name: 'New York',
        },
        {
            id: 4,
            name: 'San Francisco',
        },
        {
            id: 5,
            name: 'Melbourne',
        },
    ]

  return (
    <div className="flex items-center justify-around my-6">
        {defaultCities.map((city) => (
                <button 
                    key={city.id} 
                    className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
                    onClick={() => setQuery({q: city.name})}
                >
                    {city.name}
                </button>
            ))}
    </div>
  )
}

export default TopButtons