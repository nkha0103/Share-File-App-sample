export interface IFile {
    _id?: string;
    id: number;
    name: string;
    modified: Date;
    member: string[];
    type: string;
}
