package utez.edu.mx.server.modules.salute;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utez.edu.mx.server.utils.APIResponse;

@RestController
@RequestMapping("/api-salute")
@CrossOrigin(origins = "*")
@AllArgsConstructor
public class SaluteController {
    private SaluteService saluteService;

    @PostMapping("")
    public ResponseEntity<APIResponse> salute(@RequestBody PersonDTO dto) {
        return saluteService.salute(dto);
    }
}
