/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface InstallSoftwareRequest {
  /** ID */
  pk?: number;
  /**
   * Creation datetime
   * @format date-time
   */
  creation_datetime?: string;
  /**
   * Formation datetime
   * @format date-time
   */
  formation_datetime?: string | null;
  /**
   * Completion datetime
   * @format date-time
   */
  completion_datetime?: string | null;
  /**
   * Host
   * @minLength 1
   * @maxLength 255
   */
  host: string;
  /** Manager */
  manager?: string;
  /**
   * Total installing time in min
   * @min -2147483648
   * @max 2147483647
   */
  total_installing_time_in_min?: number | null;
  /** Status */
  status?: "DRAFT" | "DELETED" | "FORMED" | "COMPLETED" | "REJECTED";
  /** Client */
  client?: string;
}

export interface SoftwareForRequest {
  /** ID */
  pk?: number;
  /**
   * Title
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Price
   * @min -2147483648
   * @max 2147483647
   */
  price: number;
  /**
   * Summary
   * @minLength 1
   */
  summary: string;
  /**
   * Logo file path
   * @minLength 1
   * @maxLength 255
   */
  logo_file_path?: string;
}

export interface Related {
  software: SoftwareForRequest;
  /**
   * Version
   * @minLength 1
   * @maxLength 255
   */
  version: string;
}

export interface FullInstallSoftwareRequest {
  /** ID */
  pk?: number;
  /**
   * Creation datetime
   * @format date-time
   */
  creation_datetime?: string;
  /**
   * Formation datetime
   * @format date-time
   */
  formation_datetime?: string | null;
  /**
   * Completion datetime
   * @format date-time
   */
  completion_datetime?: string | null;
  /**
   * Host
   * @minLength 1
   * @maxLength 255
   */
  host: string;
  /** Client */
  client: number;
  /** Manager */
  manager?: number | null;
  /**
   * Total installing time in min
   * @min -2147483648
   * @max 2147483647
   */
  total_installing_time_in_min?: number | null;
  /** Status */
  status?: "DRAFT" | "DELETED" | "FORMED" | "COMPLETED" | "REJECTED";
  software_list: Related[];
}

export interface PutInstallSoftwareRequest {
  /** ID */
  pk?: number;
  /**
   * Creation datetime
   * @format date-time
   */
  creation_datetime?: string;
  /**
   * Formation datetime
   * @format date-time
   */
  formation_datetime?: string | null;
  /**
   * Completion datetime
   * @format date-time
   */
  completion_datetime?: string | null;
  /**
   * Host
   * @minLength 1
   * @maxLength 255
   */
  host: string;
  /** Client */
  client?: number;
  /** Manager */
  manager?: number | null;
  /** Total installing time in min */
  total_installing_time_in_min?: number | null;
  /** Status */
  status?: "DRAFT" | "DELETED" | "FORMED" | "COMPLETED" | "REJECTED";
}

export interface ResolveInstallSoftwareRequest {
  /** ID */
  pk?: number;
  /**
   * Creation datetime
   * @format date-time
   */
  creation_datetime?: string;
  /**
   * Formation datetime
   * @format date-time
   */
  formation_datetime?: string | null;
  /**
   * Completion datetime
   * @format date-time
   */
  completion_datetime?: string | null;
  /**
   * Host
   * @minLength 1
   */
  host?: string;
  /** Client */
  client?: number;
  /** Manager */
  manager?: number | null;
  /** Total installing time in min */
  total_installing_time_in_min?: number | null;
  /** Status */
  status?: "DRAFT" | "DELETED" | "FORMED" | "COMPLETED" | "REJECTED";
}

