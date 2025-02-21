// import { Badge } from "@/components/ui/badge"

// export function ProductList({ products }) {
//   return (
//     <div className="mt-4">
//       <h3 className="font-semibold mb-2">Products</h3>
//       <ul className="space-y-2">
//         {products.map((product) => (
//           <li key={product.sku} className="flex justify-between items-center">
//             <div>
//               <span className="font-medium">{product.name}</span>
//               <span className="text-sm text-muted-foreground ml-2">({product.sku})</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Badge variant={product.status === "Delivered" ? "default" : "secondary"}>{product.status}</Badge>
//               {product.refundId && (
//                 <span className="text-sm text-muted-foreground">
//                   Refunded: ${product.refundAmount.toFixed(2)} (ID: {product.refundId})
//                 </span>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

import React from 'react'

type Props = {}

const ProductList = (props: Props) => {
  return (
    <div>ProductList</div>
  )
}

export default ProductList


