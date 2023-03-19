import { AppImages } from '../../assets';

export interface CategoryType {
  id: number;
  imagePath: any;
  title: string;
  spotCount: number;
  totalCapacity: number;
}

export const POPULAR_COURSE_LIST: CategoryType[] = [
  {
    id: 0,
    imagePath: AppImages.interFace4,
    title: 'Lab 7',
    spotCount: 92,
    totalCapacity:104,
  },
  {
    id: 1,
    imagePath: AppImages.interFace1,
    title: 'Lab 11',
    spotCount: 34,
    totalCapacity:104,
  },
  {
    id: 2,
    imagePath: AppImages.library,
    title: 'Library 1st Floor',
    spotCount: 109,
    totalCapacity:150,
  },
  
  {
    id: 3,
    imagePath: AppImages.canteen,
    title: 'Proxyrest',
    spotCount: 41,
    totalCapacity:85,
  },
  {
    id: 4,
    imagePath: AppImages.canteen1,
    title: 'Cossa:     Pizzeria',
    spotCount: 19,
    totalCapacity:32,
  },
  {
    id: 5,
    imagePath: AppImages.interFace4,
    title: 'Cossa: International',
    spotCount: 38,
    totalCapacity:40,
  },
];
