import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RemoveInboxThreadLabelResponseSuccess, RemoveInboxThreadLabelResponseSuccessRemoveMatch } from '../ResendTypes';
declare class RemoveInboxThreadLabelResponseSuccessEntity extends ResendEntityBase<RemoveInboxThreadLabelResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RemoveInboxThreadLabelResponseSuccessEntity): RemoveInboxThreadLabelResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveInboxThreadLabelResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveInboxThreadLabelResponseSuccessEntity>;
}
export { RemoveInboxThreadLabelResponseSuccessEntity };
