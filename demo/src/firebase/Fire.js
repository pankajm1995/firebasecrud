import { useEffect, useState } from "react";
import{database} from './config'
import {addDoc, collection, getDocs} from 'firebase/firestore'
function Fire()
{
    const [fname,setFname]= useState('');
    const [lname,setLname]=useState('');
    const [val,setValue]= useState([]);

    const value = collection(database,"demo")
    const handlecreate=async()=>
    {
        await addDoc(value,{name1:fname,name2:lname})
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
            <button onClick={handlecreate}>Add data</button>
            {
                val.map(value=><div>
                    <table style={{border:'1px solid black'}}>
                    <thead>
                        <td>
                            <tr>
                            <h1>{value.name1}</h1>
                            <h1>{value.name2}</h1>
                            </tr>
                        </td>
                    </thead>
                    </table>
                </div>)
            }
        </div>
    )
}
export default Fire;