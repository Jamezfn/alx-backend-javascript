/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
namespace Subjects {
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }
    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC !== undefined && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}