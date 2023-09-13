function AddItemForm({handleSubmit, addNewProduct}){

    function handleSubmit(e){
      e.preventDefault()
  
      const newProduct = {
        name: e.target["name"].value,
        description: e.target["description"].value,
        sku: e.target["sku"].value,
        image: e.target["image"].value,
        detail: e.target["detail"].value,
        color: e.target["color"].value,
        size: e.target["size"].value,
        price: e.target["price"].value,
        status: e.target["status"].value,
        img: e.target["image"].value,
      }
  
      fetch('/api/products', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newProduct)
      })
      .then(res => res.json())
      .then(data => addNewProduct(data))
  
      e.target.reset()
    }
    return (
        <div className="ProductAddContainer">
            
            <form onSubmit={handleSubmit} className="contact_form_container">
                <input type="text" name="name" placeholder='Name'/>
                <input type="text" name="description" placeholder="Description" />
                <input type="text" name="sku" placeholder="Sku" />
                <input type="text" name="image" placeholder="Image" />
                <input type="text" name="detail" placeholder="Detail" />
                <input type="text" name="color" placeholder="Color" />
                <input type="text" name="size" placeholder="Size" />
                <input type="text" name="price" placeholder="Price" />
                <input type="text" name="status" placeholder="Status" />                
                <input type="text" name="image" placeholder="Image" />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
  }
  export default AddItemForm;