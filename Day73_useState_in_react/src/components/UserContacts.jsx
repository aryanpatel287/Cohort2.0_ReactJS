import React, { useState } from 'react'
import Form from './Form'

const UserContacts = () => {
    const [userDetails, setUserDetails] = useState([])

    function deleteHandler(index) {
        const copyUsers=[...userDetails]
        copyUsers.splice(index,1)
        setUserDetails(copyUsers)
    }
    
    return (
        <div className='userContacts-wrapper w-full h-[100vh] p-4 flex flex-col gap-4' >
            <Form userDetails={userDetails} setUserDetails={setUserDetails} />
            <div className='users-wrappers w-full h-[100px] flex items-center flex-wrap gap-2'>
                {userDetails.map(({ userName, userEmail, userPhone }, index) => {
                    return <div key={index} className="user-card w-[300px] h-[120px] bg-white shadow-xl rounded-xl p-4 flex flex-col justify-center relative gap-2">
                        <div className="name-wrapper">Name : {userName}</div>
                        <div className="email-wrapper">Email : {userEmail}</div>
                        <div className="phone-wrapper">Phone : {userPhone}</div>
                        <i
                            onClick={() => { deleteHandler(index) }}
                            class="ri-delete-bin-line absolute top-4 right-4 text-xl font-bold"></i>
                    </div>
                })}
            </div>
        </div>
    )
}

export default UserContacts
