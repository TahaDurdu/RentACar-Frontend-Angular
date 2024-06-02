import { customer } from "./customer";
import { responseModel } from "./responseModel";

export interface customerResponseModel extends responseModel{
    data:customer[],
}