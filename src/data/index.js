export const contentSlots = [
  {
    id: "0",
    name: "Hi"
  },
  {
    id: "1",
    name: "Hello"
  },
  {
    id: "2",
    name: "Sup"
  },
  {
    id: "3",
    name: "Sing"
  },
  {
    id: "4",
    name: "Dance"
  }
];

export const images = [
  {
    productCode: "AA",
    imageFile: null,
    imageFileName: "01_AA_BBB.png",
    id: "111"
  },
  {
    productCode: "AA",
    imageFile: null,
    imageFileName: "01_AA_CC.png",
    id: "222"
  },
  {
    productCode: "GG",
    imageFile: null,
    imageFileName: "04_GG_DD.jpeg",
    id: "333"
  }
];

export const validations = {
  validatedData: [
    {
      id: "04_GG_DD.jpeg",
      validationMessages: [
        {
          validationMessages: ["Sample error 1", "Sample error 2"]
        }
      ]
    },
    {
      id: "07_FF_DG.jpeg",
      validationMessages: [
        {
          validationMessages: ["Error not good!"]
        }
      ]
    }
  ]
};

export const saveProductResponse = [
  {
    newProductCode: "ABCDO",
    name: "01_AA_BBB.png",
    productName: "",
    path:
      "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
  },
  {
    newProductCode: "DQDESS",
    name: "02_BB_CCCC.png",
    productName: "",
    path: ""
  }
];
