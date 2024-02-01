import mongoose, { mongo } from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: number,
      default: 0,
    },
    stock: {
      type: number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      red: 'Category',
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      red: 'User',
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
