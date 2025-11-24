pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:${env.PATH}"
    }

    stages {
        // Etapa para parar los servicios
        stage('Parando los servicios') {
            steps {
                sh '''
                    docker compose -p exu2-ayad-b down || true
                '''
            }
        }

        // Etapa para eliminar imágenes anteriores
        stage('Eliminando imágenes anteriores') {
            steps {
                sh '''
                    IMAGES=$(docker images --filter "label=com.docker.compose.project=exu2-ayad-b" -q)
                    if [ -n "$IMAGES" ]; then
                        docker rmi -f $IMAGES
                    else
                        echo 'No hay imagenes por borrar'
                    fi
                '''
            }
        }

        // Etapa para descargar la actualización del repo
        stage('Descargando actualización') {
            steps {
                checkout scm
            }
        }

        // Etapa para construir y desplegar
        stage('Construyendo y desplegando') {
            steps {
                sh '''
                    docker compose up --build -d
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado con éxito'
        }

        failure {
            echo 'Ocurrió un error en la ejecución del pipeline'
        }

        always {
            echo 'Pipeline finalizado'
        }
    }
}