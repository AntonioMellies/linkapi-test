import { app } from "./app";
import { environment } from "./configs/environment.config";


app.listen(environment.server.port)