package visualiser;
import com.google.gson.Gson;
public class Main {

    public static void main(String[] args) {
	Person test1 = new Person(18,"hello");
	String test2 = new Gson().toJson(test1);
	System.out.println(test2);
    }
}
