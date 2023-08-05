/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './UserCards.css'

export const UserCards = ({ users }) => {
  console.log(users)
  return (
    <div className='usercards'>
      {users.map((user) => (
        <Link to={`update/${user._id}`} key={user._id}>
          <p>{user.name}</p>
          <p>Based in {user.sector}</p>
          <p>
            {user.isAgreedToTerms ? 'Agree to terms' : 'Do not Agree terms'}
          </p>
        </Link>
      ))}
    </div>
  )
}
