import React from 'react'
import {Link, useHistory} from "react-router-dom"

function ProductUpdate({product,handleEdit}) {

    const history = useHistory()
    
    function handleDelete(e) {
      fetch(`/api/products/${product.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      e.reset()

    }
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* <h2 className="sr-only">Products</h2> */}
    
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                
                <button
                  // onClick={()}
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
                <Link to={`/updateproduct/edit/${product.id}`}>Update Item</Link>
                <button onClick={handleDelete}>Delete</button>
              </a>
          </div>
        </div>
      </div>
      )
    }