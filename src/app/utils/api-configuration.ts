import { ApiConfiguration } from '../api';
import { environment } from '../../environments/environment';

export const apiConfiguration: () => ApiConfiguration = () =>
    new ApiConfiguration({
        basePath: environment.apiHost ?? '',
    });
