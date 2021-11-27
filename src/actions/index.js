import { appConstants } from "../constants";
import { contentSlots } from "../data";

export const getContentSlots = (payload) => {
  return {
    type: appConstants.GET_CONTENT_SLOTS_SUCCESS,
    payload: contentSlots
  };
};

export const uploadProduct = (payload) => {
  return {
    type: appConstants.UPLOAD_PRODUCT_SUCCESS,
    payload
  };
};

export const updateProduct = () => {
  return {
    type: appConstants.UPDATE_PRODUCT_SUCCESS
  };
};

export const validate = ({ data, images }) => {
  return {
    type: appConstants.VALIDATE_SUCCESS,
    payload: {
      data,
      images
    }
  };
};

export const changeProductSlots = (slot, product) => {
  return {
    type: appConstants.CHANGE_CONTENT_SLOTS,
    payload: {
      slot: {
        id: slot.id,
        value: slot.value
      },
      product
    }
  };
};

export const setContentSlot = (data) => {
  return {
    type: appConstants.SET_CONTENT_SLOT,
    payload: data
  };
};

export const deleteImage = (payload) => {
  return {
    type: appConstants.DELETE_IMAGE_SUCCESS,
    payload
  };
};
