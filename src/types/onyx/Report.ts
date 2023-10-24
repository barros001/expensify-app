import {ValueOf} from 'type-fest';
import CONST from '../../CONST';
import * as OnyxCommon from './OnyxCommon';

type Report = {
    /** The specific type of chat */
    chatType?: ValueOf<typeof CONST.REPORT.CHAT_TYPE>;

    /** Whether there is an outstanding amount in IOU */
    hasOutstandingIOU?: boolean;

    /** List of icons for report participants */
    icons?: OnyxCommon.Icon[];

    /** Whether the user is not an admin of policyExpenseChat chat */
    isOwnPolicyExpenseChat?: boolean;

    /** Indicates if the report is pinned to the LHN or not */
    isPinned?: boolean;

    /** The text of the last message on the report */
    lastMessageText?: string;

    /** The time of the last message on the report */
    lastVisibleActionCreated?: string;

    /** The last time the report was visited */
    lastReadTime?: string;

    /** The current user's notification preference for this report */
    notificationPreference?: string | number;

    /** The policy name to use for an archived report */
    oldPolicyName?: string;

    /** The email address of the report owner */
    ownerEmail?: string;

    /** Linked policy's ID */
    policyID?: string;

    /** Linked policy's name */
    policyName?: string | null;

    /** Name of the report */
    reportName?: string;

    /** ID of the report */
    reportID: string;

    /** The state that the report is currently in */
    stateNum?: ValueOf<typeof CONST.REPORT.STATE_NUM>;

    /** The status of the current report */
    statusNum?: ValueOf<typeof CONST.REPORT.STATUS>;

    /** Which user role is capable of posting messages on the report */
    writeCapability?: ValueOf<typeof CONST.REPORT.WRITE_CAPABILITIES>;

    /** The report type */
    type?: string;

    lastMessageTranslationKey?: string;
    parentReportID?: string;
    parentReportActionID?: string;
    isOptimisticReport?: boolean;
    hasDraft?: boolean;
    managerID?: number;
    lastVisibleActionLastModified?: string;
    displayName?: string;
    lastMessageHtml?: string;
    welcomeMessage?: string;
    lastActorAccountID?: number;
    ownerAccountID?: number;
    participantAccountIDs?: number[];
    total?: number;
    currency?: string;
    isDeletedParentAction?: boolean;
    isWaitingOnBankAccount?: boolean;
    visibility?: ValueOf<typeof CONST.REPORT.VISIBILITY>;
    preexistingReportID?: string;
    iouReportID?: string;
    lastMentionedTime?: string | null;
    parentReportActionIDs?: number[];
    errorFields?: OnyxCommon.ErrorFields;
    pendingFields?: {
        createChat: OnyxCommon.PendingAction;
        addWorkspaceRoom: OnyxCommon.PendingAction;
    };
    /** If the report contains nonreimbursable expenses, send the nonreimbursable total */
    nonReimbursableTotal?: number;
    cachedTotal?: string;
    chatReportID?: string;
    state?: ValueOf<typeof CONST.REPORT.STATE>;
    isHidden?: boolean;
};

export default Report;
