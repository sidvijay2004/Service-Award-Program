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

	public StudentReport(String firstName, String lastName, String period, int totalHours) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.period = period;
		this.totalHours = totalHours;
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
	}

	@Override
	public String toString() {
		return "StudentReport{" +
				"firstName='" + firstName + '\'' +
				", lastName='" + lastName + '\'' +
				", period='" + period + '\'' +
				", totalHours=" + totalHours +
				'}';
	}
}
