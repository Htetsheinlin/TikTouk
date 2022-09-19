import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import { topics } from "../utils/constants"

const Discover = () => {
  const router = useRouter();
  const { topic } = router.query;
  const activeTopicStyle = "flex xl:border-2 hover:bg-primary xl:border-[#F51997] px-2 py-2 rounded xl:rounded-full items-center gap-2 justify-center cursor-pointer text-[#F51997]"
  const topicStyle = "flex xl:border-2 hover:bg-primary xl:border-gray-300 px-2 py-2 rounded xl:rounded-full items-center gap-2 justify-center cursor-pointer text-black"
  return (
    <div className='xl:border-b-2 xl:border-gray-200 pb-6 ml-2'>
      <p className='text-gray-500 font-semibold m3 mt-4 hidden xl:block mb-4'>
        Popular Topics
      </p>
      <div className='flex gap-3 flex-wrap'>
        {topics.map((item)=>(
          <Link href={`/?topic=${item.name}`}
                key={item.name}>
                  <div className={topic === item.name ? activeTopicStyle : topicStyle}>
                    <span className='font-bold text-xl xl:text-md'>
                      {item.icon}
                    </span>
                    <span className='font-medium text-md hidden xl:block capitalized'>
                      {item.name}
                    </span>
                  </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Discover