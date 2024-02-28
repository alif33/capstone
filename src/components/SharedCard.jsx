import { useDispatch } from "react-redux"
import { addToCart } from "../store/shop/action";

const SharedCard = ({ img, name, description, price }) => {
  const dispatch = useDispatch()

  const handleAddToCart = ({name, image, price})=>{
    console.log(name, image, price);
    dispatch(addToCart({
      name, image, price
    }))
  }
  return (
    <div className="card cursor-pointer col-span-4 card-compact w-96 bg-base-100 shadow-2xl shadow-slate-300">
      <figure>
        <img src={img} alt="Shoes" className="w-full h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="">{price}$</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart({name, image: img, price})} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SharedCard;
