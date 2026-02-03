import React,{useState} from 'react'
import Form from './Form'

const UserContacts = () => {
    const [userDetails, setUserDetails] = useState([])

    return (
        <div className='userContacts-wrapper w-full h-[100vh] p-4 flex flex-col gap-4' >
            <Form userDetails={userDetails} setUserDetails={setUserDetails} />
            <div className='users-wrappers w-full h-[100px] flex items-center flex-wrap gap-2'>
                {userDetails.map(({ userName, userEmail, userPhone }) => {
                    return <div className="user-card w-[300px] h-[120px] bg-white shadow-xl rounded-xl p-4 flex flex-col justify-center gap-2">
                        <div className="name-wrapper">Name : {userName}</div>
                        <div className="email-wrapper">Email : {userEmail}</div>
                        <div className="phone-wrapper">Phone : {userPhone}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default UserContacts
