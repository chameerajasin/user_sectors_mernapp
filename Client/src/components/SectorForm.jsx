/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios'

import './SectorForm.css'
import { baseURL } from '../constant'

export const SectorForm = ({
  name,
  sector,
  isAgreedToTerms,
  buttonTitle,
  onSubmitted,
}) => {
  const [sectors, setSectors] = useState([])
  const [userName, setUserName] = useState('')
  const [userSector, setUserSector] = useState(null)
  const [isUserAgreedToTerms, setIsUserAgreedToTerms] = useState(false)

  const getSectors = async () => {
    try {
      const response = await axios.get(`${baseURL}/sector`)
      const fetchedSectors = response.data.data ?? []
      if (userSector === null && fetchedSectors.length > 0)
        setUserSector(fetchedSectors[0].type)
      setSectors(fetchedSectors)
    } catch (error) {
      alert('Failed to fetch sectors')
    }
  }

  const submitData = (event) => {
    event.preventDefault()

    onSubmitted({
      name: userName,
      sector: userSector,
      isAgreedToTerms: isUserAgreedToTerms,
    })
  }

  useEffect(() => {
    getSectors()

    if (name !== undefined || name !== null) setUserName(name)
    if (sector !== undefined || sector !== null) setUserSector(sector)
    if (
      (isAgreedToTerms !== undefined || isAgreedToTerms !== null) &&
      typeof isAgreedToTerms === 'boolean'
    )
      setIsUserAgreedToTerms(isAgreedToTerms)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='container'>
      <form onSubmit={submitData}>
        <p>
          Please enter your name and pick the Sectors you are currently involved
          in.
        </p>

        <label>
          <span>Name</span>
          <input
            type='text'
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </label>

        <label>
          <span>Sectors</span>
          <select
            multiple
            size={5}
            value={userSector}
            onChange={(e) => setUserSector(e.target.value)}
          >
            {sectors.map((sector) => {
              return <option key={sector._id}>{sector.type}</option>
            })}
          </select>
        </label>

        <label className='form-row'>
          <span>Agree to Terms</span>
          <input
            type='checkbox'
            checked={isUserAgreedToTerms}
            onClick={() => setIsUserAgreedToTerms(!isUserAgreedToTerms)}
          />
        </label>

        <button type='submit'>{buttonTitle}</button>
      </form>
    </div>
  )
}
