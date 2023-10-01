import axios from 'axios';

const api = axios.create({
  baseURL: '/api/sections',
});

export const getAllSections = async () => {
  const response = await api.get('/');
  return response.data;
};

export const getSectionById = async (id) => {
  const response = await api.get(`/${id}`);
  return response.data;
};

export const createSection = async (section) => {
  const response = await api.post('/', section);
  return response.data;
};

export const updateSection = async (id, updatedSection) => {
  const response = await api.put(`/${id}`, updatedSection);
  return response.data;
};

export const deleteSection = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};
