import { Fragment ,useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import GithubContext from "../context/github/GithubContext"
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa"
import { Link } from "react-router-dom"
import Spinner from "../components/layout/Spinner"
import Repos from "../components/repos/Repos"

const User = ({match}) => {
    const params = useParams()
    const {getUser, user, loading, getUserRepos, repos} = useContext(GithubContext)
    useEffect(() =>{
        getUser(params.login)
        getUserRepos(params.login)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
      } = user;

    if(loading){
       return <Spinner/>
    }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
            <div className="mb-4">
            <Link to='/' className='btn btn-light bg-red-600'>
                <span style={{color:'yellow'}}>Go To Search</span>
            </Link>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                <div className="custom-card-image mb-0 md:mb-0">
                    <div className="rounded-lg shadow-xl card image-full">
                        <figure>
                            <img src={avatar_url} alt="" />
                        </figure>
                        
                    </div>
                    <div className="card-body justify-start ml-20">
                            <h2 className="card-title"
                            style={{
                                color:'white'
                            }}>
                                {name}
                            </h2>
                            <p style={{
                                color:'white'
                            }}>
                                {login}
                            </p>
                        </div>

                </div>
            <div className="col-span-2">
                <div className="mb-6">
                    <h1 className="text-3xl card-title">
                        {name}
                        <div className="ml-2 mr-1 badge badge-success">
                            {type}
                        </div>
                        {hireable && (
                            <div className="mx-1 badge badge-info">
                                Hireable
                            </div>
                        )}
                    </h1>
                    <p>
                        {bio}
                    </p>
                    <div className="mt-4 card-actions">
                        <a href={html_url} target="_blank" 
                        rel="noreferrer" className="btn btn-outline">
                            Visit Github Profile
                        </a>
                    </div>
                </div>
                <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                    {location && (
                        <div className="stats">
                            <div className="stats-title title-md">
                                <h5 className="ml-2">
                                    Location
                                </h5>
                                <div className="text-lg stat-value ml-2">
                                {location}
                                </div>
                            </div>
                            
                        </div>
                    )}
                    {blog && (
                        <div className="stats">
                            <div className="stats-title title-md">
                                <h5 className="ml-2">
                                    Website
                                </h5>
                                <div className="text-lg stat-value ml-2">
                                <a href={`https://${blog}`} 
                                target="_blank" rel="noreferrer">
                                    {blog}
                                </a>
                                </div>
                            </div>
                            
                        </div>
                    )}
                    {twitter_username && (
                        <div className="stats">
                            <div className="stats-title title-md">
                                <h5 className="ml-2">
                                    Twitter
                                </h5>
                                <div className="text-lg stat-value ml-2">
                                <a href={`https://twitter.com/${twitter_username}`} 
                                target="_blank" rel="noreferrer">
                                    {twitter_username}
                                </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
            <div className="stat">
            <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl"/>
            </div>
            <div className="stat-title pr-5">
                Followers
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
                {followers}
            </div>
            </div>

            <div className="stat">
            <div className="stat-figure text-secondary">
                <FaUserFriends className="text-3xl md:text-5xl"/>
            </div>
            <div className="stat-title pr-5">
                Following
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
                {following}
            </div>
            </div>

            <div className="stat">
            <div className="stat-figure text-secondary">
                <FaCodepen className="text-3xl md:text-5xl"/>
            </div>
            <div className="stat-title pr-5">
                Public Repos
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_repos}
            </div>
            </div>


            <div className="stat">
            <div className="stat-figure text-secondary">
                <FaStore className="text-3xl md:text-5xl"/>
            </div>
            <div className="stat-title pr-5">
                Public Gists
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_gists}
            </div>
            </div>


        </div>
    </div>
    <Repos repos={repos} />
</>
  )
}

export default User

















// import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa"
// import { Link } from "react-router-dom"
// import Spinner from "../components/layout/Spinner"
// import { Fragment, useContext, useEffect } from "react"
// import { useParams } from "react-router-dom"
// import GithubContext from "../context/github/GithubContext"

// const User = () => {
//     const params = useParams()
//     const {getUser, user} = useContext(GithubContext)
//     useEffect(()=>{
//         getUser(params.login)
//     },[])

//     // const {
//     //     name,
//     //     company,
//     //     avatar_url,
//     //     location,
//     //     bio,
//     //     blog,
//     //     login,
//     //     html_url,
//     //     followers,
//     //     following,
//     //     public_repos,
//     //     public_gists,
//     //     hireable
//     //   } = getUser;
    

//     // if(!loading){
//     //     return <Spinner/>
//     // }

//   return (
//       <>
//       <div>
//         {user.id}
//       </div>
//         {/* <div className="w-full mx-auto lg:w-10/12">
//             <div className="mb-4">
//             <Link to='/' className='btn btn-light'>
//                 {login}
//             </Link>
//             </div>

//             <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
//                 <div className="custom-card-image mb-6 md:mb-0">
//                     <div className="rounded-lg shadow-xl card image-full">
//                         <figure>
//                             <img src={avatar_url} alt="" />
//                         </figure>
//                     </div>
//                 </div>
//             </div>

//         </div> */}
//       </>
//   )
// }

// export default User
