export interface PortofolioContentProps {
    title: string;
    description: string;
    link : string;
    image : string;
    tags: PortofolioTagContentProps[];
}

export interface PortofolioTagContentProps {
    tag : string;
}

export type PortofolioProps  = {
    portofolio:Array<PortofolioContentProps>;
}