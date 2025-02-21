import { Package, Phone, MapPin, IndianRupee, User, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ProgressTracker } from "./ProgressTracker"
import { Card, CardHeader } from "@nextui-org/react"
import { CardContent, CardTitle } from "./ui/card"
import { Product } from "./Nav"
export interface Order {
  _id: string,
  customerId: string;
  customerName: string;
  shippingAddress: string;
  customerEmail: string;
  customerPhone: string;
  orderPrice: number;
  items: number;
  status: string;
  products: Array<Product>;
  paymentId: string;
  orderId: string;
}
interface OrderCardProps {
  order: Order;
}

export function OrderCard({ order }:OrderCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between gap-3">
          <span>Order #{order?._id}</span>
          <Badge variant="warning">{order?.status}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{order?.customerName}</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{order?.customerEmail}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{order?.shippingAddress}</span>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{order?.customerPhone}</span>
          </div>
          <div className="flex items-center">
            <Package className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{order?.items} items</span>
          </div>
          <div className="flex items-center">
            <IndianRupee className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{order?.orderPrice}</span>
          </div>
        </div>
        <ProgressTracker status={order?.status as "Ordered" | "Packed" | "Shipped" | "Out for Delivery" | "Delivered"} />
        {/* <ProductList products={order?.products} /> */}
      </CardContent>
    </Card>
  )
}

