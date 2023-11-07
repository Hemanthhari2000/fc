import { ActionType, ToasterToast } from './use-toast';

export type Action =
	| { type: ActionType['ADD_TOAST']; toast: ToasterToast }
	| { type: ActionType['UPDATE_TOAST']; toast: Partial<ToasterToast> }
	| { type: ActionType['DISMISS_TOAST']; toastId?: ToasterToast['id'] }
	| { type: ActionType['REMOVE_TOAST']; toastId?: ToasterToast['id'] };
