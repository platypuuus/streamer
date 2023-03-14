import { StudentModel } from './student-model';

describe('StudentModel', () => {
  it('should create an instance', () => {
    expect(new StudentModel()).toBeTruthy();
  });
  it('should have aubert as lastName an instance', () => {
    const student:StudentModel= new StudentModel();
    student.lastName='Aubert';
    student.email='Aubert@gmail.com';
    student.login='D4rkAubert';
    student.password='AubertPsswrd';
    expect(student.lastName).toBe('Aubert');
  });
});
