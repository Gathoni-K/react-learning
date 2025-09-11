/*
States to manage:

items (array of objects with name, price, quantity)
taxRate (number, default 0.08)
discountCode (string)
isDiscountValid (boolean)

Features to implement:

Add/remove items
Change quantities
Apply discount codes ("SAVE10" = 10% off, "SAVE20" = 20% off)
Calculate subtotal, tax, discount, and final total
Show item count in cart

*/
import { useState } from "react";

// export default ShoppingCart(){
//     const [items, ] = useState();
// }