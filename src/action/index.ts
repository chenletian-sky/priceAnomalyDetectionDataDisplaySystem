import { ACCEPTGLOBALDATA, TEMPTACTION } from "../types/actionTypes";
import { StoreType } from "../types/propsTypes";

/**
 * 更新XXX
 */
export const updateSomethingTempt = (data:StoreType) => ({
  type:TEMPTACTION,
  data
})

export const acceptGlobalData = (data:any) => ({
  type:ACCEPTGLOBALDATA,
  data
})