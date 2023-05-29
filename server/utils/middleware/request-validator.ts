import { Request, Response, NextFunction } from 'express';
import castArray from 'lodash/castArray';
import get from 'lodash/get';

export function paramExists<T>(paramName: string, validator: (v: T, req: Request) => boolean) {
    return (req: Request, res: Response, next: NextFunction) => {
        const params = castArray(paramName);

        const hasInvalidParam = params.some((param) => {
            const result = get(req, param);
            return result === undefined || (validator && !validator(result, req));
        });

        if (hasInvalidParam) {
            console.warn(`Filed validation for: ${paramName}`);
            res.status(400).json({ error: 'InvalidRequestParamError', field: paramName });
        } else {
            next();
        }
    };
}
