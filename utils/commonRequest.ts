import { APP_STORAGE } from '@/services/constant';
import axios, { AxiosResponse } from 'axios';

// export const BASE_URL = 'http://localhost:8080';
export const MINIO_URL = 'http://113.190.240.224:8089/'
export const BASE_URL = 'http://113.190.240.224:8092';
// export const BASE_URL = 'http://113.190.240.224:8095'; //id
export const GOOGLE_MAP_KEY = 'AIzaSyCWsZ6FofVQIVIaEXK5Ia2xmsCQYRRRnlY';

export const INVALID_TOKEN = {
    errorCode: "token.invalid"
}

export async function getRequest<T>(
    url: string,
    token?: string,
    params?: REQUEST.PageParams,
    headers?: REQUEST.Headers,
): Promise<T> {
    const config = {
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
        },
        params,
    };
    try {
        const response: AxiosResponse<T> = await axios.get(`${BASE_URL}${url}`, config);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            const statusCode = error.response.status;
            if (statusCode === 403 || error.response.data === INVALID_TOKEN) {
                console.log("Token has expired.");
                localStorage.removeItem(APP_STORAGE)
                window.location.href = '/user/unauthorized'
            }
            throw error;
        } else {
            console.error("Network error:", error.message);
            throw error;
        }
    }
}

export async function postRequest<T>(
    url: string,
    data?: any,
    token?: string,
    params?: REQUEST.PageParams,
    headers?: REQUEST.Headers,
): Promise<T> {
    const config = {
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
        },
        params,
    };
    try {
        const response: AxiosResponse<T> = await axios.post(`${BASE_URL}${url}`, data, config);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            const statusCode = error.response.status;
            if (statusCode === 403 || error.response.data === INVALID_TOKEN) {
                console.log("Token has expired.");
                localStorage.removeItem(APP_STORAGE)
                window.location.href = '/user/unauthorized'
            }
            throw error;
        } else {
            console.error("Network error:", error.message);
            throw error;
        }
    }
}

export async function putRequest<T>(
    url: string,
    data?: any,
    token?: string,
    params?: REQUEST.PageParams,
    headers?: REQUEST.Headers,
): Promise<T> {
    const config = {
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
        },
        params,
    };
    try {
        const response: AxiosResponse<T> = await axios.put(`${BASE_URL}${url}`, data, config);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            const statusCode = error.response.status;
            if (statusCode === 403 || error.response.data === INVALID_TOKEN) {
                console.log("Token has expired.");
                localStorage.removeItem(APP_STORAGE)
                window.location.href = '/user/unauthorized'
            }
            throw error;
        } else {
            console.error("Network error:", error.message);
            throw error;
        }
    }
}

export async function deleteRequest<T>(
    url: string,
    token?: string,
    params?: REQUEST.PageParams,
    headers?: REQUEST.Headers,
): Promise<T> {
    const config = {
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
        },
        params,
    };
    try {
        const response: AxiosResponse<T> = await axios.delete(`${BASE_URL}${url}`, config);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            const statusCode = error.response.status;
            if (statusCode === 403 || error.response.data === INVALID_TOKEN) {
                console.log("Token has expired.");
                localStorage.removeItem(APP_STORAGE)
                window.location.href = '/user/unauthorized'
            }
            throw error;
        } else {
            console.error("Network error:", error.message);
            throw error;
        }
    }
}
