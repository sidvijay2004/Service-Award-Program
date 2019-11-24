import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class StudentController {

  @Autowired
  private StudentService studentService;

  @GetMapping("/instructors/{username}/courses")
  public List<Student> getAllCourses(@PathVariable String username) {
    return courseManagementService.findAll();
  }
}