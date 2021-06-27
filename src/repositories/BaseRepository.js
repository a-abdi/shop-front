import Client from './Clients/AxiosClient';

let resource

export const get = (repository) => resource = repository

export const index = () => Client.get(`${resource}`)

export const show = id => Client.get(`${resource}/${id}`)

export const create = payload => Client.post(`${resource}`, payload)

export const update = (id, payload) => Client.put(`${resource}/${id}`, payload)

export const destroy = id => Client.delete(`${resource}/${id}`)