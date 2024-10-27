/// <reference path="Subject.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingC
        ? `Available Teacher: ${this.teacher.firstname}`
        : 'No available teacher';
    }
  }
}
