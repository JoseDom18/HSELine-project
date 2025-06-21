# HSELine

## Enunciado de procesos

Una empresa petrolera requiere automatizar y hacer mas eficiente su departamento QHSE, la lider de este departamento requiere un sistema donde la información se ecuentre centralizada, el sistema debe de alojar a toda la base de [empleados](#empleados) para poder almacenar toda la informacion para su uso posterior, uno de los principales procesos es la elaboracion de contratos. Para esto se necesita capturar la siguiente informacion del empleado. Nombre, apellidos, clave de elector, vigencia de ine, fecha de nacimiento, curp, numero de empleado, [categoria](#categorias-ed), tipo de sangre, alergias, numero de empleado, años laborales. Cada empleado cuenta con 3 tipos diferentes de certificaciones, la primera son los [cursos iadc](#iadc_empleado-ep) (piso de perforacion) estos cursos tienen un numero de folio unico, una vigencia, nombre y fecha de expedicion; la segunda son los [cursos de anexo SSPA](#cursos-ssspa-ec) los cuales tienen vigencia, fecha de expedicion y nombre del capacitador, y por ultimo el tecer tipo de curso son los cursos tecnicos que tienen vigencia, expedicion y estan clasificados dependiendo la categoria del empleado. Los empleado tambien cuentan con una libreta de mar, con los los siguientes datos, fecha de expedicion, vigencia, tipo de libreta (A o D). Los empelados deben de tener sus nss con la fecha de alta en la compañia. Los empleado tienen un certificado medico el cual tiene vigencia y determina si el empleado esta apto para trabajar. Cada empleado tiene un documento de entrega de epp el cual tiene una vigencia. Los empleados tienen una [credencial](#credenciales-ep) de empresa que se compone de nombre, apellidos, categoria, vigencia de credencial, curp, tipo de sangre, alergia y numero de empresa, esta credencial nos gustaria crearla de manera automatica con el sistema. Los empleado tienen cusos de barcaza los cuales tienen vigencia.

----


 <!-- los datos de los empleados son nombre, apellidos, cursos tecnicos, cursos de anexo sspa (27), cursos iadc (piso de perforacion), categoria, --> 
 <!-- certificado medico, entrega de epp, credencial de la empresa, curp, numero de empleado, alergias, tipo de sangre, libreta de mar, --> 
 <!-- curso de barcaza, alta de imms (fecha de inicio de akkal). Los cursos iadc tienen un folio, fecha de expedicion, una vigencia. Los cursos sspa tienen nombre de empleado, vigencia, fecha expedicion, nombre del instructor.  -->

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