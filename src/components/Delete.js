import React, {useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Delete =  () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const deleteTodo = async ()=>{
        try{
            await axios.delete(`http://localhost:3500/users/${id}`)
            alert('deleted successfully')
        } catch (err){
            alert(err)
        } finally{
            navigate('/')
        }
    }

      deleteTodo()
    
    
}

export default Delete