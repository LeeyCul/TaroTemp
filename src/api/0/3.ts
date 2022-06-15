/**
 * Created By api-swgger
 * Update Time: 2022-05-23 15:32:20
 */

import request from '@/utils/request';
import { Host } from '@/constants/host';

/**
 * 接口 获取所有服务大类 的 **请求类型**
 *
 */
export interface GetConfigureCategoryparentRequest {}

/**
 * 接口 获取所有服务大类 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface GetConfigureCategoryparentResponse {}

/**
 * 接口 获取所有服务大类 的 **请求函数**
 *
 */
export const getConfigureCategoryparent = (data?: GetConfigureCategoryparentRequest) => {
  return request.get<GetConfigureCategoryparentRequest, GetConfigureCategoryparentResponse>(
    '/configure/category/parent',
    {
      params: data,
      baseURL: Host.APP_BASE,
    },
  );
};

/**
 * 接口 树形结构 的 **请求类型**
 *
 */
export interface GetConfigureCategorytreeRequest {}

/**
 * 接口 树形结构 的 **返回类型**
 *
 */
/**
 * 数据
 */
export type GetConfigureCategorytreeResponse = {}[];

/**
 * 接口 树形结构 的 **请求函数**
 *
 */
export const getConfigureCategorytree = (data?: GetConfigureCategorytreeRequest) => {
  return request.get<GetConfigureCategorytreeRequest, GetConfigureCategorytreeResponse>('/configure/category/tree', {
    params: data,
    baseURL: Host.APP_BASE,
  });
};

/**
 * 接口 获取用户最常用的服务 的 **请求类型**
 *
 */
export interface GetConfigureCategoryUsercommonlyRequest {}

/**
 * 接口 获取用户最常用的服务 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface GetConfigureCategoryUsercommonlyResponse {}

/**
 * 接口 获取用户最常用的服务 的 **请求函数**
 *
 */
