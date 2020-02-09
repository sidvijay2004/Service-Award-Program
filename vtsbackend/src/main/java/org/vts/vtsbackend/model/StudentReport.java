/**
 *
 */
package org.vts.vtsbackend.model;


/**
 * This is the model for student report object and attributes
 *
 * @author  Siddharth Vijayasankar
 * @version 1.0
 */
public class StudentReport {


    public static String CSA_ACHIEVEMENT = "CSA Achievement";
    public static String CSA_SERVICE = "CSA Service";
    public static String CSA_COMMUNITY = "CSA Community";
    private String firstName;
    private String lastName;
    private String period;
    private int totalHours;
    private String awardLevel = "none";

    public StudentReport(String firstName, String lastName, String period, int totalHours, String awardLevel) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.period = period;
        this.totalHours = totalHours;
        this.awardLevel = awardLevel;
    }

    public StudentReport() {
        super();
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public int getTotalHours() {
        return totalHours;
    }

    public void setTotalHours(int totalHours) {
        this.totalHours = totalHours;
        if (totalHours >= 500) {
            awardLevel = CSA_ACHIEVEMENT;
        } else if (totalHours >= 200) {
            awardLevel = CSA_SERVICE;
        } else if (totalHours >= 50) {
            awardLevel = CSA_COMMUNITY;
        }
    }

    public String getAwardLevel() {
        return awardLevel;
    }

    public void setAwardLevel(String awardLevel) {
        this.awardLevel = awardLevel;
    }

    @Override
    public String toString() {
        return "StudentReport{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", period='" + period + '\'' +
                ", totalHours=" + totalHours +
                ", awardLevel='" + awardLevel + '\'' +
                '}';
    }
}
