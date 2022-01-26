import { useRouter } from 'next/router'

function Reveiw() {
    const router = useRouter();
    const productId = router.query.productId
    const reveiwId = router.query.reveiwId

    return (
        <div>
            <h2>Reveiw {reveiwId} for productId {productId} </h2>
        </div>
    )
}
export default Reveiw