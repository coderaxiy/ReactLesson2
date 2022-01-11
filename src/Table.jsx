import React, { Component } from 'react'
import './Table.css'
import {data} from './data'


export default class Table extends Component {
    state = {
        data: data,
        id: '',
        name: '',
        age: '',
        address: '',
        status: '',
        nickname:'',
        univ:'',
        job:'',
        active: null,
    }
    render() {
        const onFilter=(e)=>{
            let res = data.filter((value)=> value.id.includes(e.target.value))
            this.setState({data: res})
  
        };
        // const onDelete =(id)=>{
        //     let res = this.state.data.filter((val)=> val.id !== id);
        
            
        
        const onEdit = (value, key)=>{
            if(key){
                this.setState({active: null})
            }
            else{
                this.setState({
                    active: value.id,
                    id: value.id,
                    name: value.name,
                    age: value.age,
                    address: value.address,
                    status: value.status,
                    nickname: value.nickname,
                    univ: value.univ,
                    job: value.job,
            })
            }
            
        }
        const change =(e)=>{
            let {name} = e.target
            this.setState({
                [name]: e.target.value,
            })
        }
        const onSave = (e)=>{
            let newUser = {
                id: Date.now(),
                name: this.state.name,
                age: this.state.age,
                address: this.state.address,
                status: this.state.status,
                nickname: this.state.nickname,
                univ: this.state.univ,
                job: this.state.job
            }
            this.setState({data: [...data, newUser],
                name:'',
                age: '',
                address: '',
                status: '',
                nickname: '',
                univ: '',
                job: '',
            })
        }
        return(
                <div className="table">
                    <form>  
                    <select>
                        <option> id </option>
                        <option> name </option>
                        <option> address </option>
                    </select>
                    <input onChange={onFilter} placeholder='search...' />
                    </form>
                  
                  <table>
                      <thead>
                          <tr>
                              <th className="title">ID</th>
                              <th className="title">NAME</th>
                              <th className="title">AGE</th>
                              <th className="title">ADDRESS</th>
                              <th className="title">STATUS</th>
                              <th className="title">NICKNAME</th>
                              <th className="title">UNIV</th>
                              <th className="title">JOB</th>
                              <th className="title edit">EDIT</th>
                          </tr>
                      </thead>
                      <tbody>
                          
                              {this.state.data.map((value,index)=>{
                                  return(
                                <tr key={index}>
                                      <td> {this.state.active === value.id ? <input name='id' value={this.state.id} onChange={change}/> : value.id} </td>
                                      <td> {this.state.active === value.id ? <input name='name' value={this.state.name} onChange={change}/> :value.name}</td>
                                      <td>{this.state.active === value.id ? <input name='age' value={this.state.age} onChange={change}/> : value.age}</td>
                                      <td>{this.state.active === value.id ? <input name='address' value={this.state.address} onChange={change}/> : value.address}</td>
                                      <td>{this.state.active === value.id ? <input name='status' value={this.state.status} onChange={change}/> : value.status}</td>
                                      <td>{this.state.active === value.id ? <input name='nickname' value={this.state.nickname} onChange={change}/> : value.nickname}</td>
                                      <td>{this.state.active === value.id ? <input name='univ' value={this.state.univ} onChange={change}/> : value.univ}</td>
                                      <td>{this.state.active === value.id ? <input name='job' value={this.state.job} onChange={change}/> : value.job}</td>
                                      <td className='data'><p onClick= {()=>onEdit(value, this.state.active === value.id)}>{this.state.active === value.id ? <p onClick={onSave}>save<p>delete</p></p>:'edit'  }</p></td>
                                </tr>
                                  )
                              })}
                          </tbody>
                      </table>
                </div>
    )
}
}
