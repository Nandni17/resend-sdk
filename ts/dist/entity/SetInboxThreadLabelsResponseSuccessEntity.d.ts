import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { SetInboxThreadLabelsResponseSuccess, SetInboxThreadLabelsResponseSuccessUpdateData } from '../ResendTypes';
declare class SetInboxThreadLabelsResponseSuccessEntity extends ResendEntityBase<SetInboxThreadLabelsResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: SetInboxThreadLabelsResponseSuccessEntity): SetInboxThreadLabelsResponseSuccessEntity;
    update(this: any, reqdata?: SetInboxThreadLabelsResponseSuccessUpdateData, ctrl?: Control): Promise<SetInboxThreadLabelsResponseSuccessEntity>;
}
export { SetInboxThreadLabelsResponseSuccessEntity };
