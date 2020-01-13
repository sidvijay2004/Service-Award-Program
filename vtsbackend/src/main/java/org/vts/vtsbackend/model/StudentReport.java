/**
 * 
 */
package org.vts.vtsbackend.model;


import java.sql.Date;

/**
 * @author sidVijay
 *
 */
public class StudentReport {


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
	public StudentReport(){
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
		if(totalHours >= 500){
			awardLevel = "CSA Achievement";
		}
		else if(totalHours >= 200){
			awardLevel = "CSA Service";
		}
		else if(totalHours >= 50){
			awardLevel = "CSA Community";
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
