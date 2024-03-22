import { useEffect, useState } from "react";
import{database} from './config'
import './table.css'
import {addDoc, collection, doc, getDocs} from 'firebase/firestore'
function Fire()
{
    const [fname,setFname]= useState('');
    const [lname,setLname]=useState('');
    const [val,setValue]= useState([]);
    const[show,setShow]=useState('');
    const value = collection(database,"demo")
    const handlecreate=async()=>
    {
        await addDoc(value,{name1:fname,name2:lname})
    }

    const handleDelete=async(id)=>
    {
        const deleteval=doc()
    }
    useEffect(()=>
    {
        const getdata= async()=>
        {
            const dbval =await getDocs(value);
            setValue(dbval.docs.map(doc=>({...doc.data(),id:doc.id})))
            debugger;
        }
        getdata();
    })


    return(
        <div>
            <h1>Fire base component</h1>
            <h2>First Name
                <input value={fname} onChange={(e)=>setFname(e.target.value)} style={{marginRight:'8px'}}></input>
            </h2>
            <h2>Last Name
                <input value={lname} onChange={(e)=>setLname(e.target.value)} style={{marginRight:'8px'}}></input>
            </h2>
            {!show?<button onClick={handlecreate}>Add data</button>:
            <button onClick={handleupdate}>Updatedata</button>}
            {
                val.map(value=><div>
                    <table>
                            <thead>
                                <tr>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Action</td>
                                </tr>
                            </thead>  
                            <td>
                                <h1>{value.name1}</h1>    
                            </td> 
                            <td>
                            <h1>{value.name2}</h1>
                            </td>
                            <td>
                                <button onClick={handleDelete(value.id)}>Delete</button>
                                <button onClick={handleEdit(value.id,value.name1,value.name2)}>Edit</button>
                            </td>
                    </table>
                </div>)
            }
        </div>
    )
}
export default Fire;