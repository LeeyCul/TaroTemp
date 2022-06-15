/**
 * Created By api-swgger
 * Update Time: 2022-05-23 15:32:20
 */

import request from '@/utils/request';
import { Host } from '@/constants/host';

/**
 * 接口 查询用户类目 的 **请求类型**
 *
 */
export interface GetConfigureUsercategoryinfoRequest {}

/**
 * 接口 查询用户类目 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface GetConfigureUsercategoryinfoResponse {}

/**
 * 接口 查询用户类目 的 **请求函数**
 *
 */
export const getConfigureUsercategoryinfo = (data?: GetConfigureUsercategoryinfoRequest) => {
  return request.get<GetConfigureUsercategoryinfoRequest, GetConfigureUsercategoryinfoResponse>(
    '/configure/usercategory/info',
    {
      params: data,
      baseURL: Host.APP_BASE,
    },
  );
};

/**
 * 接口 新增 的 **请求类型**
 *
 */
export interface PostConfigureusercategoryRequest {
  /**
   * 类目id
   */
  categoryId?: number;
  /**
   * 类目id列表
   */
  categoryIdList?: number[];
  /**
   * 类目名称
   */
  categoryName?: string;
  /**
   * 创建人
   */
  createBy?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 逻辑删除[0->逻辑未删除值,1->逻辑已删除值]
   */
  delFlag?: number;
  /**
   * id
   */
  id?: number;
  /**
   * 修改人
   */
  updateBy?: number;
  /**
   * 修改时间
   */
  updateTime?: string;
  /**
   * 用户id
   */
  userId?: number;
}

/**
 * 接口 新增 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface PostConfigureusercategoryResponse {}

/**
 * 接口 新增 的 **请求函数**
 *
 */
export const postConfigureusercategory = (data?: PostConfigureusercategoryRequest) => {
  return request.post<PostConfigureusercategoryRequest, PostConfigureusercategoryResponse>('/configure/usercategory', {
    data,
    baseURL: Host.APP_BASE,
  });
};

/**
 * 接口 修改 的 **请求类型**
 *
 */
export interface PutConfigureusercategoryRequest {
  /**
   * 类目id
   */
  categoryId?: number;
  /**
   * 类目id列表
   */
  categoryIdList?: number[];
  /**
   * 类目名称
   */
  categoryName?: string;
  /**
   * 创建人
   */
  createBy?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 逻辑删除[0->逻辑未删除值,1->逻辑已删除值]
   */
  delFlag?: number;
  /**
   * id
   */
  id?: number;
  /**
   * 修改人
   */
  updateBy?: number;
  /**
   * 修改时间
   */
  updateTime?: string;
  /**
   * 用户id
   */
  userId?: number;
}

/**
 * 接口 修改 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface PutConfigureusercategoryResponse {}

/**
 * 接口 修改 的 **请求函数**
 *
 */
export const putConfigureusercategory = (data?: PutConfigureusercategoryRequest) => {
  return request.put<PutConfigureusercategoryRequest, PutConfigureusercategoryResponse>('/configure/usercategory', {
    data,
    baseURL: Host.APP_BASE,
  });
};

/**
 * 接口 批量新增 的 **请求类型**
 *
 */
export interface PostConfigureUsercategoryAddbatchRequest {
  /**
   * 类目id
   */
  categoryId?: number;
  /**
   * 类目id列表
   */
  categoryIdList?: number[];
  /**
   * 类目名称
   */
  categoryName?: string;
  /**
   * 创建人
   */
  createBy?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 逻辑删除[0->逻辑未删除值,1->逻辑已删除值]
   */
  delFlag?: number;
  /**
   * id
   */
  id?: number;
  /**
   * 修改人
   */
  updateBy?: number;
  /**
   * 修改时间
   */
  updateTime?: string;
  /**
   * 用户id
   */
  userId?: number;
}

/**
 * 接口 批量新增 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface PostConfigureUsercategoryAddbatchResponse {}

/**
 * 接口 批量新增 的 **请求函数**
 *
 */
export const postConfigureUsercategoryAddbatch = (data?: PostConfigureUsercategoryAddbatchRequest) => {
  return request.post<PostConfigureUsercategoryAddbatchRequest, PostConfigureUsercategoryAddbatchResponse>(
    '/configure/usercategory/add/batch',
    {
      data,
      baseURL: Host.APP_BASE,
    },
  );
};

/**
 * 接口 export 的 **请求类型**
 *
 */
