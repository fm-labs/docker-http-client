import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { DOCKER_HTTP_BASEURL } from './constants.ts'
import { IDockerContainer, IDockerResourceAttrs } from './types.ts'

const http = axios.create({
  baseURL: DOCKER_HTTP_BASEURL,
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false,
  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'csrftoken',
  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-CSRFToken',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

const getStacks = (config?: AxiosRequestConfig) => async (): Promise<IDockerContainer[]> => {
  const response = await http.get(`stacks`, config)
  return response.data
}

const createStack =
  (config?: AxiosRequestConfig) =>
  async (data: any): Promise<AxiosResponse> => {
    return await http.post(`stacks/create`, data, config)
  }

const getStack =
  (config?: AxiosRequestConfig) =>
  async (id: string): Promise<IDockerContainer[]> => {
    const response = await http.get(`stack/${id}`, config)
    return response.data
  }

const startStack =
  (config?: AxiosRequestConfig) =>
  async (id: string): Promise<AxiosResponse> => {
    return await http.post(`stack/start/${id}`, null, config)
  }

const stopStack =
  (config?: AxiosRequestConfig) =>
  async (id: string): Promise<AxiosResponse> => {
    return await http.post(`stack/stop/${id}`, null, config)
  }

const removeStack =
  (config?: AxiosRequestConfig) =>
  async (id: string): Promise<AxiosResponse> => {
    return await http.post(`stack/remove/${id}`, null, config)
  }

const getImages = (config?: AxiosRequestConfig) => async (): Promise<IDockerResourceAttrs[]> => {
  const response = await http.get(`images`, config)
  return response.data
}

const getVolumes = (config?: AxiosRequestConfig) => async (): Promise<IDockerResourceAttrs[]> => {
  const response = await http.get(`volumes`, config)
  return response.data
}

const getNetworks = (config?: AxiosRequestConfig) => async (): Promise<IDockerResourceAttrs[]> => {
  const response = await http.get(`networks`, config)
  return response.data
}

const getContainers = (config?: AxiosRequestConfig) => async (): Promise<IDockerResourceAttrs[]> => {
  const response = await http.get(`containers`, config)
  return response.data
}

const getContainer =
  (config?: AxiosRequestConfig) =>
  async (id: string): Promise<IDockerContainer[]> => {
    const response = await http.get(`container/${id}`, config)
    return response.data
  }

const startContainer =
  (config?: AxiosRequestConfig) =>
  async (id: string): Promise<AxiosResponse> => {
    return await http.post(`container/start/${id}`, null, config)
  }

const restartContainer =
  (config?: AxiosRequestConfig) =>
  async (id: string): Promise<AxiosResponse> => {
    return await http.post(`container/start/${id}?restart=1`, null, config)
  }

const pauseContainer =
  (config?: AxiosRequestConfig) =>
  async (id: string): Promise<AxiosResponse> => {
    return await http.post(`container/pause/${id}`, null, config)
  }

const stopContainer =
  (config?: AxiosRequestConfig) =>
  async (id: string): Promise<AxiosResponse> => {
    return await http.post(`container/stop/${id}`, null, config)
  }

const removeContainer =
  (config?: AxiosRequestConfig) =>
  async (id: string): Promise<AxiosResponse> => {
    return await http.post(`container/remove/${id}`, null, config)
  }

const runContainer =
  (config?: AxiosRequestConfig) =>
  async (runData: any): Promise<AxiosResponse> => {
    return await http.post(`containers/run`, runData, config)
  }

const launchPortainerTemplate =
  (config?: AxiosRequestConfig) =>
  async (template: any): Promise<AxiosResponse> => {
    return await http.post(`portainer/templates/launch`, template, config)
  }

const getSystemInfo = (config?: AxiosRequestConfig) => async (): Promise<any> => {
  const response = await http.get(`system/info`, config)
  return response.data
}

const getEngineInfo = (config?: AxiosRequestConfig) => async (): Promise<any> => {
  const response = await http.get(`engine/info`, config)
  return response.data
}

const getEngineDf = (config?: AxiosRequestConfig) => async (): Promise<any> => {
  const response = await http.get(`engine/df`, config)
  return response.data
}

const getEnginePing = (config?: AxiosRequestConfig) => async (): Promise<any> => {
  const response = await http.get(`engine/ping`, config)
  return response.data
}

const getEngineEvents =
  (config?: AxiosRequestConfig) =>
  async (args: { since?: number }): Promise<any> => {
    const response = await http.get(`engine/events?since=${args.since || ''}`, config)
    return response.data
  }

const api = {
  getStacks,
  createStack,
  getStack,
  startStack,
  stopStack,
  removeStack,
  getContainers,
  getContainer,
  startContainer,
  restartContainer,
  pauseContainer,
  stopContainer,
  removeContainer,
  runContainer,
  getImages,
  getVolumes,
  getNetworks,
  launchPortainerTemplate,
  getSystemInfo,
  getEngineInfo,
  getEngineDf,
  getEnginePing,
  getEngineEvents,
}
export default api
