"use server"

import { CreateCategoryParams } from "@/types"
import { connectToDatabase } from "../database"
import category from "../database/models/category.model"
import { handleError } from "../utils"

export const createCategory = async ({categoryName} : CreateCategoryParams ) => { 
    try {
        await connectToDatabase()
        const newCategory = await category.create({name: categoryName})

        return JSON.parse(JSON.stringify(newCategory))
    } catch (e) { 
        handleError(e)
    }
}

export const getAllCategories = async () => {
  try {
    await connectToDatabase();
    const categories = await category.find()

    return JSON.parse(JSON.stringify(categories));
  } catch (e) {
    handleError(e);
  }
};