export interface StackProps {
    title: string;
    stacks: StacksProps[];
}

export interface StacksProps {
    stack : string;
}

export type ListStackProps  = {
    listStack:Array<StackProps>;
}