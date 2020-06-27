import React, {useEffect, useState} from 'react'
import {SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity, View } from 'react-native'

import api from '../services/api'

export default function App(){

    const [projects,setProjects] = useState([]);

    useEffect( () => {
        api.get('projects').then(response => {
            setProjects(response.data)
        })
    },[])

    async function handleProjects(){
        const response = await api.post('projects',{
            title:`From Backend ${projects.length}`,
            owner: "Zaqueu Macedo Fernandes"
        })
        const newProject = response.data
        setProjects([...projects,newProject])
    }

    const idLastObject = projects.length === 0 ? -1 : projects[projects.length -1].id

    
  // 

    async function removeLastProject(){
        console.log(idLastObject)
        if (idLastObject === -1){ return ""}
        // setProjects([projects.filter(project => project ==="")])
        const response = await api.delete(`projects/${idLastObject}`)
        setProjects(projects.filter( project => project.id !== idLastObject))
    }



    return (
        <>
        <StatusBar barStyle='light-content' backgroundColor='#7159c1'/>
        <SafeAreaView style={styles.container}>

        <FlatList 
            style={styles.list}
            data={projects}
            keyExtractor={ project => project.id}
            renderItem={ ({item: project}) => (
                <Text style={styles.h1}>{project.title}</Text>
            )}
        />    
        <View style={styles.containerButtons}>
        <TouchableOpacity
            style={styles.button}
            onPress={handleProjects}
        >
                <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>        


        <TouchableOpacity
            style={styles.button}
            onPress={() => { removeLastProject () }}
        >
                <Text style={styles.buttonText}>Remover</Text>
        </TouchableOpacity>        
        
        </View>

        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#7159c1",
    },
    list:{
        marginTop:25,
    },
    h1: {
        fontSize:15,
        textTransform:'uppercase',
        fontWeight:'bold',
        color:"#fff",
        textAlign:"center",
        paddingBottom:15,
        borderBottomColor:"rgba(0,0,0, .2)",
        borderBottomWidth:2

    },
    containerButtons:{
        padding:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"
    },
    button:{
        borderWidth:3,
        backgroundColor:'#FFF',
        padding:10,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"

    },
    buttonText: {
        fontWeight:"bold",
        fontSize:20,
    }
})
