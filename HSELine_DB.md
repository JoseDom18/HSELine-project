# HSELine

## Enunciado de procesos

Una empresa petrolera requiere automatizar y hacer mas eficiente su departamento QHSE, la líder de este departamento requiere un sistema donde la información se encuentre centralizada, el sistema debe de alojar a toda la base de [empleados](#empleados) para poder almacenar toda la información para su uso posterior, uno de los principales procesos es la elaboración de contratos. Para esto se necesita capturar la siguiente información del empleado. Nombre, apellidos, clave de elector, vigencia de ine, fecha de nacimiento, curp, numero de empleado, [categoría](#categorias-ed), tipo de sangre, alergias, numero de empleado, años laborales. Cada empleado cuenta con 3 tipos diferentes de certificaciones, la primera son los [cursos iadc](#iadc_empleado-ep) (piso de perforación) estos cursos tienen un numero de folio único, una vigencia, nombre y fecha de expedición; la segunda son los [cursos de anexo SSPA](#cursos-ssspa-ec) los cuales tienen vigencia, fecha de expedición y nombre del capacitador, y por ultimo el tercer tipo de curso son los cursos técnicos que tienen vigencia, expedición y están clasificados dependiendo la categoría del empleado. Los empleado también cuentan con una libreta de mar, con los los siguientes datos, fecha de expedición, vigencia, tipo de libreta (A o D). Los empelados deben de tener sus nss con la fecha de alta en la compañía. Los empleado tienen un certificado medico el cual tiene vigencia y determina si el empleado esta apto para trabajar. Cada empleado tiene un documento de entrega de epp el cual tiene una vigencia. Los empleados tienen una [credencial](#credenciales-ep) de empresa que se compone de nombre, apellidos, categoría, vigencia de credencial, curp, tipo de sangre, alergia y numero de empresa, esta credencial nos gustaría crearla de manera automática con el sistema. Los empleado tienen cursos de barcaza los cuales tienen vigencia.

----


 <!-- los datos de los empleados son nombre, apellidos, cursos tecnicos, cursos de anexo sspa (27), cursos iadc (piso de perforacion), categoria, --> 
 <!-- certificado medico, entrega de epp, credencial de la empresa, curp, numero de empleado, alergias, tipo de sangre, libreta de mar, --> 
 <!-- curso de barcaza, alta de imms (fecha de inicio de akkal). Los cursos iadc tienen un folio, fecha de expedicion, una vigencia. Los cursos sspa tienen nombre de empleado, vigencia, fecha expedicion, nombre del instructor.  -->
## Listado de datos de empleado

### Empleado
  - nombre
  - clave de elector
  - vigencia de ine
  - fecha de nacimiento
  - curp
  - numero empleado
  - Carrera
  - (nivel de estudios)
  - (Descripcion de labores)
  - Tipo de sangre
  - (nacionalidad)
  - (estado)
  - (país)
  - Alergias
  - Años laborales
  - Certificados IADC
  - Cursos SSPA
  - Libreta de mar
  - nss
  - Fecha de alta nss
  - Certificado medico
  - Documento de entrega epp
  - Curso de barcazas
  - Credencial de la empresa


## Entidades

> **Entidades detectadas.**

### empleados ***ED***

- numero_empleado ***PK***
- nombre
- apellido_paterno
- apellido_materno
- anio_laborales
- clave_elector ***PK***
- fecha_nacimiento
- cursos sspa ***FK***
- cursos iadc ***FK***
- años laborales
- categoria ***FK***
- certificado medico
- alergia TEXT 
- nss

### ines ***ED***

- clave de elector ***PK***
- vigencia_ine
- curp

### iadc_empleado ***EP***

- iadc_empleado_id ***PK***
- folio ***FK***
- numero_empleado ***FK***


### cursos iadc ***EC***

- folio ***PK***
- fecha expedicion
- vigencia
- nombre
- nombre del instructor
- status _boo_

### sspa_empleado ***EP***

- sspa_empleado_id ***PK***
- curso_id ***FK***
- numero_empleado ***FK***

### cursos ssspa ***EC***

- curso_id ***PK***
- fecha expedicion
- vigencia
- nombre
- nombre del instructor
- status _boo_

### categorias ***ED***
- categoria_id
- nombre

### credenciales ***EP***
- credencial ***PK***
- nombre empleado
- categoria
- vigencia año
- curp
- tipo de sangre
- alergias
- numero empresa

### libreta, rig pass, well sarp

- folio
- tipo de libreta (A o D)
- expidicion
- vigencia

### nss ***ED***

- nss ***PK***
- fecha_alta