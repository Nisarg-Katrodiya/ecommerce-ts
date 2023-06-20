/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiInstance } from '../../httpClient/index'
import { setDataToSession } from '../../utils/localstorage';
import { FetchUsers, HasError, GetAllUsers } from '../reducer/User';

type loginDataType = {
    username: string,
    password: string,
}

const loginUser = (params: loginDataType) => async (dispatch: any) =>
    new Promise((resolve: any, reject: any) => {
        dispatch(FetchUsers());
        apiInstance
            .post('auth/login', params)
            .then((res) => {
                setDataToSession('token', (res.data.token));
                dispatch(GetAllUsers(res.data));
                resolve(res.data.data);
            })
            .catch((e) => {
                dispatch(HasError(e?.response?.data?.message));
                reject();
            });
    });
export default loginUser
