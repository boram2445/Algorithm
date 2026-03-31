function main() {
  let shop_prices = [30000, 2000, 1500000];
  let user_coupons = [20, 40];

  console.log(
    "정답 = 926000 / 현재 풀이 값 = " +
      getMaxDiscountedPrice([30000, 2000, 1500000], [20, 40]),
  );

  console.log(
    "정답 = 485000 / 현재 풀이 값 = " +
      getMaxDiscountedPrice([50000, 1500000], [10, 70, 30, 20]),
  );

  console.log(
    "정답 = 1550000 / 현재 풀이 값 = " +
      getMaxDiscountedPrice([50000, 1500000], []),
  );

  console.log(
    "정답 = 1458000 / 현재 풀이 값 = " +
      getMaxDiscountedPrice([20000, 100000, 1500000], [10, 10, 10]),
  );
}

function getMaxDiscountedPrice(prices, coupons) {
  // 가격을 정렬한다.
  // 높은 할인율을 적용한다

  prices.sort((a, b) => b - a);
  coupons.sort((a, b) => b - a);

  let price_count = 0;
  let coupons_count = 0;
  let maxDiscountedPrice = 0;

  // 쿠폰 할인
  while (price_count < prices.length && coupons_count < coupons.length) {
    maxDiscountedPrice +=
      prices[price_count] * ((100 - coupons[coupons_count]) * (1 / 100));
    price_count += 1;
    coupons_count += 1;
  }

  // 원가 계산
  for (let i = price_count; i < prices.length; i++) {
    maxDiscountedPrice += prices[i];
  }
  return maxDiscountedPrice;
}

main();
