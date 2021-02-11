import React from "react";

// 1. Import w/ redux  the bellow (1-3):
// id: id, // 1. product - item.id
//  price: price, //2.price - item.price
// arrayLength {basket.length} //3.quantity -originalquantity

//To Be Implemented:
export function helper_CEO_buyOneGetOne() {
  let originalPrice = "item.price"; //2.price - item.price
  let totalAmount = 10; //3.quantity -originalquantity
  let purchaseProduct = "item.id_GREENTEA"; // 1. product - item.id
  let newPrice;
  let newAmount;
  if (purchaseProduct == "item.id_GREENTEA") {
    newAmount = totalAmount * 2; //(add one extra to basket)
    newPrice = originalPrice * 0.5; //(half price)
  }
}

export function helper_COO_CTO_priceDroper() {
  let originalPrice = "item.price"; //2.price - item.price
  let totalAmount = 10; //3.quantity -originalquantity
  let purchaseProduct = "item.id_STRAWBERRY"; // 1. product - item.id
  let newStrawberryprice = 4.5;
  let arrayOfPricerDroperProductId = [];
  if (purchaseProduct == [arrayOfPricerDroperProductId] && totalAmount >= 3) {
    if (purchaseProduct == Coffee) {
      originalPrice = newprice * (2 / 3);
    } else if (purchaseProduct == Strawberry) {
      originalPrice = newStrawberryprice;
    } else {
      null;
    }
    // (mirar lo de bucles anidados para intentar transformar en 1 funcion )
  }
}

/* import { helper_CEO_buyOneGetOne } from ‘./helper’ */
// eg. of how to import in another component - subtotal
