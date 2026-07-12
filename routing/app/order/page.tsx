'use client'
import { useRouter } from "next/navigation";

function OrderProduct() {
    const router = useRouter();

    function handlePlaceOrder() {
        router.push("/")
        console.log("OrderPlaced")
    }
  return (
    <div>
        <h1>Order Product</h1>
        <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  )
}

export default OrderProduct