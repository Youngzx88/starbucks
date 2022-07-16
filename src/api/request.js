import axios from 'axios'
import { axiosInstance } from "./config";

export const getMenuListRequest = 
    () => axiosInstance.get('/menu/all')

export const getHotListRequest = 
    () => axiosInstance.get('/menu/hot')

export const getSuggestListRequest = 
    () => axiosInstance.get('/menu/all')