import { useRouter } from 'next/router'

function Reveiw() {
    const router = useRouter();
    const productId = router.query.productId

    return (
        <div>
            <h2>All reveiw</h2>
        </div>
    )
}
export default Reveiw