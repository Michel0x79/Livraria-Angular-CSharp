export interface Books {
    
        id: number;
        title: string;
        author: string;
        publisher?: string;
        publicationDate: Date;
        pages: number;
        language?: string;
        imgUrl: string;
        modalOpen: boolean;
}
