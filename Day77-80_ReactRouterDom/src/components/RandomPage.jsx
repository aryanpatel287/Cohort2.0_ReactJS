import React from 'react'
import { useParams } from 'react-router-dom'

const RandomPage = () => {
    let params = useParams()
    return (
        <div>
            This is {params.id} page
        </div>
    )
}

export default RandomPage
