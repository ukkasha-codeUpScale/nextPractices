import MultiStepContext, { MutliStepContextType } from '@/components/context/multistep-context'
import React, { useContext } from 'react'
export  function PhoneAndStack() {
  const {
    state: {applicant},
    methods: { stepNext, stepPrev}
  } : MutliStepContextType = useContext(MultiStepContext)

  return (
    <div className='bg-blue-200 shadow-2xl min-h-40 min-w-60'>
        <h2>Enter Phone and Stack</h2>
        <div className="flex gap-4 text-white px-2">
        <button className="px-4 py-2 bg-blue-700 shadow-2xl rounded-xl" onClick={() => stepPrev()}>
          Prev
        </button>
        <button className="px-4 py-2 bg-blue-700 shadow-2xl rounded-xl" onClick={() => stepNext()}>
          Next
        </button>
      </div>
    </div>
  )
}
