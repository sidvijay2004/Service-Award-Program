/**
 *
 */
package org.vts.vtsbackend.model;

/**
 * @author sidVijay
 *
 */
public class Student {
    /**
     * @param studentId
     * @param firstName
     * @param lastName
     * @param studentNum
     * @param email
     * @param age
     * @param grade
     */

    private int studentId;
    private String firstName;
    private String lastName;
    private String studentNum;
    private String email;
    private String password;
    private int age;
    private int grade;

    /**
     * @param studentId
     * @param firstName
     * @param lastName
     * @param studentNum
     * @param email
     * @param password
     * @param age
     * @param grade
     */
    public Student(int studentId, String firstName, String lastName, String studentNum, String email, String password,
                   int age, int grade) {
        super();
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentNum = studentNum;
        this.email = email;
        this.password = password;
        this.age = age;
        this.grade = grade;
    }

    public Student() {
        super();
    }


    /**
     * @return the studentId
     */

    public int getStudentId() {
        return studentId;
    }

    /**
     * @param studentId the studentId to set
     */
    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    /**
     * @return the firstName
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * @param firstName the firstName to set
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * @return the lastName
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * @param lastName the lastName to set
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * @return the studentNum
     */
    public String getStudentNum() {
        return studentNum;
    }

    /**
     * @param studentNum the studentNum to set
     */
    public void setStudentNum(String studentNum) {
        this.studentNum = studentNum;
    }

    /**
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return the age
     */
    public int getAge() {
        return age;
    }

    /**
     * @param age the age to set
     */
    public void setAge(int age) {
        this.age = age;
    }

    /**
     * @return the grade
     */
    public int getGrade() {
        return grade;
    }

    /**
     * @param grade the grade to set
     */
    public void setGrade(int grade) {
        this.grade = grade;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + age;
        result = prime * result + ((email == null) ? 0 : email.hashCode());
        result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
        result = prime * result + grade;
        result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
        result = prime * result + ((password == null) ? 0 : password.hashCode());
        result = prime * result + studentId;
        result = prime * result + ((studentNum == null) ? 0 : studentNum.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Student other = (Student) obj;
        if (age != other.age)
            return false;
        if (email == null) {
            if (other.email != null)
                return false;
        } else if (!email.equals(other.email))
            return false;
        if (firstName == null) {
            if (other.firstName != null)
                return false;
        } else if (!firstName.equals(other.firstName))
            return false;
        if (grade != other.grade)
            return false;
        if (lastName == null) {
            if (other.lastName != null)
                return false;
        } else if (!lastName.equals(other.lastName))
            return false;
        if (password == null) {
            if (other.password != null)
                return false;
        } else if (!password.equals(other.password))
            return false;
        if (studentId != other.studentId)
            return false;
        if (studentNum == null) {
            return other.studentNum == null;
        } else return studentNum.equals(other.studentNum);
    }

    @Override
    public String toString() {
        return "Student [studentId=" + studentId + ", firstName=" + firstName + ", lastName=" + lastName
                + ", studentNum=" + studentNum + ", email=" + email + ", password=" + password + ", age=" + age
                + ", grade=" + grade + "]";
    }

}
