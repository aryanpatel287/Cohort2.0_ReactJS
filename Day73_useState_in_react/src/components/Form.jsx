import React, { useState } from 'react'

const Form = ({ userDetails, setUserDetails }) => {

    const [activeField, setActiveField] = useState('')
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')


    function handleSubmit(e) {
        e.preventDefault()
        const newUser = { userName, userEmail, userPhone }
        setUserDetails(prevDetails => [...prevDetails, newUser])
        console.log(userDetails)
        setUserName('')
        setUserEmail('')
        setUserPhone('')
    }

    return (
        <div className='form-wrapper w-[100%] h-[200px] flex items-center justify-center '>
            {/*-------------------------- Form ------------------------ */}
            <form
                className='flex items-center justify-center flex-col gap-3 w-[50%] h-[100%] bg-white rounded-2xl shadow-2xl'
                onSubmit={(e) => {
                    handleSubmit(e)
                }}>
                <div className="form-inputs flex items-center justify-center gap-3">

                    {/*-------------------------- User Name Input ------------------------ */}
                    <div className={`${activeField === 'username' || userName ? 'input-wrapper active' : 'input-wrapper'} relative flex items-center `}>
                        <label
                            htmlFor="username"
                            className={`${activeField === 'username' || userName ? 'form-label active' : 'form-label'} absolute bg-white px-1 ml-2  `} >
                            Name</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={userName}
                            className=' relative p-2'
                            autoComplete='off'
                            required
                            onChange={(e) => { setUserName(e.target.value) }}
                            onFocus={() => { setActiveField('username') }}
                            onBlur={() => { setActiveField('') }} />
                    </div>

                    {/*-------------------------- User Email Input ------------------------ */}
                    <div className={`${activeField === 'userEmail' || userEmail ? 'input-wrapper active' : 'input-wrapper'} relative flex items-center `}>
                        <label
                            htmlFor="userEmail"
                            className={`${activeField === 'userEmail' || userEmail ? 'form-label active' : 'form-label'} absolute bg-white px-1 ml-2  `} >
                            Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            value={userEmail}
                            required
                            className=' relative p-2'
                            onChange={(e) => { setUserEmail(e.target.value) }}
                            onFocus={() => { setActiveField('userEmail') }}
                            onBlur={() => { setActiveField('') }} />
                    </div>

                    {/*-------------------------- User Phone Input ------------------------ */}
                    <div className={`${activeField === 'userPhone' || userPhone ? 'input-wrapper active' : 'input-wrapper'} relative flex items-center `}>
                        <label
                            htmlFor="userPhone"
                            className={`${activeField === 'userPhone' || userPhone ? 'form-label active' : 'form-label'} absolute bg-white px-1 ml-2  `} >
                            Phone</label>
                        <input
                            type="number"
                            name="userPhone"
                            id="userPhone"
                            value={userPhone}
                            maxLength={10}
                            required
                            className=' relative p-2'
                            onChange={(e) => { if (userPhone.length <= 10) setUserPhone(e.target.value) }}
                            onFocus={() => { setActiveField('userPhone') }}
                            onBlur={() => { setActiveField('') }} />
                    </div>
                </div>

                {/*-------------------------- Form Submit Button ------------------------ */}
                <button
                    type="submit"
                    className='bg-black text-white border-none px-2.5 py-1.5 rounded-xl active:scale-95 '>
                    Submit</button>
            </form>
        </div>
    )
}

export default Form
