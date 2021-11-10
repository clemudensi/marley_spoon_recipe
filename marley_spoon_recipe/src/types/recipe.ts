interface Recipe {
    title: string;
    calories: number;
    description: string;
    tags: [];
    photo: {
        fields: {
            title: string;
            file: {
                contentType: string;
                details: {
                    size: number;
                    image: {
                        width: number;
                        height: number;
                    }
                }
                fileName: string;
                url: string;
            }
        }
        metadata?: {
            tags: []
        }
    }
}

export type { Recipe };