import React from 'react'

const TopButtons = ({setQuery}) => {

    const defaultCities = [
        {
            id: 1,
            name: 'Boston',
        },
        {
            id: 2,
            name: 'New York',
        },
        {
            id: 3,
            name: 'San Francisco',
        },
        {
            id: 4,
            name: 'Dubai',
        },
        {
            id: 5,
            name: 'Sydney',
        },
    ]

  return (
    <>
    <div className="flex items-center justify-around my-6 transpa">
        
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
    </>
  )
}

export default TopButtons