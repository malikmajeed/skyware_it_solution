import type { ReactNode } from 'react';

export interface PageHeroSectionProps {
    children?: ReactNode;
    title?: string;
    highlightText?: string;
    subtitle?: string;
    className?: string;
    contentClassName?: string;
}

export function PageHeroSection(props: PageHeroSectionProps): JSX.Element;
