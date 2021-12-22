import React, { useEffect, useState, useContext} from "react";
import { ThemeContext} from './Themes';

function Twitter(props){
    const {posts, change} = props;

    const theme = useContext(ThemeContext)

    const [msgPost, setMsgPost] = useState('')
    const [statusPost, setStatusPost] = useState('')
    

    //ComponentDidMount
    useEffect(()=>{
        console.log('DidMount:', posts, 'Status:', change)
        setMsgPost(posts)
    },[]);

    //ComponentDidUpdate
    useEffect(() =>{
        console.log('componentWillUpdate', change)
        if(change == true){
            setStatusPost('Mudou')
        }     
    }, [change])


    return(
        <div>
            <h3 style={{background: theme.background, color: theme.color}}>
                Component Did Mount: {msgPost}
            </h3>
            <h3>
                Component Did Update: {statusPost}
            </h3>
        </div>
    );

}

export default (Twitter);