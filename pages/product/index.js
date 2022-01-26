import Link from 'next/link'
function productList({ productId = 100 }) {

    return (
        <div>
            <Link href="/"><a>Back</a></Link>
            <Link href="/product/1"><a>Product 1</a></Link>
            <Link href="/product/2"><a>Product 2</a></Link>
            <Link href="/product/3" replace><a>Product 3</a></Link>
            <Link href={`/product/${productId}`}><a>Product 100</a></Link>
        </div>
    )
}

export default productList