export enum TemplateTypeEnum {
	DEFAULT = 'default',
	EMAIL = 'email',
	SEARCHING = 'searching',
	OFFER = 'offer',
	DENIED = 'denied',
}

export type Template = {
    _user: string;
    _vacancy: string;
    date: Date;
    text: string;
    type: TemplateTypeEnum;
};
