export interface TimelineContentProps {
    year: string;
    achievements: AchievementContentProps[];
}

export interface AchievementContentProps {
    title : string;
    description: string;
}

export type AchievementsProps = {
    achievements:Array<AchievementContentProps>;
}

export type TimelineProps  = {
    timeline:Array<TimelineContentProps>;
}