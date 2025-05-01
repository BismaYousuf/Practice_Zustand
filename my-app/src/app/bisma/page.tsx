'use client'

import { useCount } from '@/stores/count-store/countStore'
import React from 'react'

function Bisma() {
  const count = useCount(state => state.count)

  return (
    <div className="h-screen w-full bg-[#ecf3ff] flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
        <h2 className="text-xl font-medium text-gray-500">I PRACTICE HOW TO USE Zustand</h2>
        <h1 className="text-3xl font-semibold text-gray-800">
          BismaComponent Count: <span className="text-blue-600">{count}</span>
        </h1>
      </div>
    </div>
  )
}

export default Bisma
