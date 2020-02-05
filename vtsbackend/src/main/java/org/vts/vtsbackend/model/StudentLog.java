/**
 *
 */
package org.vts.vtsbackend.model;


import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.sql.Date;


/**
 * @author sidVijay
 *
 */
public class StudentLog {

    private int id;
    private int studentId;

    @Temporal(TemporalType.DATE)
//	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy/MM/dd", locale = "pt-BR", timezone = "america/sao_paulo")
//	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy/MM/dd", timezone="EST")

    private Date activityDate;

    private String description;
    private int loggedHours;
    private String category;


    public StudentLog(int id, int studentId, Date activityDate, String description, int loggedHours, String category) {
        this.id = id;
        this.studentId = studentId;
        //@JsonFormat(timezone = "US/est", pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
        this.activityDate = activityDate;
        this.description = description;
        this.loggedHours = loggedHours;
        this.category = category;
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

    public Date getActivityDate() {
        return activityDate;
    }

    public void setActivityDate(Date activityDate) {
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "StudentLog{" +
                "id=" + id +
                ", studentId=" + studentId +
                ", activityDate=" + activityDate +
                ", description='" + description + '\'' +
                ", loggedHours=" + loggedHours +
                ", category='" + category + '\'' +
                '}';
    }
}
