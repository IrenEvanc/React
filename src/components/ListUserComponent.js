import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService'
import { Link } from 'react-router-dom'
import ArrowUp from './icons/ArrowUp'
import ArrowDown from './icons/ArrowDown'

const ListUserComponent = () => {

    const [users, setUsers] = useState([])
    const [directSort, setDirectSort] = useState(true)
    const [fieldDate, setfieldDate] = useState('')
    let sortDate;

    useEffect(() => {
      
        getAllUsers();
     
    }, [])

    const getAllUsers = () => {
        UserService.getAllUsers().then((response) =>{
            setUsers(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteUser = (userId) => {
        
        UserService.deleteUser(userId).then((response)=>{
            getAllUsers();

        }).catch(error=>{
            console.log(error);
        })
    }
     
    const sort = (field) => {
        directSort
        ?
        sortDate = users.concat().sort(
            (a, b) => {
                return a[field]>b[field] ? 1 : -1
            }
        )
        :
        sortDate = users.concat().reverse(
            (a, b) => {
                return a[field]>b[field] ? 1 : -1
            }
        )
        setUsers(sortDate);
        setDirectSort(!directSort);
        setfieldDate(field);
    }
    
    const Arrow = () => {
        return (
          directSort?<ArrowUp/>:<ArrowDown/>
        )
    }

   
  return (
    <div className='container'>
        <h2 className='text-center'>Список пользователей</h2>
        <Link to = "/add-user" className="btn btn-primary mb-2"> Добавить пользователя </Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th onClick={()=>(sort('id'))}>
                    Id{fieldDate==='id'?<Arrow/>:null}
                    </th>
                <th onClick={()=>(sort('firstName'))}>
                    First Name{fieldDate==='firstName'?<Arrow/>:null}
                    </th>
                <th onClick={()=>(sort('lastName'))}>
                    Last Name{fieldDate==='lastName'?<Arrow/>:null}
                    </th>
                <th onClick={()=>(sort('email'))}>
                    Email{fieldDate==='email'?<Arrow/>:null}
                    </th>
                <th >Actions</th>
            </thead>
            <tbody>
                {
                    users.map(
                        user =>
                        <tr key= {user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-info" to = {`/edit-user/${user.id}`} >Редактировать</Link>
                                <button className='btn btn-danger' onClick={()=> deleteUser(user.id)}
                                style={{marginLeft:"10px"}}>Удалить</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
       
    </div>
  )
}

export default ListUserComponent