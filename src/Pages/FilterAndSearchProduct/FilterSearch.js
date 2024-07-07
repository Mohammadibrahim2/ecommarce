import React, { useContext, useEffect, useState } from "react";
import useCategory from "../../hooks/useCategory";
import { Checkbox, Radio } from 'antd';
import axios from "axios";
import { useCart } from "../../Context/CartProvider/Cart";
import { toast } from "react-hot-toast";
import { Prices } from "../Component/Price/Prices";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
const FilterAndSearchProduct = () => {
  // const categories=useCategory()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useCart()
  const [checked, setChecked] = useState([])
  const [radio, setRadio] = useState([])
  const [dropDown, setDropDown] = useState([])
  const [subId,setsubId]=useState([])
const navigate=useNavigate()
const {sub}=useContext(AuthContext)



  //get category
  const getcategories = async () => {
    try {

      const { data } = await axios.get('https://updateecommarce-server.vercel.app/category/get-categories')
      setCategories(data?.categories)
    }
    catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    getcategories();
  }, [])
  //fuction

  const handleSubCat=(id)=>{
    setsubId(id)
  }
  const handleFilter = (value, id,subId) => {
   
    let all = [...checked]
    if (value) {
      all?.push(id)

    }
    else {
      all = all?.filter(c => c !== id)
    }

    setChecked(all)


  }
  //category end


  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`https://updateecommarce-server.vercel.app/product/get-product`)
      setProducts(data?.products)
    }
    catch (error) {
      console.log(error)
    }


  }
  useEffect(() => {
    if (!checked.length  || !radio.length  ) getAllProducts()

  }, [checked.length, radio.length ])

  useEffect(() => {
    if (checked.length || radio.length  ) filterProduct()

  }, [checked, radio])
  //get filtereed products
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("https://updateecommarce-server.vercel.app/product/product-filter", {checked, radio,subId})
      setProducts(data?.products)
    }
    catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      {/* <div className="subcategories mt-8 w-full flex flex-row justify-around">
        {
          sub&&
          sub.map(s=><button   onClick={() => handleSubCat(s._id)}
            className="text-md rounded-full text-orange border px-4 py-2 border-orange-500  ">
              {s?.name}</button>)
        }
        

      </div> */}
      < div className="flex lg:flex-row  lg:mt-8">


        <div className="leftside w-[20%]">

          {/* category filtering */}
          <div className="rounded-lg bg-zinc-100 p-2 px-4">
            <h1 className="text-xl font-semibold mb-2">Category</h1>
            <div className=" h-[1px] bg-orange-500"></div>
            <div className="category flex flex-col  my-4">
              {categories&&
                categories?.map(category =>
                  <Checkbox key={category?._id}
                    className="mt-2 font-semibold"
                    onChange={(e) => handleFilter(e.target.checked, category?._id)
                    }>
                    {category?.name}

                  </Checkbox>)
              }


            </div>
          </div>

          {/* category filtering */}
          {/* price filtering */}
          <div className="rounded-lg bg-zinc-100 p-2 px-4 my-4">
            <h1 className="text-xl font-semibold my-2">Price Range</h1>
            <div className=" h-[1px] bg-orange-500"></div>
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices.map(price =>
                <div key={price._id}>
                  <Radio value={price?.array} className="mt-2 font-semibold">{price?.name}</Radio>
                </div>)}
            </Radio.Group>
          </div>
          {/* price filtering */}

        </div>
        <div className="rigthside w-[70%] ml-4 mt-8">
          <h1></h1>
          {/* <div className="sorting">
            <select className="select w-full max-w-xs" onChange={(e)=>setDropDown(e.target.value)} >
            <option value="">Default</option>
              <option value="high" className="my-4" >Price Low To High</option>
              <option value="low" >Price High To Low</option>
            </select>
          </div> */}
         

          <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 py-4">
            {products&&
              products?.map(item => <div class="card card-box  bg-white hover:shadow-2xl " key={products?._id}>
                <h2 className="upper bg-orange-600 text-white px-2 text-xs rounded-md">{5} % off</h2>
                <figure class="px-10 pt-10" onClick={()=>navigate(`/product/${item._id}`)}>
                <img src={`https://updateecommarce-server.vercel.app/product/product-photo/${item?._id}`} 
                    alt="Shoes" className="w-full h-full" />
                </figure>
                <div class="py-7 px-2 items-center text-center text-black">
                  <h2 class=" text-sm font-semibold ">{item?.name}</h2>
                  <h2 class=" text-sm font-semibold text-orange-500 ">{item?.category?.name}</h2>
                  <h2 class=" text-sm font-semibold text-orange-500 ">{item?.subcategory?.name}</h2>

                  <div className="flex flex-row justify-around py-3">
                    <span>{item?.price} tk</span>
                 
                  </div>
                  <div class=" flex flex-row-reverse justify-around font-semibold w-full" >

                    <label className="px-3  border border-orange-700 text-orange-500 rounded-md" style={{ fontSize: "10px", paddingTop: "4px", paddingBottom: "4px" }}
                      onClick={() => {
                        setCart([...cart, item])
                        localStorage.setItem('cart', JSON.stringify([...cart, item]))
                        toast.success("your product is adding ")
                      }}>Add to cart</label>

                    <button
                      className="px-2 py bg-orange-600 text-white border rounded-md"
                      style={{ fontSize: "10px", paddingTop: "4px", paddingBottom: "4px" }}>Buy Now</button>
                  </div>
                </div>
              </div>)
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default FilterAndSearchProduct;