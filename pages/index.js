import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Home() {

  const router = useRouter()
  const handleClick = () => {
    console.log('Placing your order')
    router.push('/product')
    //    router.replace('/product')
  }
  return (
    <div>
      main page
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>

      <button onClick={handleClick}>
        Place Order
      </button>
    </div>
  )
}
