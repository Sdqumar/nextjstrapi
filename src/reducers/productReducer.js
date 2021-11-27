import { appConstants } from "../constants";
import { saveProductResponse } from "../data";
import { getProductCode } from "../getProductCode";

export const initialState = {
  products: [],
  errors: [],
  contentSlots: []
};


const appReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case appConstants.GET_CONTENT_SLOTS_SUCCESS:
      return {
        ...state,
        contentSlots: action.payload
      };
    case appConstants.UPLOAD_PRODUCT_SUCCESS:
      return action.payload.reduce(
        (
          state,
          {
            productCode,
            productName,
            productCategory,
            imageFile,
            imageFileName,
            imageUrl,
            id
          }
        ) => {
          const shouldUpdate = state.products.some(
            (product) => product.productCode === productCode
          );

          if (shouldUpdate) {
            return {
              ...state,
              products: state.products.map((product) =>
                product.productCode === productCode
                  ? {
                      ...product,
                      productImages: product.productImages.concat({
                        imageFile,
                        imageFileName,
                        imageUrl,
                        id
                      })
                    }
                  : product
              )
            };
          }

          return {
            ...state,
            products: state.products.concat({
              productCode,
              productName,
              productCategory,
              productExisting: true,
              slot: [],
              productImages: [
                {
                  imageFile,
                  imageFileName,
                  imageUrl,
                  id
                }
              ]
            })
          };
        },
        state
      );

    case appConstants.VALIDATE_SUCCESS:
      return {
        ...state,
        errors: [
          ...state.errors,
          ...action.payload.data.filter((data, idx) => {
            return action.payload.images.some(
              (image) => data.id === image.imageFileName
            );
          })
        ]
      };

    case appConstants.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter((product)=>product.productImages.length >= 1)
      };

    case appConstants.SAVE_PRODUCT_SUCCESS:
      return saveProductResponse.reduce((state, current) => {
        const shouldUpdate = state.products.some(
          (product) => product.productCode === getProductCode(current.name)
        );

        if (!shouldUpdate) return state;

        return {
          ...state,
          products: state.products.map((product) =>
            product.productCode === getProductCode(current.name)
              ? {
                  ...product,
                  productCode: current.newProductCode,
                  productName: current.productName ? current.productName : ""
                }
              : product
          )
        };
      }, state);

    case appConstants.CHANGE_CONTENT_SLOTS:
      return {
        ...state,
        products: state.products.map((product) => {
          const isMatches =
            product.productCode === action.payload.product?.productCode;

          const isExist = product.slot.some(
            (data) => data.id === action.payload.slot?.id
          );

          switch (true) {
            case isMatches && isExist:
              return {
                ...product,
                slot: [
                  ...product.slot.filter(
                    (data) => data.id !== action.payload.slot?.id
                  ),
                  action.payload.slot
                ]
              };
            case isMatches && !isExist:
              return {
                ...product,
                slot: [...product.slot, action.payload.slot]
              };
            default:
              return {
                ...product,
                slot: []
              };
          }
        })
      };

    case appConstants.SET_CONTENT_SLOT:
      return {
        ...state
      };

    case appConstants.DELETE_IMAGE_SUCCESS:
      return {
        ...state,
        products: state.products.map((product) => ({
          ...product,
          productImages: (product.productImages ?? []).filter(
            ({ id }) => !action.payload.includes(id)
          )
        }))
      };
    default:
      return state;
  }
};

export default appReducer;
