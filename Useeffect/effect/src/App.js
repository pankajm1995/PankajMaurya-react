import {useEffect,useState} from 'react'
export default function App()
{
  const [data,setdata]=useState([])
  const [load,setload]=useState(false)
  const [err,seterr]=useState(false)
  const [page,setpage]=useState(1)
  useEffect(()=>{
    setload(true)
    seterr(false)
    function Fetchdata()
    {
      fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((res)=>res.json())
      .then((data)=>{
        setdata(data)
        seterr(false)
        setload(false)
      })
      .catch((err)=>{
        seterr(true)
        setload(false)
        console.log(err);
      })
    }
    Fetchdata()
  },[page])
 
  return load ? <h2>Loading...</h2> : err ? <h2>Something Went Wrong</h2>:(
    <div>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",backgroundColor:"cadetblue"}}>
    {data.map((el)=><div key={el.id} style={{border:"1px solid black",margin:"2px"}}>
      <h2>UserId:{el.id}</h2>
      <p>{el.title}</p>
      <p>{el.body}</p>
    </div>)}
</div>
<button onClick={()=>setpage(page-1)} disabled={page==1}><h3>Pre</h3></button>
<span>{page}</span>
<button onClick={()=>setpage(page+1)}><h3>Next</h3></button>
</div>
  )
}