import Application from "./app";
import { environment } from "./configs/environment.config";



Application.app.listen(environment.server.port, function () {
    console.log(`Servidor executando na porta: ${environment.server.port}`)
});