import axios from 'axios'
import {useHistory} from 'react-router-dom';
import userTracker from './utils/user-tracker';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3000/api';

const api = axios.create();

api.interceptors.response.use(
  function (resp) {
    // We don't want to do anything when a response is successful
    // So we will just return the response here
    console.log(resp);
    return resp
  },
  function (error) {
    const [user, setUser] = userTracker();
    // Here is where we intercept the HTTP errors, 401 we want to redirect to login
    switch (parseInt(error.response.status)) {
      case 401:
        console.log('user not logged in');
        setUser(null);
        window.location.replace('/')
        break;
      case 403:
        console.log('unauthorized access');
        window.location.replace('/403');
        break;
      case 404:
        console.log('resource does not exist');
        window.location.replace('/404');
        break;
      default:
        console.log(error.response)
    }
    return Promise.reject(error);
  }
);

// users
// email, firstName, lastName, userName, password, passwordConfirmation, state
export const createUser   = (jsonPayload) => api.post(`/users`, jsonPayload);
export const updateUser   = (userId, jsonPayload) => api.put(`/users/${userId}`, jsonPayload);
export const getUser      = (userId) => api.get(`/users/${userId}`);
export const deleteUser   = (userId) => api.delete(`/users/${userId}`);

// Login
// We don't use the axios instance with intercepters here because a 401 we want to do a different approach
export const login = (jsonPayload) => axios.post(`/session`, jsonPayload);

// Bank Accounts
export const getAccountIndex = (userId) => api.get(`/users/${userId}/accounts`);
export const createAccount   = (userId, jsonPayload) => api.post(`/users/${userId}/accounts`, jsonPayload);
export const getAccount      = (userId, searchParams) => api.post(`/users/${userId}/accounts/search`, searchParams);
export const updateAccount   = (userId, updateParams) => api.put(`/users/${userId}/accounts`, updateParams);

// Custom Transaction Categories
export const getTransactionCategories  = (userId) => api.get(`/users/${userId}/custom-transaction-categories`);
export const createTransactionCategory = (userId, jsonPayload) => api.post(`/users/${userId}/custom-transaction-categories`, jsonPayload);
export const deleteTransactionCategory = (userId, catId) => api.delete(`/users/${userId}/custom-transaction-categories/${catId}`);

// Notifications
export const getNotificationsWithParams = (userId, params) => api.get(`/users/${userId}/notifications`, {params});
export const getNotifications   = (userId) => api.get(`/users/${userId}/notifications`);
export const getNotification    = (userId, notificationId) => api.get(`/users/${userId}/notifications/${notificationId}`);
export const updateNotification = (userId, notificationId, jsonPayload) => api.put(`/users/${userId}/notifications/${notificationId}`, jsonPayload);

// Transactions
export const createTransaction = (jsonPayload) => api.post(`/transactions`, jsonPayload);
export const getTransaction    = (transactionId) => api.get(`/transactions/${transactionId}`);
export const updateTransaction = (transactionId, jsonPayload) => api.put(`/transactions/${transactionId}`, jsonPayload);
export const getTransactions   = (jsonPayload) => api.post(`/transactions/search`, jsonPayload);
export const exportTransactions = (jsonPayload) => api.post('/transactions/download', jsonPayload);

// Triggers
export const createTrigger = (jsonPayload) => api.post(`/triggers`, jsonPayload);
export const getTrigger    = (triggerId) => api.get(`/triggers/${triggerId}`);
export const updateTrigger = (triggerId, jsonPayload) => api.put(`/triggers/${triggerId}`, jsonPayload);
export const deleteTrigger = (triggerId) => api.delete(`/triggers/${triggerId}`);
export const getTriggers   = (searchParams) => api.post(`/triggers/search`, searchParams);

// TriggeredEvents
export const getTriggeredEvent  = (eventId) => api.get(`/triggered-events/${eventId}`);
export const getTriggeredEvents = (searchParams) => api.post(`/triggered-events`, searchParams);

export const theFrontApi = {
  createUser,
  updateUser,
  getUser,
  deleteUser,
  login,
  getAccountIndex,
  createAccount,
  getAccount,
  updateAccount,
  getTransactionCategories,
  createTransactionCategory,
  deleteTransactionCategory,
  getNotificationsWithParams,
  getNotifications,
  getNotification,
  updateNotification,
  createTransaction,
  getTransaction,
  updateTransaction,
  getTransactions,
  createTrigger,
  getTrigger,
  updateTrigger,
  deleteTrigger,
  getTriggers,
  getTriggeredEvent,
  getTriggeredEvents,
  exportTransactions
};