import React, { useEffect, useState } from 'react'
import './Fulltime.css'


export default function FulltimeJobs() {

  const [data, setData] =useState([]);

  useEffect(() => {
    fetch('/MOCK_DATA.json')
      .then(res => res.json())
      .then(data => setData(data))    
      .catch(err => console.log("Error fetching data: ",err))
  }, [])  

  console.log(data);

  return (

    <div className='FulltimeJobs'>
{
    data.map((item, index) => (
      <div key={index} className='job-card'>
        {/* Title on the first line */}
        <div className='job-title'>
          <h3 className='title'>{item.Title}</h3>
        </div>

        {/* Company on the second line */}
        <div className='job-company'>
          <p className='company'>{item.Company}</p>
        </div>

        {/* Salary, Experience, Openings, Start Date on the third line */}
        <div className='job-details'>
          <span className='salary all'>Job Offers <br /> {item.Salary}</span> | 
          <span className='experience all'>Experience:  <br /> {item.Experience}</span> | 
          <span className='openings all'>Openings: <br /> {item.Openings}</span> | 
          <span className='date all'>Start Date: <br /> {item["Start Date"]}</span>
        </div>

        {/* View Details Button */}
        <div className='job-actions p-2'>
          <button className='btn  me-1 btn-primary'>View Details</button>
          <button className='btn btn-primary'>Apply</button>

        </div>
      </div>
    ))
  }



      
    </div>




  )
}