export interface Software {
  /** ID */
  pk?: number;
  /**
   * Title
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Price
   * @min -2147483648
   * @max 2147483647
   */
  price: number;
  /**
   * Installing time in mins
   * @min -2147483648
   * @max 2147483647
   */
  installing_time_in_mins: number;
  /**
   * Size in bytes
   * @min -2147483648
   * @max 2147483647
   */
  size_in_bytes: number;
  /**
   * Summary
   * @minLength 1
   */
  summary: string;
  /**
   * Description
   * @minLength 1
   */
  description: string;
  /** Is active */
  is_active?: boolean;
  /**
   * Logo file path
   * @minLength 1
   * @maxLength 255
   */
  logo_file_path?: string;
}

export interface GetSoftware {
  software: Software[];
  /** Install software request id */
  install_software_request_id?: number | null;
  /** Items in cart */
  items_in_cart: number;
}

export interface UpdateSoftwareInRequest {
  /**
   * Version
   * @minLength 1
   * @maxLength 255
   */
  version: string;
}

export interface SoftwareInRequest {
  /** Request */
  request: number;
  /** Software */
  software: number;
  /**
   * Version
   * @minLength 1
   * @maxLength 255
   */
  version: string;
}

export interface User {
  /** ID */
  id?: number;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Password
   * @minLength 1
   * @maxLength 128
   */
  password: string;
}

export interface UserLogin {
  /**
   * Staff status
   * Designates whether the user can log into this admin site.
   */
  is_staff?: boolean;
}

