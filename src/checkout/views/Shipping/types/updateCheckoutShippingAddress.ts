/* tslint:disable */
// This file was automatically generated and should not be edited.

import { AddressInput } from "./../../../../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: updateCheckoutShippingAddress
// ====================================================

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_errors {
  __typename: "Error";
  field: string | null;
  message: string | null;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_user {
  __typename: "User";
  email: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_totalPrice_gross {
  __typename: "Money";
  amount: number;
  localized: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_totalPrice {
  __typename: "TaxedMoney";
  gross: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_totalPrice_gross;
  currency: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_subtotalPrice_gross {
  __typename: "Money";
  amount: number;
  localized: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  gross: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_subtotalPrice_gross;
  currency: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_billingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_billingAddress {
  __typename: "Address";
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_billingAddress_country;
  countryArea: string;
  phone: string | null;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_shippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_shippingAddress {
  __typename: "Address";
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_shippingAddress_country;
  countryArea: string;
  phone: string | null;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_availableShippingMethods_price {
  __typename: "Money";
  currency: string;
  amount: number;
  localized: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_availableShippingMethods {
  __typename: "ShippingMethod";
  id: string;
  name: string;
  price: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_availableShippingMethods_price | null;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_shippingMethod_price {
  __typename: "Money";
  currency: string;
  amount: number;
  localized: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_shippingMethod {
  __typename: "ShippingMethod";
  id: string;
  name: string;
  price: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_shippingMethod_price | null;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_shippingPrice_gross {
  __typename: "Money";
  amount: number;
  localized: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_shippingPrice {
  __typename: "TaxedMoney";
  gross: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_shippingPrice_gross;
  currency: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines_totalPrice_gross {
  __typename: "Money";
  amount: number;
  localized: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines_totalPrice {
  __typename: "TaxedMoney";
  gross: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines_totalPrice_gross;
  currency: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines_variant_price {
  __typename: "Money";
  amount: number;
  currency: string;
  localized: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines_variant_product_thumbnail {
  __typename: "Image";
  url: string;
  alt: string | null;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines_variant_product_thumbnail2x {
  __typename: "Image";
  url: string;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines_variant_product {
  __typename: "Product";
  id: string;
  name: string;
  thumbnail: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines_variant_product_thumbnail | null;
  thumbnail2x: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines_variant_product_thumbnail2x | null;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines_variant {
  __typename: "ProductVariant";
  stockQuantity: number;
  id: string;
  name: string;
  price: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines_variant_price | null;
  product: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines_variant_product;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines {
  __typename: "CheckoutLine";
  id: string;
  quantity: number;
  totalPrice: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines_totalPrice | null;
  variant: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines_variant;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout {
  __typename: "Checkout";
  token: any;
  id: string;
  user: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_user | null;
  totalPrice: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_totalPrice | null;
  subtotalPrice: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_subtotalPrice | null;
  billingAddress: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_billingAddress | null;
  shippingAddress: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_shippingAddress | null;
  email: string;
  availableShippingMethods: (updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_availableShippingMethods | null)[] | null;
  shippingMethod: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_shippingMethod | null;
  shippingPrice: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_shippingPrice | null;
  lines: (updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout_lines | null)[] | null;
}

export interface updateCheckoutShippingAddress_checkoutShippingAddressUpdate {
  __typename: "CheckoutShippingAddressUpdate";
  errors: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_errors[] | null;
  checkout: updateCheckoutShippingAddress_checkoutShippingAddressUpdate_checkout | null;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_errors {
  __typename: "Error";
  field: string | null;
  message: string | null;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_user {
  __typename: "User";
  email: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_totalPrice_gross {
  __typename: "Money";
  amount: number;
  localized: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_totalPrice {
  __typename: "TaxedMoney";
  gross: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_totalPrice_gross;
  currency: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_subtotalPrice_gross {
  __typename: "Money";
  amount: number;
  localized: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  gross: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_subtotalPrice_gross;
  currency: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_billingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_billingAddress {
  __typename: "Address";
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_billingAddress_country;
  countryArea: string;
  phone: string | null;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_shippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_shippingAddress {
  __typename: "Address";
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_shippingAddress_country;
  countryArea: string;
  phone: string | null;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_availableShippingMethods_price {
  __typename: "Money";
  currency: string;
  amount: number;
  localized: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_availableShippingMethods {
  __typename: "ShippingMethod";
  id: string;
  name: string;
  price: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_availableShippingMethods_price | null;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_shippingMethod_price {
  __typename: "Money";
  currency: string;
  amount: number;
  localized: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_shippingMethod {
  __typename: "ShippingMethod";
  id: string;
  name: string;
  price: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_shippingMethod_price | null;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_shippingPrice_gross {
  __typename: "Money";
  amount: number;
  localized: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_shippingPrice {
  __typename: "TaxedMoney";
  gross: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_shippingPrice_gross;
  currency: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines_totalPrice_gross {
  __typename: "Money";
  amount: number;
  localized: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines_totalPrice {
  __typename: "TaxedMoney";
  gross: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines_totalPrice_gross;
  currency: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines_variant_price {
  __typename: "Money";
  amount: number;
  currency: string;
  localized: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines_variant_product_thumbnail {
  __typename: "Image";
  url: string;
  alt: string | null;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines_variant_product_thumbnail2x {
  __typename: "Image";
  url: string;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines_variant_product {
  __typename: "Product";
  id: string;
  name: string;
  thumbnail: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines_variant_product_thumbnail | null;
  thumbnail2x: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines_variant_product_thumbnail2x | null;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines_variant {
  __typename: "ProductVariant";
  stockQuantity: number;
  id: string;
  name: string;
  price: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines_variant_price | null;
  product: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines_variant_product;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines {
  __typename: "CheckoutLine";
  id: string;
  quantity: number;
  totalPrice: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines_totalPrice | null;
  variant: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines_variant;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate_checkout {
  __typename: "Checkout";
  token: any;
  id: string;
  user: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_user | null;
  totalPrice: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_totalPrice | null;
  subtotalPrice: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_subtotalPrice | null;
  billingAddress: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_billingAddress | null;
  shippingAddress: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_shippingAddress | null;
  email: string;
  availableShippingMethods: (updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_availableShippingMethods | null)[] | null;
  shippingMethod: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_shippingMethod | null;
  shippingPrice: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_shippingPrice | null;
  lines: (updateCheckoutShippingAddress_checkoutEmailUpdate_checkout_lines | null)[] | null;
}

export interface updateCheckoutShippingAddress_checkoutEmailUpdate {
  __typename: "CheckoutEmailUpdate";
  errors: updateCheckoutShippingAddress_checkoutEmailUpdate_errors[] | null;
  checkout: updateCheckoutShippingAddress_checkoutEmailUpdate_checkout | null;
}

export interface updateCheckoutShippingAddress {
  checkoutShippingAddressUpdate: updateCheckoutShippingAddress_checkoutShippingAddressUpdate | null;
  checkoutEmailUpdate: updateCheckoutShippingAddress_checkoutEmailUpdate | null;
}

export interface updateCheckoutShippingAddressVariables {
  checkoutId: string;
  shippingAddress: AddressInput;
  email: string;
}
