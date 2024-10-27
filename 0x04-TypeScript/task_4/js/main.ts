/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import { Cpp } from './subjects/Cpp.ts';
import { Java } from './subjects/Java.ts';
import { React } from './subjects/React.ts';
import { Teacher } from './subjects/Teacher.ts';

export const cpp = new Cpp();
export const java = new Java();
export const react = new React();
export const cTeacher: Teacher =  {
  firstName: "Mukhola",
  lastName: "James",
  experienceTeachingC: 10
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
