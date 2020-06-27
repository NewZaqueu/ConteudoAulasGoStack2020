import React, { useState, useEffect } from 'react';
import api from './services/api'

import './App.css'
import background from './assets/background.jpg'

import Header from "./components/Header"


function App(){ //
    
    const [projects, setProjects] = useState([])

    useEffect( () => {
        api.get('projects').then(response => {
            setProjects(response.data)
        })
    }, [])
    
    async function handleprojects(){
        const response = await api.post('projects',{
            title: `Novo projeto ${projects.length}`,
            owner: "Diego Fernandes"
        })

        const newProject = response.data
                
        setProjects([...projects, newProject])
    }
    
    return(
        <>  
            <Header title="Home"/>

            <img width={500} src={background} />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
                <button type="button" onClick={handleprojects}>Adicionar Projeto</button>
            </ul>
            
        </>
    )
}



export default App;



