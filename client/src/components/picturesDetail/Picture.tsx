import React from 'react'
import vacationImg from '../../assets/images/vacation.jpg'

interface Props {
    
}

const Picture = (props: Props) => {
    return (
        <div>
            <div>
                <img src={vacationImg} alt="On Vacation" />
            </div>

            <div>
                <h2>Title</h2>
                <p>Description</p>
                <p>Date</p>
                <p>Location</p>
                <ul>
                    <li>People in it</li>
                    <li>People in it</li>
                    <li>People in it</li>
                    <li>People in it</li>
                </ul>
                <button>Like</button>
            </div>
        </div>
    )
}

export default Picture
