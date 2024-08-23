export interface User {
	language_code: string;
	country: string;
	id: number;
}

export interface InitDataUnsafe {
	user?: User;
}
