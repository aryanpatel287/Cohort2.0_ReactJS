import React from 'react'
import CardButton from './CardButton'

const Card = ({ userData }) => {
    const { image, name, bio, followers, posts, isFollowed } = userData

    return (
        <div className='card-wrapper bg-white h-[420px] w-[235px] p-2 rounded-4xl shadow-2xl flex flex-col overflow-hidden'>
            <img 
                src={image} 
                alt={`${name}'s profile`} 
                className='w-full h-[60%] object-cover object-top rounded-4xl' 
            />

            <div className="card-details w-full h-[40%] p-4 flex flex-col justify-between">
                <div>
                    <h2 className="user-name font-bold text-2xl mb-2">
                        {name}
                    </h2>
                    <p className="user-description text-sm font-medium text-gray-500 line-clamp-2">
                        {bio}
                    </p>
                </div>

                <div className="card-bottom flex justify-between items-center gap-2 text-xs font-semibold">
                    <div className="metrics flex gap-3">
                        <span className='followers flex gap-1 items-center'>
                            <i className="ri-group-line text-gray-500"></i>
                            <span>{followers}</span>
                        </span>
                        <span className='posts flex gap-1 items-center'>
                            <i className="ri-checkbox-multiple-blank-line text-gray-500"></i>
                            <span>{posts}</span>
                        </span>
                    </div>

                    <CardButton 
                        innerText={isFollowed ? 'Unfollow' : 'Follow'} 
                        icon={!isFollowed && <i className="ri-add-large-fill"></i>} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Card

