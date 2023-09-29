import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
// import axios from 'axios';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
    const initialStates = {
        users: [],
        user: {},
        repos:[],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialStates)

    // Get Initial Users but just for the Testing Purpose
    // Search Users
    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            } 
        })
        
        const {items} = await response.json();

        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    // clear Search User List
    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS',
        })
    }

    //Set Loading
    const setLoading = () => dispatch({type: 'SET_LOADING'})

    // Get Single User Data
    const getUser = async (login) => {
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            } 
        })

        if(response.status === 404){
            window.local = '/notfound'
        }
        else{        

            const data = await response.json();
            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        } // else-end
        
    }

//   // Get Repos
  const getUserRepos = async (login) => {
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        } 
    })
        const data = await response.json();
        console.log('1111');
        dispatch({
            type: 'GET_REPOS',
            payload: data,
        })

    // if(response.status === 404){
    //     window.local = '/notfound'
    // }
    // else{        

        // const data = await response.json();
        // dispatch({
        //     type: 'GET_REPOS',
        //     payload: data,
        // })
    // } // else-end
    
}



  
//   const getUserRepos = async username => {
//     setLoading();

//     const res = await axios.get(
//       `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
//     );

//     dispatch({
//       type: GET_REPOS,
//       payload: res.data
//     });
//   };




    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos:state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;


