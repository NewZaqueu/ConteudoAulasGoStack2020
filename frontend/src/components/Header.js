import React, { Children } from 'react'

export default function Header({title, children}){
    return(
        <header>
            <h1>{title}</h1>
            {children}
        </header>
    )
}

//or

// export default function Header(props){
//     return(
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     )
// }