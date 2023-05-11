export interface aaa {
  action: string;
  parameters: {
    primary_skill: string;
    seniority_level: string;
    include_answers: boolean;
    language_check: {
      enabled: boolean;
      num_questions: number;
    },
    interview_type: string;
    position: string;
    soft_skills: {
      enabled: boolean;
      num_questions: number;
      areas_to_check: {
        Leadership: string[];
        Customer_Communication: string[];
        Conflict_Resolution: string[];
        Time_Management: string[];
      }
    },
    vacation_description: string;
    level_description: string;
    candidate_cv: string;
    additional_comments: {
      text: string;
      voice: string;
    },
    technical_interview_type: string;
    num_questions: number;
    areas_to_check: {
      Algorithms: string[];
      Data_Structures: string[];
      Design_Patterns: string[];
      System_Design: string[];
    },
    coding_tasks: {
      enabled: boolean;
      num_tasks: number;
      areas_to_check: {
        Async_Operations: string[];
        Prototypes: string[];
        Algorithms: string[];
      }
    },
    additional_skills: string;
  }
}
