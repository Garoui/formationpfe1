import React from 'react'

export default function Hello(props) {
  console.log(props)
    return (
    <div>
      hello <h1>{props.etudiant.nom} |   {props.etudiant.prenom} |  {props.etudiant.age}</h1>
    </div>
  )
}
