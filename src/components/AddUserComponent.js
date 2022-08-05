import React, {useEffect, useState} from 'react'
import { useNavigate, Link, useParams } from "react-router-dom"
import UserService from '../services/UserService'

const AddUserComponent = () => {

  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setemail] = useState('')
  const navigation =useNavigate();
  const {id} = useParams();

  const saveOfUpdateUser = (e)=> {
    e.preventDefault();
    const user = {firstName, lastName, email}

    if(id){
      UserService.updateUser(id, user).then((response)=>{
        navigation('/users')
      }).catch(error=>{
        console.log(error)
      })

    }else{
    
    UserService.createUser(user).then((response)=>{
      console.log(response.data)
      navigation('/users')
    }).catch(error =>{
      console.log(error)
    })
  }
  }

  useEffect(() => {
   
    UserService.getUserById(id).then ((response)=>{
      setfirstName(response.data.firstName)
      setlastName(response.data.lastName)
      setemail(response.data.email)
    }).catch(error =>{
      console.log(error)
    })
  

  }, [])
 
   const title = ()=>{
    if(id){
      return <h2 className='text-center'>Изменить данные</h2>
    }else{
      return <h2 className='text-center'>Добавить пользователя</h2>
    }
  }
  
  return (
    <div>
        <br></br>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              {
                title()
              }
              <div className='card-body'>
                <form>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Имя</label>
                    <input
                      type='text'
                      placeholder='Введите имя'
                      name='firstName'
                      className='form-control'
                      value={firstName}
                      onChange= {(e)=> setfirstName(e.target.value)}
                    ></input>
                  </div>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Фамилия</label>
                    <input
                      type='text'
                      placeholder='Введите фамилию'
                      name='lastName'
                      className='form-control'
                      value={lastName}
                      onChange= {(e)=> setlastName(e.target.value)}
                    ></input>
                  </div>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Имейл</label>
                    <input
                      type='text'
                      placeholder='Введите имейл'
                      name='email'
                      className='form-control'
                      value={email}
                      onChange= {(e)=> setemail(e.target.value)}
                    ></input>
                  </div>

                  <button className='btn btn-success' onClick={(e)=> saveOfUpdateUser(e)}>Сохранить</button>
                  <Link to = '/users' className='btn btn-danger'>Отмена</Link>
                </form>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default AddUserComponent