export const getConfigureCategoryUsercommonly = (data?: GetConfigureCategoryUsercommonlyRequest) => {
  return request.get<GetConfigureCategoryUsercommonlyRequest, GetConfigureCategoryUsercommonlyResponse>(
    '/configure/category/user/commonly',
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
export interface PostConfigurecategoryRequest {
  /**
   * categoryId
   */
  categoryId?: number;
  /**
   * 类别名称
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
   * 删除标识
   */
  deleteFlag?: string;
  /**
   * 父类id
   */
  parentId?: number;
  /**
   * 价格类型 1次 2小时
   */
  priceType?: string;
  /**
   * 单价
   */
  priceUnit?: number;
  /**
   * 服务过程模板
   */
  serviceProcessTemplate?: string;
  /**
   * 更新人
   */
  updateBy?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
}

/**
 * 接口 新增 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface PostConfigurecategoryResponse {}

/**
 * 接口 新增 的 **请求函数**
 *
 */
export const postConfigurecategory = (data?: PostConfigurecategoryRequest) => {
  return request.post<PostConfigurecategoryRequest, PostConfigurecategoryResponse>('/configure/category', {
    data,
    baseURL: Host.APP_BASE,
  });
};

/**
 * 接口 修改 的 **请求类型**
 *
 */
export interface PutConfigurecategoryRequest {
  /**
   * categoryId
   */
  categoryId?: number;
  /**
   * 类别名称
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
   * 删除标识
   */
  deleteFlag?: string;
  /**
   * 父类id
   */
  parentId?: number;
  /**
   * 价格类型 1次 2小时
   */
  priceType?: string;
  /**
   * 单价
   */
  priceUnit?: number;
  /**
   * 服务过程模板
   */
  serviceProcessTemplate?: string;
  /**
   * 更新人
   */
  updateBy?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
}

/**
 * 接口 修改 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface PutConfigurecategoryResponse {}

/**
 * 接口 修改 的 **请求函数**
 *
 */
export const putConfigurecategory = (data?: PutConfigurecategoryRequest) => {
  return request.put<PutConfigurecategoryRequest, PutConfigurecategoryResponse>('/configure/category', {
    data,
    baseURL: Host.APP_BASE,
  });
};

/**
 * 接口 export 的 **请求类型**
 *
 */
export interface GetConfigureCategoryexportRequest {
  /**
   * categoryId
   */
  categoryId?: number;
  /**
   * 类别名称
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
   * 删除标识
   */
  deleteFlag?: string;
  /**
   * 父类id
   */
  parentId?: number;
  /**
   * 价格类型 1次 2小时
   */
  priceType?: string;
  /**
   * 单价
   */
  priceUnit?: number;
  /**
   * 服务过程模板
   */
  serviceProcessTemplate?: string;
  /**
   * 更新人
   */
  updateBy?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
}

/**
 * 接口 export 的 **返回类型**
 *
 */
export type GetConfigureCategoryexportResponse = {
  /**
   * categoryId
   */
  categoryId?: number;
  /**
   * 类别名称
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
   * 删除标识
   */
  deleteFlag?: string;
  /**
   * 父类id
   */
  parentId?: number;
  /**
   * 价格类型 1次 2小时
   */
  priceType?: string;
  /**
   * 单价
   */
  priceUnit?: number;
  /**
   * 服务过程模板
   */
  serviceProcessTemplate?: string;
  /**
   * 更新人
   */
  updateBy?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
}[];

/**
 * 接口 export 的 **请求函数**
 *
 */
export const getConfigureCategoryexport = (data: GetConfigureCategoryexportRequest) => {
  return request.get<GetConfigureCategoryexportRequest, GetConfigureCategoryexportResponse>(
    '/configure/category/export',
    {
      params: data,
      baseURL: Host.APP_BASE,
    },
  );
};

/**
 * 接口 获取服务大类下的服务列表 的 **请求类型**
 *
 */
export interface GetConfigureCategoryListCategoryIdRequest {
  /**
   * categoryId
   */
  categoryId: number;
}

/**
 * 接口 获取服务大类下的服务列表 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface GetConfigureCategoryListCategoryIdResponse {}

/**
 * 接口 获取服务大类下的服务列表 的 **请求函数**
 *
 */
export const getConfigureCategoryListCategoryId = (data: GetConfigureCategoryListCategoryIdRequest) => {
  return request.get<GetConfigureCategoryListCategoryIdRequest, GetConfigureCategoryListCategoryIdResponse>(
    '/configure/category/list/{categoryId}',
    {
      params: data,
      baseURL: Host.APP_BASE,
    },
  );
};

/**
 * 接口 分页查询 的 **请求类型**
 *
 */
export interface GetConfigureCategorypageRequest {
  /**
   * categoryId
   */
  categoryId?: number;
  /**
   * 类别名称
   */
  categoryName?: string;
  countId?: string;
  /**
   * 创建人
   */
  createBy?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  current?: number;
  /**
   * 删除标识
   */
  deleteFlag?: string;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  'orders[0].asc'?: boolean;
  'orders[0].column'?: string;
  pages?: number;
  /**
   * 父类id
   */
  parentId?: number;
  /**
   * 价格类型 1次 2小时
   */
  priceType?: string;
  /**
   * 单价
   */
  priceUnit?: number;
  records?: unknown[];
  searchCount?: boolean;
  /**
   * 服务过程模板
   */
  serviceProcessTemplate?: string;
  size?: number;
  total?: number;
  /**
   * 更新人
   */
  updateBy?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
}

/**
 * 接口 分页查询 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface GetConfigureCategorypageResponse {}

/**
 * 接口 分页查询 的 **请求函数**
 *
 */
export const getConfigureCategorypage = (data: GetConfigureCategorypageRequest) => {
  return request.get<GetConfigureCategorypageRequest, GetConfigureCategorypageResponse>('/configure/category/page', {
    params: data,
    baseURL: Host.APP_BASE,
  });
};

/**
 * 接口 通过id查询 的 **请求类型**
 *
 */
export interface GetConfigureCategoryCategoryIdRequest {
  /**
   * categoryId
   */
  categoryId: number;
}

/**
 * 接口 通过id查询 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface GetConfigureCategoryCategoryIdResponse {}

/**
 * 接口 通过id查询 的 **请求函数**
 *
 */
export const getConfigureCategoryCategoryId = (data: GetConfigureCategoryCategoryIdRequest) => {
  return request.get<GetConfigureCategoryCategoryIdRequest, GetConfigureCategoryCategoryIdResponse>(
    '/configure/category/{categoryId}',
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
export interface DeleteConfigureCategoryCategoryIdRequest {
  /**
   * categoryId
   */
  categoryId: number;
}

/**
 * 接口 通过id删除 的 **返回类型**
 *
 */
/**
 * 数据
 */
export interface DeleteConfigureCategoryCategoryIdResponse {}

/**
 * 接口 通过id删除 的 **请求函数**
 *
 */
export const deleteConfigureCategoryCategoryId = (data: DeleteConfigureCategoryCategoryIdRequest) => {
  return request.delete<DeleteConfigureCategoryCategoryIdRequest, DeleteConfigureCategoryCategoryIdResponse>(
    '/configure/category/{categoryId}',
    {
      data,
      baseURL: Host.APP_BASE,
    },
  );
};
