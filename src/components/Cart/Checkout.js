import React from 'react';
import classes from './Checkout.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  street: yup.string().required(),
  postal: yup.string().required(),
  city: yup.string().required(),
});

const Checkout = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    props.onConfirm({
      name: data.firstName,
      street: data.street,
      city: data.city,
      postalCode: data.postal,
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.control}>
        <label>First Name</label>
        <input {...register('firstName')} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div className={classes.control}>
        <label>Street </label>
        <input {...register('street')} />
        {errors.street && <p>{errors.street.message}</p>}
      </div>
      <div className={classes.control}>
        <label>Postal Code </label>
        <input {...register('postal')} />
        {errors.postal && <p>{errors.postal.message}</p>}
      </div>
      <div className={classes.control}>
        <label>City </label>
        <input {...register('city')} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <div>
          <input type="submit" />
        </div>
      </div>
    </form>
  );
};

export default Checkout;
