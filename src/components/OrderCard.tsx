import { Package, Phone, MapPin, IndianRupee, User, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ProgressTracker } from "./ProgressTracker"
import { Button, Card, CardHeader } from "@nextui-org/react"
import { CardContent, CardTitle } from "./ui/card"
import { Product } from "./Nav"
import { PdfGenerator } from "./PdfGenerator"
import { useState } from "react"
import toast from "react-hot-toast"
import { Separator } from "./ui/separator"
import { cn } from "@/lib/utils"
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

const order = {
  orderId: "INV123",
  orderPrice: 250,
  items: "3 items",
  status: "Paid",
  products: [
    { name: "Kurti", price: 100 },
    { name: "Saree", price: 150 },
  ],
}

interface OrderStatus {
  status: "ordered" | "packed" | "shipped" | "out_for_delivery" | "delivered"
  label: string
  icon: React.ReactNode
}

const orderStatuses: OrderStatus[] = [
  { status: "ordered", label: "Ordered", icon: <Package className="h-4 w-4" /> },
  { status: "packed", label: "Packed", icon: <Package className="h-4 w-4" /> },
  { status: "shipped", label: "Shipped", icon: <Package className="h-4 w-4" /> },
  {
    status: "out_for_delivery",
    label: "Out for Delivery",
    icon: <Package className="h-4 w-4" />,
  },
  {
    status: "delivered",
    label: "Delivered",
    icon: <Package className="h-4 w-4" />,
  },
]


export function OrderCard({ order }:OrderCardProps) {
  const currentStatusIndex = orderStatuses.findIndex((s) => s.status === "out_for_delivery")

  const handleSuccess = () => {
    toast.success(`Invoice for Order #${order.orderId} has been downloaded.`)
  }

  const handleError = () => {
    toast.error("Failed to generate invoice. Please try again.")
  }

  return (
    /* <Card>
      <CardHeader>
        <CardTitle className="flex justify-between gap-3">
          <span>Order #{order?._id}</span>
          <Badge variant="warning">{order?.status}</Badge>
        </CardTitle>
        <PdfGenerator order={order1} onSuccess={handleSuccess} onError={handleError} />
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
        <ProductList products={order?.products} /> 
      </CardContent>
    </Card>
    */
    <Card className="w-full max-w-4xl p-6 space-y-6">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold tracking-tight">Order #{order.orderId}</h2>
          <Badge variant={status === "delivered" ? "default" : "secondary"} className="capitalize">
            {status.replace("_", " ")}
          </Badge>
        </div>
      </div>
      <PdfGenerator order={order} onSuccess={handleSuccess} onError={handleError} />
    </div>

    <div className="grid sm:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <User className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div>
            {/* <p className="font-medium">{customer.name}</p> */}
            <p className="font-medium">Abhay Donga</p>
            {/* <p className="text-sm text-muted-foreground">{customer.email}</p> */}
            <p className="text-sm text-muted-foreground">abhaydonga007@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
          <p className="text-sm">+91 1234567890</p>
          {/* <p className="text-sm">{customer.phone}</p> */}
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
          {/* <p className="text-sm">{customer.address}</p> */}
          <p className="text-sm">D2-201, Opera Palm, Pasodara Patiya, Surat, 395008</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Items</span>
          <span className="font-medium">3</span>
          {/* <span className="font-medium">{items}</span> */}
        </div>
        <Separator />
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Total Amount</span>
          <span className="font-medium">₹ 1500</span>
          {/* <span className="font-medium">₹{total.toLocaleString()}</span> */}
        </div>
      </div>
    </div>

    <div className="relative mt-8">
      <div className="absolute top-5 left-0 w-full h-0.5 bg-muted" />
      <div
        className="absolute top-5 left-0 h-0.5 bg-primary transition-all duration-500"
        style={{
          width: `${(currentStatusIndex / (orderStatuses.length - 1)) * 100}%`,
        }}
      />
      <div className="relative grid grid-cols-5 gap-2">
        {orderStatuses.map((orderStatus, index) => {
          const isActive = index <= currentStatusIndex
          return (
            <div key={orderStatus.status} className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "w-10 h-10 rounded-full border-2 flex items-center justify-center bg-background transition-colors",
                  isActive ? "border-primary text-primary" : "border-muted text-muted-foreground",
                )}
              >
                {orderStatus.icon}
              </div>
              <span className={cn("text-xs text-center", isActive ? "text-foreground" : "text-muted-foreground")}>
                {orderStatus.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  </Card>
  )
}

