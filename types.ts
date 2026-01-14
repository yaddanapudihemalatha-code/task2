
export enum Priority {
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low'
}

export enum Status {
  TODO = 'To Do',
  IN_PROGRESS = 'In Progress',
  DONE = 'Done'
}

export interface Task {
  id: string;
  title: string;
  revenue: number;
  timeTaken: number;
  roi: number;
  priority: Priority;
  status: Status;
  notes: string;
  createdAt: number;
}

export interface TaskSummary {
  totalRevenue: number;
  avgRoi: number;
  efficiency: number;
  performanceGrade: string;
}
