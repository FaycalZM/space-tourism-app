import React from 'react'
import { useParams } from 'react-router'
import data from '../../data/data.json'

const DestinationDetails = () => {
  const { destinationName } = useParams();
  const currentDestination = data.destinations.filter(destination => destination.name === destinationName)[0];

  return (
    <>
      <p className='text-heading-2 font-bellefair uppercase mt-2'>{currentDestination ? currentDestination.name : null} </p>
      <p className='text-body-text/8 font-barlow '>{currentDestination ? currentDestination.description : null} </p>
      <hr className='mt-6 opacity-[0.2] bg-very-light-grayish-blue' />
      <div className='flex gap-16 mt-4'>
        <div>
          <p className='text-subheading-2 font-barlow-condensed text-very-light-grayish-blue tracking-sm'>AVG. DISTANCE</p>
          <p className='text-subheading-1 font-bellefair uppercase mt-2'>{currentDestination ? currentDestination.distance : null} </p>
        </div>
        <div>
          <p className='text-subheading-2 font-barlow-condensed text-very-light-grayish-blue tracking-sm uppercase'>Est. travel time</p>
          <p className='text-subheading-1 font-bellefair uppercase mt-2'>{currentDestination ? currentDestination.travel : null} </p>
        </div>
      </div>
    </>
  )
}

export default DestinationDetails