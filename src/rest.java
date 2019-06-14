
import entities.*;
import java.util.*;
import javax.ws.rs.*;
import javax.json.JsonArray;
import javax.ws.rs.GET;
import javax.json.JsonObject;
import javax.ws.rs.Path;

public class Rest{
    @GET
    public JsonArray hello() {
        return Json.createArrayBuilder().
        add(hi("smart", 18)).
        add(hi("nice", 42)).
        build();
    }
public JsonObject hi(String name, int age) {
    return Json.createObjectBuilder().
    add("name", name).
    add("age", age).
    build();
}
}
