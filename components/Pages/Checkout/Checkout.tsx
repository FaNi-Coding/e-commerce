"use client";
import Button from "@/components/UI/Button/Button";
import Section from "@/components/UI/Section/Section";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import ProductItem from "../Cart/ProductItem";
import { _useDispatch, _useSelector } from "@/app/hooks";
import {
  incrementAmount,
  decrementAmount,
  CartType,
  reset,
} from "@/redux/features/cart/cartSlice";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  zipCode: number;
  city: string;
  country: string;
};

const Checkout = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const dispatch = _useDispatch();
  const cart: CartType = _useSelector((state) => state.CartReducer.cart);

  return (
    <Section
      bgColor="transparent"
      dynamicStyles="max-width-container justify-center bg-tertiary"
    >
      <form
        className="grid grid-cols-[auto_35rem] gap-[3rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          id="checkoutl"
          className="py-[5.4rem] px-[4.8rem] sm:min-w-[73rem] bg-white rounded-[.8rem]"
        >
          <div className="space-y-12">
            <h3>Checkout</h3>
            <p className="subTitle text-primary">billing details</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block labelText">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    {...register("name")}
                    type="email"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="input"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block labelText">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    {...register("email")}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="input"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block labelText">
                  Phone number
                </label>
                <div className="mt-2">
                  <input
                    {...register("phoneNumber")}
                    type="text"
                    name="phone-number"
                    id="phone"
                    autoComplete="phone-number"
                    className="input"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <p className="subTitle text-primary">billing details</p>
                <label htmlFor="street-address" className="block labelText">
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    {...register("address")}
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="input"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="zip-code" className="block labelText">
                  Zip code
                </label>
                <div className="mt-2">
                  <input
                    {...register("zipCode")}
                    type="number"
                    name="zip-code"
                    id="zip-code"
                    autoComplete="given-name"
                    className="input"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="city" className="block labelText">
                  City
                </label>
                <div className="mt-2">
                  <input
                    {...register("city")}
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="family-name"
                    className="input"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block labelText">
                  Country
                </label>
                <div className="mt-2">
                  <input
                    {...register("country")}
                    type="text"
                    name="country"
                    id="country"
                    autoComplete="family-name"
                    className="input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="summary"
          className="p-[3.2rem] h-fit flex flex-col gap-[3.8rem] bg-white rounded-[.8rem]"
        >
          <h6>Summary</h6>
          {cart?.map((item) => (
            <li
              className="grid grid-cols-[6.4rem_1fr_auto] gap-[1.6rem]"
              key={item.id}
            >
              <ProductItem item={item}>
                <p className="body"> x {item.amount}</p>
              </ProductItem>
            </li>
          ))}
        </div>
      </form>
    </Section>
  );
};

export default Checkout;
