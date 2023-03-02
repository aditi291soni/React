import React,{useState} from 'react'
import css from './App.module.css'

const App = () => {
    const [list, setlist] = useState([]);
    const [singleitem, setsingleitem] = useState("");
    const changeHandler=(e)=>{
setsingleitem(e.target.value )
console.log(singleitem)
    }
    const deleteHandler=(ids)=>{
      let deletes=list.filter((e,id)=>{
        return id!==ids
        })
        setlist(deletes)
    }
    const submitHandler=(e)=>{
       
        if(singleitem.length>0){

            setlist([...list,{desc:singleitem,date:new Date(Date.now()).toLocaleString()}])
            setsingleitem("")
        }
     
            }
  return (
    <div className={css.main}>
      <div className={css.box}>
    <h2 style={{margin:"20px"}}>TODO LIST</h2>
   
    <div className={css.semi}> 
       <div onClick={submitHandler} className={css.button}>+</div>
        <textarea onChange={changeHandler} value={singleitem} name='desc' placeholder='Enter Your Task'>

        </textarea>
        </div>
        {
          list&&list.map((e,id)=>(
               <div className={css.map}>
<p>{e.desc}</p>
<p><i onClick={()=>deleteHandler(id)} class="ri-delete-bin-5-fill"></i></p>

               </div>
            ))
        }
        

      </div>
    </div>
  )
}

export default App
