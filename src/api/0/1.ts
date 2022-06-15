/**
 * Created By api-swgger
 * Update Time: 2022-05-23 15:32:20
 */

import request from '@/utils/request';
import { Host } from '@/constants/host';

/**
 * 接口 新增服务区域(已完成) 的 **请求类型**
 *
 */
export interface PostConfigureserviceregionRequest {
  /**
   * areaCode
   */
  areaCode?: number;
  /**
   * areaName
   */
  areaName?: string;
  /**
   * cityCode
   */
  cityCode?: number;
  /**
   * cityName
   */
  cityName?: string;
  /**
   * createTime
   */
  createTime?: string;
  /**
   * id
   */
  id?: number;
  /**
   * isValid
   */
  isValid?: number;
  /**
   * proviceCode
   */
  proviceCode?: number;
  /**
   * proviceName
   */
  proviceName?: string;
  /**
   * updateTime
   */
  updateTime?: string;
}

/**
 * 接口 新增服务区域(已完成) 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface PostConfigureserviceregionResponse {}

/**
 * 接口 新增服务区域(已完成) 的 **请求函数**
 *
 */
export const postConfigureserviceregion = (data?: PostConfigureserviceregionRequest) => {
  return request.post<PostConfigureserviceregionRequest, PostConfigureserviceregionResponse>(
    '/configure/serviceregion',
    {
      data,
      baseURL: Host.APP_BASE,
    },
  );
};

/**
 * 接口 修改服务区域(已完成) 的 **请求类型**
 *
 */
export interface PutConfigureserviceregionRequest {
  /**
   * areaCode
   */
  areaCode?: number;
  /**
   * areaName
   */
  areaName?: string;
  /**
   * cityCode
   */
  cityCode?: number;
  /**
   * cityName
   */
  cityName?: string;
  /**
   * createTime
   */
  createTime?: string;
  /**
   * id
   */
  id?: number;
  /**
   * isValid
   */
  isValid?: number;
  /**
   * proviceCode
   */
  proviceCode?: number;
  /**
   * proviceName
   */
  proviceName?: string;
  /**
   * updateTime
   */
  updateTime?: string;
}

/**
 * 接口 修改服务区域(已完成) 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface PutConfigureserviceregionResponse {}

/**
 * 接口 修改服务区域(已完成) 的 **请求函数**
 *
 */
export const putConfigureserviceregion = (data?: PutConfigureserviceregionRequest) => {
  return request.put<PutConfigureserviceregionRequest, PutConfigureserviceregionResponse>('/configure/serviceregion', {
    data,
    baseURL: Host.APP_BASE,
  });
};

/**
 * 接口 export 的 **请求类型**
 *
 */
export interface GetConfigureServiceregionexportRequest {
  /**
   * areaCode
   */
  areaCode?: number;
  /**
   * areaName
   */
  areaName?: string;
  /**
   * cityCode
   */
  cityCode?: number;
  /**
   * cityName
   */
  cityName?: string;
  /**
   * createTime
   */
  createTime?: string;
  /**
   * id
   */
  id?: number;
  /**
   * isValid
   */
  isValid?: number;
  /**
   * proviceCode
   */
  proviceCode?: number;
  /**
   * proviceName
   */
  proviceName?: string;
  /**
   * updateTime
   */
  updateTime?: string;
}

/**
 * 接口 export 的 **返回类型**
 *
 */
export type GetConfigureServiceregionexportResponse = {
  /**
   * areaCode
   */
  areaCode?: number;
  /**
   * areaName
   */
  areaName?: string;
  /**
   * cityCode
   */
  cityCode?: number;
  /**
   * cityName
   */
  cityName?: string;
  /**
   * createTime
   */
  createTime?: string;
  /**
   * id
   */
  id?: number;
  /**
   * isValid
   */
  isValid?: number;
  /**
   * proviceCode
   */
  proviceCode?: number;
  /**
   * proviceName
   */
  proviceName?: string;
  /**
   * updateTime
   */
  updateTime?: string;
}[];

/**
 * 接口 export 的 **请求函数**
 *
 */
export const getConfigureServiceregionexport = (data: GetConfigureServiceregionexportRequest) => {
  return request.get<GetConfigureServiceregionexportRequest, GetConfigureServiceregionexportResponse>(
    '/configure/serviceregion/export',
    {
      params: data,
      baseURL: Host.APP_BASE,
    },
  );
};

/**
 * 接口 分页查询服务区域 的 **请求类型**
 *
 */
export interface GetConfigureServiceregionpageRequest {
  /**
   * areaCode
   */
  areaCode?: number;
  /**
   * areaName
   */
  areaName?: string;
  /**
   * cityCode
   */
  cityCode?: number;
  /**
   * cityName
   */
  cityName?: string;
  countId?: string;
  /**
   * createTime
   */
  createTime?: string;
  current?: number;
  /**
   * id
   */
  id?: number;
  /**
   * isValid
   */
  isValid?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  'orders[0].asc'?: boolean;
  'orders[0].column'?: string;
  pages?: number;
  /**
   * proviceCode
   */
  proviceCode?: number;
  /**
   * proviceName
   */
  proviceName?: string;
  records?: unknown[];
  searchCount?: boolean;
  size?: number;
  total?: number;
  /**
   * updateTime
   */
  updateTime?: string;
}

/**
 * 接口 分页查询服务区域 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface GetConfigureServiceregionpageResponse {}

/**
 * 接口 分页查询服务区域 的 **请求函数**
 *
 */
export const getConfigureServiceregionpage = (data: GetConfigureServiceregionpageRequest) => {
  return request.get<GetConfigureServiceregionpageRequest, GetConfigureServiceregionpageResponse>(
    '/configure/serviceregion/page',
    {
      params: data,
      baseURL: Host.APP_BASE,
    },
  );
};

/**
 * 接口 通过id查询服务区域(已完成) 的 **请求类型**
 *
 */
export interface GetConfigureServiceregionIdRequest {
  /**
   * id
   */
  id: number;
}

/**
 * 接口 通过id查询服务区域(已完成) 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface GetConfigureServiceregionIdResponse {}

/**
 * 接口 通过id查询服务区域(已完成) 的 **请求函数**
 *
 */
export const getConfigureServiceregionId = (data: GetConfigureServiceregionIdRequest) => {
  return request.get<GetConfigureServiceregionIdRequest, GetConfigureServiceregionIdResponse>(
    '/configure/serviceregion/{id}',
    {
      params: data,
      baseURL: Host.APP_BASE,
    },
  );
};

/**
 * 接口 通过id删除服务区域(已完成) 的 **请求类型**
 *
 */
export interface DeleteConfigureServiceregionIdRequest {
  /**
   * id
   */
  id: number;
}

/**
 * 接口 通过id删除服务区域(已完成) 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface DeleteConfigureServiceregionIdResponse {}

/**
 * 接口 通过id删除服务区域(已完成) 的 **请求函数**
 *
 */
export const deleteConfigureServiceregionId = (data: DeleteConfigureServiceregionIdRequest) => {
  return request.delete<DeleteConfigureServiceregionIdRequest, DeleteConfigureServiceregionIdResponse>(
    '/configure/serviceregion/{id}',
    {
      data,
      baseURL: Host.APP_BASE,
    },
  );
};
