import OverhallOrders from "./ordersComponents/OverhallOrders"
import useTheme from '../../hooks/useTheme'
import OrdersWhiteCard from "./ordersComponents/OrdersList"

const Orders = () => {
  const {isDarkMode} = useTheme()
  return (
    <div className=' py-6 px-4'>
      <OverhallOrders isDarkMode={isDarkMode} />
      <br/>
      <OrdersWhiteCard isDarkMode={isDarkMode}/>
    </div>
  )
}

export default Orders