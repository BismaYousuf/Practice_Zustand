'use client'

import { useCount } from '@/stores/count-store/countStore'
import React from 'react'

function TestComponent() {
  const count = useCount(state => state.count)
  const increment = useCount(state => state.increment)
  const decrement = useCount(state => state.decrement)

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6 bg-white rounded-2xl shadow-md max-w-sm mx-auto mt-10">

      <h1 className="text-2xl font-semibold text-gray-800">Count: {count}</h1>

      <div className="flex gap-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-200"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition duration-200"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default TestComponent
