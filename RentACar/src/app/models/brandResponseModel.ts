import { brand } from "./brand";
import { responseModel } from "./responseModel";

export interface brandResponseModel extends responseModel{
    data:brand[],
}