export interface UserUpdate {
  /**
   * Email
   * @format email
   */
  email?: string;
  /** Password */
  password?: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://127.0.0.1:8000" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Install server software API
 * @version v1
 * @license MIT License
 * @baseUrl http://127.0.0.1:8000
 * @contact <yuvenskiylev@mail.ru>
 *
 * API for installing server software
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  installSoftwareRequests = {
    /**
     * @description Получение списка заявок на установку ПО
     *
     * @tags install_software_requests
     * @name InstallSoftwareRequestsList
     * @request GET:/install_software_requests
     * @secure
     */
    installSoftwareRequestsList: (
      query?: {
        /** status */
        status?: string;
        /**
         * status
         * @format date-time
         */
        formation_start?: string;
        /**
         * status
         * @format date-time
         */
        formation_end?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<InstallSoftwareRequest[], void>({
        path: `/install_software_requests`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение заявки на установку ПО
     *
     * @tags install_software_requests
     * @name InstallSoftwareRequestsRead
     * @request GET:/install_software_requests/{id}
     * @secure
     */
    installSoftwareRequestsRead: (id: string, params: RequestParams = {}) =>
      this.request<FullInstallSoftwareRequest, void>({
        path: `/install_software_requests/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Удаление заявки на установку ПО
     *
     * @tags install_software_requests
     * @name InstallSoftwareRequestsDeleteDelete
     * @request DELETE:/install_software_requests/{id}/delete
     * @secure
     */
    installSoftwareRequestsDeleteDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/install_software_requests/${id}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Формирование заявки на установку ПО
     *
     * @tags install_software_requests
     * @name InstallSoftwareRequestsFormUpdate
     * @request PUT:/install_software_requests/{id}/form
     * @secure
     */
    installSoftwareRequestsFormUpdate: (id: string, params: RequestParams = {}) =>
      this.request<InstallSoftwareRequest, void>({
        path: `/install_software_requests/${id}/form`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Изменение заявки на установку ПО
     *
     * @tags install_software_requests
     * @name InstallSoftwareRequestsPutUpdate
     * @request PUT:/install_software_requests/{id}/put
     * @secure
     */
    installSoftwareRequestsPutUpdate: (id: string, data: PutInstallSoftwareRequest, params: RequestParams = {}) =>
      this.request<PutInstallSoftwareRequest, void>({
        path: `/install_software_requests/${id}/put`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Закрытие заявки на установку ПО модератором
     *
     * @tags install_software_requests
     * @name InstallSoftwareRequestsResolveUpdate
     * @request PUT:/install_software_requests/{id}/resolve
     * @secure
     */
    installSoftwareRequestsResolveUpdate: (
      id: string,
      data: ResolveInstallSoftwareRequest,
      params: RequestParams = {},
    ) =>
      this.request<InstallSoftwareRequest, void>({
        path: `/install_software_requests/${id}/resolve`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  software = {
    /**
     * @description Получение списка ПО
     *
     * @tags software
     * @name SoftwareList
     * @request GET:/software
     * @secure
     */
    softwareList: (
      query?: {
        /** software_title */
        software_title?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSoftware, void>({
        path: `/software`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавление ПО
     *
     * @tags software
     * @name SoftwarePostCreate
     * @request POST:/software/post
     * @secure
     */
    softwarePostCreate: (data: Software, params: RequestParams = {}) =>
      this.request<Software, void>({
        path: `/software/post`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение ПО
     *
     * @tags software
     * @name SoftwareRead
     * @request GET:/software/{id}
     * @secure
     */
    softwareRead: (id: string, params: RequestParams = {}) =>
      this.request<Software, void>({
        path: `/software/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавление ПО в заявку на установку
     *
     * @tags software
     * @name SoftwareAddCreate
     * @request POST:/software/{id}/add
     * @secure
     */
    softwareAddCreate: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/software/${id}/add`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Загрузка изображения ПО в Minio
     *
     * @tags software
     * @name SoftwareAddImageCreate
     * @request POST:/software/{id}/add_image
     * @secure
     */
    softwareAddImageCreate: (id: string, data: File, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/software/${id}/add_image`,
        method: "POST",
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * @description Удаление ПО
     *
     * @tags software
     * @name SoftwareDeleteDelete
     * @request DELETE:/software/{id}/delete
     * @secure
     */
    softwareDeleteDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/software/${id}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Изменение ПО
     *
     * @tags software
     * @name SoftwarePutUpdate
     * @request PUT:/software/{id}/put
     * @secure
     */
    softwarePutUpdate: (id: string, data: Software, params: RequestParams = {}) =>
      this.request<Software, void>({
        path: `/software/${id}/put`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  softwareInRequest = {
    /**
     * @description Удаление ПО из заявки
     *
     * @tags software_in_request
     * @name SoftwareInRequestDeleteDelete
     * @request DELETE:/software_in_request/{request_pk}/{software_pk}/delete
     * @secure
     */
    softwareInRequestDeleteDelete: (requestPk: string, softwarePk: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/software_in_request/${requestPk}/${softwarePk}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Изменение данных о ПО в заявке
     *
     * @tags software_in_request
     * @name SoftwareInRequestPutUpdate
     * @request PUT:/software_in_request/{request_pk}/{software_pk}/put
     * @secure
     */
    softwareInRequestPutUpdate: (
      requestPk: string,
      softwarePk: string,
      data: UpdateSoftwareInRequest,
      params: RequestParams = {},
    ) =>
      this.request<SoftwareInRequest, void>({
        path: `/software_in_request/${requestPk}/${softwarePk}/put`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description Создание пользователя
     *
     * @tags users
     * @name UsersCreateCreate
     * @request POST:/users/create
     * @secure
     */
    usersCreateCreate: (data: User, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Вход
     *
     * @tags users
     * @name UsersLoginCreate
     * @request POST:/users/login
     * @secure
     */
    usersLoginCreate: (
      data: {
        /** username */
        username: string;
        /** password */
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserLogin, void>({
        path: `/users/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Выход
     *
     * @tags users
     * @name UsersLogoutCreate
     * @request POST:/users/logout
     * @secure
     */
    usersLogoutCreate: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/logout`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Обновление данных пользователя
     *
     * @tags users
     * @name UsersUpdateUpdate
     * @request PUT:/users/update
     * @secure
     */
    usersUpdateUpdate: (data: UserUpdate, params: RequestParams = {}) =>
      this.request<User, void>({
        path: `/users/update`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
