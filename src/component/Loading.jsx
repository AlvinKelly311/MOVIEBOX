import React from 'react'
import  {motion} from 'framer-motion'

const Loading = () => {
  return (
        <div className='flex items-center justify-center  mt-30'>
        {[...Array(3)].map((_, index) => (
          <motion.span 
          key={index}
          className='w-4 p-2 h-4 bg-gray-800 rounded-full'
          animate={{ y: [0, -10, 0], // Move up and down
            opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut',  delay: index * 0.1 }}
          />
        ))}
        </div>
  )
}

export default Loading