export interface GetConfigureUsercategoryexportRequest {
  /**
   * 类目id
   */
  categoryId?: number;
  /**
   * 类目id列表
   */
  categoryIdList?: unknown[];
  /**
   * 类目名称
   */
  categoryName?: string;
  /**
   * 创建人
   */
  createBy?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 逻辑删除[0->逻辑未删除值,1->逻辑已删除值]
   */
  delFlag?: number;
  /**
   * id
   */
  id?: number;
  /**
   * 修改人
   */
  updateBy?: number;
  /**
   * 修改时间
   */
  updateTime?: string;
  /**
   * 用户id
   */
  userId?: number;
}

/**
 * 接口 export 的 **返回类型**
 *
 */
export type GetConfigureUsercategoryexportResponse = {
  /**
   * 类目id
   */
  categoryId?: number;
  /**
   * 类目id列表
   */
  categoryIdList?: number[];
  /**
   * 类目名称
   */
  categoryName?: string;
  /**
   * 创建人
   */
  createBy?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 逻辑删除[0->逻辑未删除值,1->逻辑已删除值]
   */
  delFlag?: number;
  /**
   * id
   */
  id?: number;
  /**
   * 修改人
   */
  updateBy?: number;
  /**
   * 修改时间
   */
  updateTime?: string;
  /**
   * 用户id
   */
  userId?: number;
}[];

/**
 * 接口 export 的 **请求函数**
 *
 */
export const getConfigureUsercategoryexport = (data: GetConfigureUsercategoryexportRequest) => {
  return request.get<GetConfigureUsercategoryexportRequest, GetConfigureUsercategoryexportResponse>(
    '/configure/usercategory/export',
    {
      params: data,
      baseURL: Host.APP_BASE,
    },
  );
};

/**
 * 接口 修改用户类目 的 **请求类型**
 *
 */
export interface PutConfigureUsercategoryUpdatebatchRequest {
  /**
   * 类目id
   */
  categoryId?: number;
  /**
   * 类目id列表
   */
  categoryIdList?: number[];
  /**
   * 类目名称
   */
  categoryName?: string;
  /**
   * 创建人
   */
  createBy?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 逻辑删除[0->逻辑未删除值,1->逻辑已删除值]
   */
  delFlag?: number;
  /**
   * id
   */
  id?: number;
  /**
   * 修改人
   */
  updateBy?: number;
  /**
   * 修改时间
   */
  updateTime?: string;
  /**
   * 用户id
   */
  userId?: number;
}

/**
 * 接口 修改用户类目 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface PutConfigureUsercategoryUpdatebatchResponse {}

/**
 * 接口 修改用户类目 的 **请求函数**
 *
 */
export const putConfigureUsercategoryUpdatebatch = (data?: PutConfigureUsercategoryUpdatebatchRequest) => {
  return request.put<PutConfigureUsercategoryUpdatebatchRequest, PutConfigureUsercategoryUpdatebatchResponse>(
    '/configure/usercategory/update/batch',
    {
      data,
      baseURL: Host.APP_BASE,
    },
  );
};

/**
 * 接口 通过id查询 的 **请求类型**
 *
 */
export interface GetConfigureUsercategoryIdRequest {
  /**
   * id
   */
  id: number;
}

/**
 * 接口 通过id查询 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface GetConfigureUsercategoryIdResponse {}

/**
 * 接口 通过id查询 的 **请求函数**
 *
 */
export const getConfigureUsercategoryId = (data: GetConfigureUsercategoryIdRequest) => {
  return request.get<GetConfigureUsercategoryIdRequest, GetConfigureUsercategoryIdResponse>(
    '/configure/usercategory/{id}',
    {
      params: data,
      baseURL: Host.APP_BASE,
    },
  );
};

/**
 * 接口 通过id删除 的 **请求类型**
 *
 */
export interface DeleteConfigureUsercategoryIdRequest {
  /**
   * id
   */
  id: number;
}

/**
 * 接口 通过id删除 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface DeleteConfigureUsercategoryIdResponse {}

/**
 * 接口 通过id删除 的 **请求函数**
 *
 */
export const deleteConfigureUsercategoryId = (data: DeleteConfigureUsercategoryIdRequest) => {
  return request.delete<DeleteConfigureUsercategoryIdRequest, DeleteConfigureUsercategoryIdResponse>(
    '/configure/usercategory/{id}',
    {
      data,
      baseURL: Host.APP_BASE,
    },
  );
};
