import { useRouter } from 'next/router'

function productDetail() {
    const router = useRouter();
    const productId = router.query.productId
    return (
        <div>
            <h2>Details about product {productId}</h2>
        </div>
    )
}
export default productDetail