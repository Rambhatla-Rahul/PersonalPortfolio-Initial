import React from 'react'

function SkillsList({src,skill}) {
  return (
    <span>
        <img src={src} alt = {`${skill} icon`}/>
        <p>{skill}</p>
    </span>
  )
}

export default SkillsList
