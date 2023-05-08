export interface HttpRequest {
  body?: any
  params?: any
  file?: any
  headers?: any
  accountId?: string
}

export interface HttpResponse {
  statusCode: number
  body: any
}
