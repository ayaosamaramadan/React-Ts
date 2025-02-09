import { prodecutData } from "../types/app";
// const data = [
//     {  id: 1,
//         name: 'Product 1',
//         price: 100,
//     },
//     {
//         id: 2,
//         name: 'Product 2',
//         price: 200,
//     },
//     {
//         id: 3,
//         name: 'Product 3',
//         price: 300,
//     },
// ];

type productProp = {
     data: prodecutData["data"];
}
function Products(props:productProp) {
    return (
        <div>
            {/* {data.map((product) => (
                <div key={product.id} className="flex">
                    <h1 className="mr-5">{product.name}</h1>
                    <p>{product.price}</p>
                </div>
            ))} */}
            {props.data.map((product) => (
                <div key={product.id} className="flex">
                    <h1 className="mr-5">{product.name}</h1>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );   
}

export default Products;