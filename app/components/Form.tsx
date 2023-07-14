"use client";

import { useForm } from "react-hook-form";
import useCardData from "../hooks/useCardData";
import { useEffect } from "react";
import InputMask from "react-input-mask";
import Button from "./Button";
import useModal from "../hooks/useModal";

export type Inputs = {
  cardHolder: string;
  cardNumber: string;
  month: number;
  year: number;
  cvc: number;
};

const Form = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const data = useCardData();
  const modal = useModal();

  const onSubmit = (values: Inputs) => {
    data.setCardData(values);
    modal.onOpen();
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (value) {
        data.setCardData(value as Inputs);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, data]);

  const minYear = Number(new Date().getFullYear().toString().substring(2));
  const maxYear = Number(minYear) + 5;

  const errorClass =
    "w-full h-10 p-3 rounded-md border border-red placeholder:text-lightGrayishViolet focus:outline-none";
  const normalBorderClass =
    "w-full h-10 p-3 rounded-md border placeholder:text-lightGrayishViolet border-lightGrayishViolet focus:outline-none";

  return (
    <div className="desktop:w-[345px] desktop:p-0 p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-start">
          <label className="text-[11px] mb-2 tracking-widest">
            CARDHOLDER NAME
          </label>
          <input
            className={errors.cardHolder ? errorClass : normalBorderClass}
            placeholder="e.g. Jane Appleseed"
            type="text"
            {...register("cardHolder", {
              required: "This field is required",
              pattern: {
                value: /[A-Za-z]$/,
                message: "Wrong format, letters only",
              },
            })}
          />
          <div className="text-red text-sm">
            {errors.cardHolder && errors.cardHolder.message}
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label className="text-[11px] mb-2 mt-4 tracking-widest">
            CARD NUMBER
          </label>

          <InputMask
            mask="9999 9999 9999 9999"
            alwaysShowMask={false}
            maskPlaceholder={""}
            className={errors.cardNumber ? errorClass : normalBorderClass}
            placeholder="e.g. 1234 5678 9123 0000"
            {...register("cardNumber", {
              required: "This field is required",
              validate: (value) => {
                const regex = new RegExp(
                  /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/
                );
                return (
                  regex.test(value.replaceAll(/[ -]/g, "")) ||
                  "Enter valid card number"
                );
              },
            })}
          />

          <div className="text-red text-sm">
            {errors.cardNumber && errors.cardNumber.message}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col items-start">
            <label className="text-[11px] mb-2 mt-4 tracking-widest">
              EXP. DATE (MM/YY)
            </label>
            <div className="flex gap-2">
              <input
                className={
                  errors.month
                    ? `w-[70px] ${errorClass}`
                    : `w-[70px] ${normalBorderClass}`
                }
                placeholder="MM"
                {...register("month", {
                  max: {
                    value: 12,
                    message: "Invalid Month",
                  },
                  min: {
                    value: 1,
                    message: "Invalid Month",
                  },
                  maxLength: {
                    value: 2,
                    message: "Too many digits",
                  },
                  validate: (value) =>
                    value.toString().length !== 0 || "Can't be blank",
                })}
              />

              <input
                className={
                  errors.year
                    ? `w-[70px] ${errorClass}`
                    : `w-[70px] ${normalBorderClass}`
                }
                placeholder="YY"
                {...register("year", {
                  max: {
                    value: maxYear,
                    message: "Expiry year invalid",
                  },
                  min: {
                    value: minYear,
                    message: "Invalid Year",
                  },
                  maxLength: {
                    value: 2,
                    message: "Too many digits",
                  },
                  validate: (value) =>
                    value.toString().length !== 0 || "Can't be blank",
                })}
              />
              <div></div>
            </div>
            <div className="text-red text-sm">
              {errors.month && errors.month.message}
              {errors.year && !errors.month && errors.year.message}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-[11px] mb-2 mt-4 tracking-widest">CVC</label>
            <input
              className={
                errors.cvc
                  ? `w-full ${errorClass}`
                  : `w-full ${normalBorderClass}`
              }
              placeholder="e.g. 123"
              {...register("cvc", {
                max: {
                  value: 999,
                  message: "Invalid CVC",
                },
                min: {
                  value: 100,
                  message: "Invalid CVC",
                },
                maxLength: {
                  value: 3,
                  message: "Too many digits",
                },
                minLength: {
                  value: 3,
                  message: "Not enough digits",
                },
                validate: (value) =>
                  value.toString().length !== 0 || "Can't be blank",
              })}
            />
            <div className="text-red text-sm">
              {errors.cvc && errors.cvc.message}
            </div>
          </div>
        </div>
        <Button title="Confirm" />
      </form>
    </div>
  );
};

export default Form;
