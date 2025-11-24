package utez.edu.mx.server.modules.salute;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import utez.edu.mx.server.utils.APIResponse;

@Service
public class SaluteService {
    public ResponseEntity<APIResponse> salute(PersonDTO dto) {
        APIResponse body = new APIResponse(
                "Operación exitosa",
                "Hola " + dto.getNames() + " " + dto.getSurnames() + ", ¿Cómo estás?",
                HttpStatus.OK
        );

        return new ResponseEntity<>(body, body.getStatus());
    }
}
