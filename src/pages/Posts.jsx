import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ListItemWithAvatar from "../components/ListItemWithAvatar";
import { Button, Card, List } from "@material-tailwind/react";
import NavBar from '../components/NavBar';
const PostPage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('sessionToken')
    if (!token) {
        navigate('/')
    }
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);
    const getPosts = async () => {
        const endpoint = `http://127.0.0.1:8999/api/posts`;
        try {
            const response = await fetch(endpoint,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    },
                })
            if (response.status === 200) {
                const data = await response.json()
                setLoading(false)
                setPosts(data)
            }
            if (response.status === 401) {
                alert("Username or password is not correct")
                navigate('/');
            }
            if (response.status > 401) {
                alert("Username or password is not correct")
                navigate('/');
            }
        } catch (error) {
            alert("Internal server error")
            navigate('/')
        }
    }
    useEffect(() => {
        getPosts();
    }, [])

    return (
        <>
        <NavBar />
            <Card className="w-96">
                <List> {
                    loading ? (
                        <p> Loading...</p>
                    ) : posts.map(post => {
                        return (
                            <>
                                <ListItemWithAvatar item={{...post, type: 'post'}} >
                                </ListItemWithAvatar>
                                <Button class="h-5 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                
                                </Button>
                            </>
                        )
                    }
                    )}

                </List>
            </Card >
        </>
    )
}

export default PostPage