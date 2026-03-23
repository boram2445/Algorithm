// 🔁 복습 필요 (3/26)(3/30)
function isAvailableToOrder(menus, orders) {
  const menuSet = new Set(menus);

  for (let orderItem of orders) {
    if (!menuSet.has(orderItem)) {
      return false;
    }
  }
  return true;
}

// Main execution
const shopMenus = ["만두", "떡볶이", "오뎅", "사이다", "콜라"];
const shopOrders = ["오뎅", "콜라", "만두"];

const result = isAvailableToOrder(shopMenus, shopOrders);
console.log(result);
