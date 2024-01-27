import axios from 'axios';
import {apis} from 'services/envConstants';

const queryExpenses = async () => {
  const response = await axios.get(`${apis.ExpensesURL}`);
  return response.data;
};
export default queryExpenses;
