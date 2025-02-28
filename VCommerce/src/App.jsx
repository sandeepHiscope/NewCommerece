import './App.css'
import ProductCard from './Card'
// import image from "./src/assets/x.jpg";

const products = [
    { id: 1, name: "Laptop", image:"./src/assets/x.jpg", description: "High-performance laptop", price: "999" },
    { id: 2, name: "Smartphone", image: "./src/assets/x.jpg", description: "Latest smartphone model", price: "799" },
    { id: 3, name: "Headphones", image: "./src/assets/x.jpg", description: "Noise-canceling headphones", price: "199" },
    { id: 4, name: "Smartwatch", image: "./src/assets/x.jpg", description: "Feature-packed smartwatch", price: "299" },
    { id: 5, name: "Camera", image: "../src/assets/x.jpg", description: "Professional DSLR camera", price: "1200" },
    { id: 6, name: "Tablet", image: "./src/assets/x.jpg", description: "Portable and powerful tablet", price: "599" },
    { id: 7, name: "Tablet", image: "./src/assets/x.jpg", description: "Portable and powerful tablet", price: "599" },
    { id: 8, name: "Tablet", image: "./src/assets/x.jpg", description: "Portable and powerful tablet", price: "599" },
    { id: 9, name: "Tablet", image: "./src/assets/x.jpg", description: "Portable and powerful tablet", price: "599" },
    { id: 0, name: "Tablet", image: "./src/assets/x.jpg", description: "Portable and powerful tablet", price: "599" },
  ];


export default function App(){
  
  return (
    <>
     <div className="container">
      {
      products.map((product) => (
        <ProductCard 
                      key={product.id} 
                      name={product.name}
                      image={product.image}
                      description={product.description}
                      price={product.price}
        />
      ))
      }
    </div>
    </>
  )
}

