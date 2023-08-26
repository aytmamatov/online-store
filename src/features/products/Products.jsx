import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./productsSlice"
import { STATUS } from "../../constants/status"

function Products() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.items)
  const status = useSelector(state => state.products.status)

  useEffect(() => {
    if (status == STATUS.IDLE) {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold text-center">Products</h2>
      <div className="flex flex-wrap justify-center">
        {
          products.map((product) => {
            return <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-md bg-white m-4">
              <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base mb-2">${product.price}</p>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {product.category}
                </span>
                <div className="flex items-center mt-2">
                  <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0l2.39 6.09h5.71l-4.57 3.91 1.9 5.11L10 12.72l-4.43 2.39 1.91-5.11L0.9 6.09H6.61z" /></svg>
                  <span className="ml-1">{product.rating.rate} ({product.rating.count})</span>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Products