import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()




    // const [data,setdata] =  useState([])
    // useEffect(() => {
    //   fetch("")
    //   .then(response => response.json())
    //   .then(data=>{
    //     console.log(data)
    //     setdata(data)
    //   })

    // }, [])
    



  return (
    <>

    <div className='flex flex-col justify-center align-middle m-4 '>
    <div className=' w-24'>
        <img src={data.avatar_url} alt={data.name} />
    </div>
    <h2>Name {data.name}</h2>
    <h2>Followers {data.followers}</h2>
    </div>
    
    
    
    </>
  )
}

export default Github

export const githubinfoloader = async ()=>{
    const response = await fetch("https:/api.github.com/users/rohiit257")
    return response.json()

}
