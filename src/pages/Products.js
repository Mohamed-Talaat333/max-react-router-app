import { Link } from "react-router-dom";

function ProductsPage() {
    const products = [
        { id: "p1", title: "product 1" },
        { id: "p2", title: "product 2" },
        { id: "p3", title: "product 3" }
    ]

    return (
        <>
            <h1>The Products Page</h1>

            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <Link to={item.id}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ProductsPage;