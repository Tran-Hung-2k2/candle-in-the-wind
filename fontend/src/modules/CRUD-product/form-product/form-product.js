import React, { useEffect } from 'react';
import style from './form-product.module.scss';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import Input from '~/shared/components/input/input';
import { minLengthField, positiveNumber, requiredField } from '~/shared/utils/validator';
import productService from '~/shared/services/product.service';

const cx = classNames.bind(style);

function FormProduct({ formData, handleSubmitForm, title }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ID_Category: formData?.ID_Category,
      title: formData?.title,
      price: formData?.price,
      discount: formData?.discount,
      quantity: formData?.quantity,
      description: formData?.description,
    },
  });

  const onSubmitForm = (data) => {
    if (formData?.ID_Product) {
      handleSubmitForm(data, formData?.ID_Product);
    } else {
      const formDataApi = new FormData();
      const fileList = data.productImages;
      for (let index = 0; index < fileList.length; index++) {
        const file = fileList[index];
        formDataApi.append('productImages', file);
      }
      formDataApi.append('ID_Category', data.ID_Category);
      formDataApi.append('title', data.title);
      formDataApi.append('description', data.description);
      formDataApi.append('discount', data.discount);
      formDataApi.append('quantity', data.quantity);
      formDataApi.append('price', data.price);
      handleSubmitForm(formDataApi, formData?.ID_Product);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <form className={cx('form')} onSubmit={handleSubmit((data) => onSubmitForm(data))}>
        <div className={cx('form-group')}>
          <label>Danh mục sản phẩm</label>
          <select {...register('ID_Category', { required: requiredField() })}>
            <option value="1">Nến thơm</option>
            <option value="2">Tinh dầu</option>
            <option value="3">Sáp thơm</option>
          </select>
        </div>
        <div className={cx('form-group')}>
          <Input
            label="Tên sản phẩm"
            formControl="title"
            placeholder="Nhập tên sản phẩm"
            register={register}
            required={requiredField()}
            minLength={minLengthField(6)}
            error={errors.title}
          />
        </div>
        <div className={cx('form-group')}>
          <Input
            label="Giá sản phẩm"
            type="number"
            formControl="price"
            placeholder="Nhập gía sản phẩm"
            register={register}
            required={requiredField()}
            pattern={positiveNumber()}
            error={errors.price}
          />
        </div>
        <div className={cx('form-group')}>
          <Input
            label="Mức giảm giá"
            type="number"
            formControl="discount"
            placeholder="Nhập mức giảm giá"
            register={register}
            required={requiredField()}
            pattern={positiveNumber()}
            error={errors.discount}
          />
        </div>
        <div className={cx('form-group')}>
          <Input
            label="Số lượng"
            type="number"
            formControl="quantity"
            placeholder="Nhập số lượng"
            register={register}
            required={requiredField()}
            pattern={positiveNumber()}
            error={errors.quantity}
          />
        </div>
        <div className={cx('form-group')}>
          <Input
            label="Mô tả sản phẩm"
            formControl="description"
            placeholder="Nhập mô tả sản phẩm"
            register={register}
            required={requiredField()}
            error={errors.description}
          />
        </div>
        {!formData?.ID_Product && (
          <div className={cx('form-group')}>
            <Input
              label="Hình ảnh sản phẩm"
              type="file"
              isMultiple={true}
              formControl="productImages"
              register={register}
              error={errors.productImages}
            />
          </div>
        )}
        <div className={cx('action')}>
          <button type="submit" className="create-button">
            {title}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormProduct;
