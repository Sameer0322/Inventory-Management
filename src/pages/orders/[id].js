import { useRouter } from 'next/router';
import OrderDetails from '../../components/OrderDetails';
import { orders } from '../../data/data.json'; 

const OrderDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const order = orders.find((order) => order.id === parseInt(id));

  if (!order) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <OrderDetails order={order} />
    </div>
  );
};

export default OrderDetailsPage;
