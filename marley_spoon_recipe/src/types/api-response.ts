interface ApiResponseArray<T> {
    readonly results: T[];
}

interface ApiResponseObject<T> {
    readonly results: T;
}

export type { ApiResponseArray, ApiResponseObject };