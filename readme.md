# Club: esta aplicación permite iniciar el desarrollo de un sistema a partir de algunas características básicas disponibles:
- Características:
  - Servidor docker Keycloak para resguardo de credenciales
  - Backend en node con servidor en docker con las APIs necesarias para crendenciales de un nuevo usuario
  - Frontend en Angular con bienvenida de solicitud de credenciales y menú inicial
- Con los docker compose para levantar distintos ambientes de desarrollo:
  - Docker sólo con Keycloak para desarrollo frontend y backend
  - Docker con Keycloak + backend en node para desarrollo frontend
  - Docker con Keycloak, backend node y frontend Angular para probar la aplicación

## instalación:
- Una vez obtenido este repositorio desde Github y descomprimirlo
- Levantar Docker Desktop (v4.10.1 (82475))
- Contar con node instalado (v20.10.0)
- Posicionado en carpeta "club"
- Levantar docker de Keycloak: 
  - docker compose -f docker/docker-composeKC.yaml -p kc_project up -d
- Levantar el servicio de node en modo desarrollo:
  - Posicionado en carpeta "club"
    - cd nodeclub
    - npm install
    - node src/index.js 
    - Desde el browser:
      - localhost:3000
      - Respuesta: {"message":"¡Node: Healthy!"}
- Levantar el servicio de frontend Angular:
  - Posicionado en carpeta "club"
    - cd angularclub
    - npm install
    - ng serve
    - Desde el browser:
    - localhost:4200
    - Ingresar usuario/password y presionar "Nuevo Usuario" y luego "LOGIN"
    - Conduce al menú: "Menu", "Aquí", "Tu", "Aplicacion" 


