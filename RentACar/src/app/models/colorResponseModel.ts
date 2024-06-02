import { color } from "./color";
import { responseModel } from "./responseModel";

export interface colorResponseModel extends responseModel{
    data:color[],
}