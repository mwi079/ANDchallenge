import React from 'react'
import Profile from './Profile'

export default function List(props){
    return (
        props.profiles.map((profile)=>{
            return <Profile name={profile.name} title={profile.title}/>
        })
    )
}