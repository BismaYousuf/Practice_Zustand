'use client'

import { useCount } from '@/stores/count-store/countStore'
import React from 'react'

function TestComponent() {
  const count = useCount(state => state.count)
  const increment = useCount(state => state.increment)
  const decrement = useCount(state => state.decrement)

  return (
    <div className="flex flex-col items-center gap-6 p-6 mt-10 max-w-sm mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800">MyComponent Count: {count}</h1>

      <div className="flex gap-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default TestComponent
