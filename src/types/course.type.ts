import { Response } from "@/models/response.model";
import { BriefCategory, Category } from "./category.type";
import { BriefRole, Role } from "./role.type";
import { BriefSkill, Skill } from "./skill.type";
import { Instructor, InstructorProfile } from "./instructor";

export interface CourseRequirement {
    id: string;
    description: string;
}

export interface CourseTargetAudience {
    id: string;
    description: string;
}

export interface LearningOutcome {
    id: string;
    description: string;
}

export interface PriceSummary {
    basePrice: number;
    currentPrice: number;
    discountPercentage: number;
    currency: string;
}

export interface CourseOwnershipStatus {
    isOwned: boolean;
    isAddedToCart: boolean;
}

export interface CourseDetails {
    id: string;
    title: string;
    shortDescription: string;
    requirements: CourseRequirement[];
    description: string;
    targetAudiences: CourseTargetAudience[];
    thumbnailSrc: string;
    avgRating: number;
    totalRatings: number;
    instructor: InstructorProfile
    priceSummary: PriceSummary;
    language: string;
    learningOutcomes: LearningOutcome[];
    skills: BriefSkill[];
    categories: BriefCategory[];
    roles: BriefRole[];
    updatedAt: string;
}

export interface Course {
    id: string;
    title: string;
    shortDescription: string;
    requirements: CourseRequirement[];
    description: string;
    targetAudiences: CourseTargetAudience[];
    thumbnailSrc: string;
    avgRating: number;
    totalRatings: number;
    instructor: InstructorProfile
    priceSummary: PriceSummary;
    language: string;
    learningOutcomes: LearningOutcome[];
    skills: Skill[];
    categories: Category[];
    roles: Role[];
    updatedAt: string;
}

export interface CoursePreview {
    id: string;
    title: string;
    thumbnailSrc: string;
    instructorName: string;
    avgRating: number;
    totalRatings: number;
    basePrice: number;
    currentPrice: number;
    currency: string
    summary: string[];
    updatedAt: string;
    ownershipStatus: CourseOwnershipStatus;
}


export interface CoursePreviewResponse extends Response<CoursePreview[]> {
}

export interface CourseDetailsResponse extends Response<CourseDetails> {
}
