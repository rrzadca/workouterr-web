export * from './default-api.service';
import { DefaultApiService } from './default-api.service';
export * from './default-api.serviceInterface';
export * from './users-api.service';
import { UsersApiService } from './users-api.service';
export * from './users-api.serviceInterface';
export const APIS = [DefaultApiService, UsersApiService];
