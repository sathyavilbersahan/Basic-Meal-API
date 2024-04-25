import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'

const Main = () => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  .then(res=>{
    setItems(res.data.meals)
  })
   .catch((err)=>{
    console.log(err)
    })
    },[])
 const itemsList=items.map(({strMeal,strMealThumb,idMeal})=>{   //by using map we are calling all the information

 
  return (
    <div>
      <section className='card'>
       <img src={strMealThumb} alt='meals'/>
       <section className='content'>
        <p>{strMeal}</p>
        <p >#{idMeal}</p>
       </section>
      </section>
    </div>
  );
});

 return <div className='items-container'>{itemsList}</div>

}
export default Main
