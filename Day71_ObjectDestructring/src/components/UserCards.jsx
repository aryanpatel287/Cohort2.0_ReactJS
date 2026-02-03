import React from 'react'
import Card from './Card'

const UserCards = () => {
    const users = [
        {
            id: 1,
            name: "Iron Man",
            username: "@ironman",
            verified: true,
            bio: "Genius billionaire engineer saving the world with tech.",
            image: "https://i.pinimg.com/736x/82/f6/5d/82f65d2298decaa7b73657ae3389df87.jpg",
            followers: 1250,
            posts: 320,
            isFollowed: true
        },
        {
            id: 2,
            name: "Captain America",
            username: "@captainamerica",
            verified: true,
            bio: "Super soldier and leader with an unbreakable shield.",
            image: "https://i.pinimg.com/736x/2c/dc/c3/2cdcc33265cd803ae6dff589fb5d38be.jpg",
            followers: 980,
            posts: 210,
            isFollowed: false
        },
        {
            id: 3,
            name: "Thor",
            username: "@godofthunder",
            verified: true,
            bio: "Asgardian god wielding the power of thunder.",
            image: "https://i.pinimg.com/736x/42/d8/9a/42d89a7eababa7f1aa3f46811f17d556.jpg",
            followers: 1100,
            posts: 180,
            isFollowed: true
        },
        {
            id: 4,
            name: "Black Widow",
            username: "@blackwidow",
            verified: true,
            bio: "Elite spy and master tactician.",
            image: "https://i.pinimg.com/736x/87/f9/93/87f9937588407e98221605bf617c5c01.jpg",
            followers: 860,
            posts: 195,
            isFollowed: false
        },
        {
            id: 5,
            name: "Hulk",
            username: "@hulk",
            verified: true,
            bio: "Scientist with unstoppable strength when angry.",
            image: "https://i.pinimg.com/736x/ba/0f/62/ba0f629ebb06c6c8c313ecd1158ed3d0.jpg",
            followers: 1320,
            posts: 90,
            isFollowed: true
        },
        {
            id: 6,
            name: "Spider-Man",
            username: "@spiderman",
            verified: true,
            bio: "Friendly neighborhood superhero with powers.",
            image: "https://i.pinimg.com/1200x/0c/6f/e8/0c6fe80e89b3810f669c88940ad9e5a1.jpg",
            followers: 1450,
            posts: 410,
            isFollowed: false
        },
        {
            id: 7,
            name: "Doctor Strange",
            username: "@doctorstrange",
            verified: true,
            bio: "Master of the mystic arts and protector of realities.",
            image: "https://i.pinimg.com/736x/f5/78/50/f578500f431ee57e4e07b040b21f8f80.jpg",
            followers: 770,
            posts: 160,
            isFollowed: true
        },
        {
            id: 8,
            name: "Black Panther",
            username: "@blackpanther",
            verified: true,
            bio: "King of Wakanda with enhanced abilities and tech.",
            image: "https://i.pinimg.com/1200x/6c/15/83/6c1583ecc6b9ff42bcf92f20853c9d42.jpg",
            followers: 920,
            posts: 230,
            isFollowed: false
        },
        {
            id: 9,
            name: "Scarlet Witch",
            username: "@scarletwitch",
            verified: true,
            bio: "Reality-altering powers driven by chaos magic.",
            image: "https://i.pinimg.com/736x/d6/59/69/d65969cf4f01d93874f87e967898441c.jpg",
            followers: 840,
            posts: 150,
            isFollowed: true
        },
        {
            id: 10,
            name: "Loki",
            username: "@loki",
            verified: true,
            bio: "God of mischief with a taste for chaos and tricks.",
            image: "https://i.pinimg.com/736x/5a/6c/a4/5a6ca453c0eb55ab1eef687f7c06f8ac.jpg",
            followers: 1010,
            posts: 275,
            isFollowed: false
        }
    ];
    return (
        <div className='p-4 bg-[#F5F5F5] flex gap-4 flex-wrap'>
            {users.map((e) => {

                return <Card userData={e} />
            })}
        </div>
    )
}

export default UserCards
