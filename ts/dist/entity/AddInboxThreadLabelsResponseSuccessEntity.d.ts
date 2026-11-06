import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { AddInboxThreadLabelsResponseSuccess, AddInboxThreadLabelsResponseSuccessCreateData } from '../ResendTypes';
declare class AddInboxThreadLabelsResponseSuccessEntity extends ResendEntityBase<AddInboxThreadLabelsResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: AddInboxThreadLabelsResponseSuccessEntity): AddInboxThreadLabelsResponseSuccessEntity;
    create(this: any, reqdata?: AddInboxThreadLabelsResponseSuccessCreateData, ctrl?: Control): Promise<AddInboxThreadLabelsResponseSuccessEntity>;
}
export { AddInboxThreadLabelsResponseSuccessEntity };
