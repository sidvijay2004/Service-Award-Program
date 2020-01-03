/**
 * 
 */
package org.vts.vtsbackend.model;

/**
 * @author sidVijay
 *
 */
public class StudentLog {
	public StudentLog(int id, int studentId, String activityDate, String description, int loggedHours) {
		this.id = id;
		this.studentId = studentId;
		this.activityDate = activityDate;
		this.description = description;
		this.loggedHours = loggedHours;
	}

	public StudentLog() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public String getActivityDate() {
		return activityDate;
	}

	public void setActivityDate(String activityDate) {
		this.activityDate = activityDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getLoggedHours() {
		return loggedHours;
	}

	public void setLoggedHours(int loggedHours) {
		this.loggedHours = loggedHours;
	}

	@Override
	public String toString() {
		return "StudentLog{" +
				"id=" + id +
				", studentId=" + studentId +
				", activityDate='" + activityDate + '\'' +
				", description='" + description + '\'' +
				", loggedHours=" + loggedHours +
				'}';
	}


	private int id;
	private int studentId;
	private String activityDate;
	private String description;
	private int loggedHours;


}
