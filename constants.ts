
import { Priority } from './types';

export const PRIORITY_ORDER: Record<Priority, number> = {
  [Priority.HIGH]: 3,
  [Priority.MEDIUM]: 2,
  [Priority.LOW]: 1
};

export const INITIAL_TASKS = [
  {
    id: '1',
    title: 'Enterprise Upsell - Tech Corp',
    revenue: 5000,
    timeTaken: 10,
    priority: Priority.HIGH,
    status: 'In Progress',
    notes: 'Follow up on Q3 expansion',
    createdAt: Date.now() - 100000
  },
  {
    id: '2',
    title: 'Mid-Market Renewal - Global Inc',
    revenue: 2000,
    timeTaken: 5,
    priority: Priority.MEDIUM,
    status: 'To Do',
    notes: 'Renewal due next week',
    createdAt: Date.now() - 200000
  }
];
