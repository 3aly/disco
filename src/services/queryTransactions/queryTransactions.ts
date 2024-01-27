import axios from 'axios';
import {apis} from 'services/envConstants';

const queryTransactions = async () => {
  const response = await axios.get(`${apis.TransactionURL}`);
  return response.data;
};
export default queryTransactions;
