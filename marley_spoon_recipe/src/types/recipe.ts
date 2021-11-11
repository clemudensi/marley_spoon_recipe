interface RecipeFields {
    title: string;
    calories?: number;
    description?: string;
    tags: {
        fields: {
            name: string;
        };
    }[];
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

interface Recipe {
    fields: RecipeFields;
    metadata?: {
        tags: []
    };
    sys: {
        id: string;
    }
}

interface RecipeResponse {
    includes?: {
        Entry: [],
        Asset: [],
    };
    items: Recipe[];
    limit?: number;
    skip?: number;
    sys?: [];
    total?: number
}

export type { Recipe, RecipeFields, RecipeResponse };