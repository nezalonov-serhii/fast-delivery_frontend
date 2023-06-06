import axios from "axios";

axios.defaults.baseURL = "https://fast-delivery-2glj.onrender.com/";

export const getCurrentDelivery = async (category) => {
   try {
      const { data } = await axios.get(`deliveries/${category}`);

      return await data;
   } catch (error) {
      return Promise.reject(error.message);
   }
};

export const createOrder = async (order) => {
   try {
      const { data } = await axios.post(`order`, order);

      return await data;
   } catch (error) {
      return Promise.reject(error.message);
   }
};

export const getAllOrder = async () => {
   try {
      const { data } = await axios.get(`order`);

      return await data;
   } catch (error) {
      return Promise.reject(error.message);
   }
};
