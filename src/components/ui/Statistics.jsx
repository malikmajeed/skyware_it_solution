import React from 'react'

export const Statistics = () => {
  return (
    <div className='flex flex-row items-center justify-center'>
            {/* Stats */}
       <div className="max-w-5xl items-center grid grid-cols-2 md:grid-cols-4 gap-8 py-10  select-none">
        {[
          { value: "399+", label: "Global Clients" },
          { value: "500+", label: "Projects Delivered" },
          { value: "15+", label: "Years of Excellence" },
          { value: "24/7", label: "Suppport Available" },
        ].map((stat) => (
          <div key={stat.label} className="text-center group min-w-[0]">
            <div 
              className="
                text-4xl md:text-5xl  mb-2 
                text-secondary
             "
            >
              {stat.value}
            </div>
            <div className="text-md text-secondary font-medium capitalize tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
       </div>
    </div>
  )
}
