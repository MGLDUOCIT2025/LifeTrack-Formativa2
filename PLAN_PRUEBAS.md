# PLAN DE PRUEBAS

## Proyecto: LifeTrack - Evaluación Formativa N°2

**Asignatura:** Desarrollo Full Stack II  
**Estudiante:** Mario González  
**Carrera:** Ingeniería en Informática

---

# 1. Objetivo

El objetivo de este plan de pruebas es validar el correcto funcionamiento de los componentes principales utilizados en el portafolio de LifeTrack.

Las pruebas fueron desarrolladas utilizando Jasmine, Karma y Testing Library.

---

# 2. Herramientas utilizadas

- React
- Jasmine
- Karma
- Testing Library
- Chrome Headless
- Karma Coverage
- Webpack
- Babel

---

# 3. Componentes evaluados

Se realizaron pruebas sobre los siguientes componentes:

- NewsCard
- PortfolioProjectCard
- Portafolio

Estos componentes fueron seleccionados porque representan funcionalidades importantes del proyecto, como reutilización de componentes, props, manejo del DOM, formularios, eventos y carga de datos.

---

# 4. Prueba de NewsCard

## Objetivo

Comprobar que el componente NewsCard muestre correctamente la información recibida mediante props.

## Datos evaluados

- título
- fecha
- contenido

## Resultado esperado

La noticia debe aparecer correctamente dentro del DOM.

## Resultado obtenido

Prueba exitosa.

---

# 5. Prueba de PortfolioProjectCard

## Objetivo

Verificar que el componente reutilizable PortfolioProjectCard reciba correctamente información mediante props.

## Datos evaluados

- título
- descripción
- tecnologías
- imagen
- enlace

## Resultado esperado

Los datos deben mostrarse correctamente en la tarjeta del proyecto.

## Resultado obtenido

Prueba exitosa.

---

# 6. Prueba de renderizado del Portafolio

## Objetivo

Verificar que la página principal del portafolio se renderice correctamente.

## Resultado esperado

Debe aparecer el título principal:

**Mi Portafolio LifeTrack**

## Resultado obtenido

Prueba exitosa.

---

# 7. Prueba de carga de datos JSON

## Objetivo

Comprobar que los proyectos almacenados en archivos JSON se carguen correctamente.

## Resultado esperado

La página debe mostrar proyectos como:

- LifeTrack
- Sáltate la Fila
- Tienda LifeTrack

## Resultado obtenido

Prueba exitosa.

---

# 8. Prueba de formulario vacío

## Objetivo

Verificar la validación cuando el usuario intenta enviar el formulario sin completar los campos.

## Resultado esperado

Debe mostrarse el mensaje:

**Todos los campos son obligatorios.**

## Resultado obtenido

Prueba exitosa.

---

# 9. Prueba de correo inválido

## Objetivo

Comprobar la validación del correo electrónico.

## Resultado esperado

Debe mostrarse el mensaje:

**Debes ingresar un correo electrónico válido.**

## Resultado obtenido

Prueba exitosa.

---

# 10. Prueba de eventos y State

## Objetivo

Comprobar el funcionamiento de los eventos change y submit en el formulario.

## Resultado esperado

El usuario debe poder completar los campos y enviar el formulario correctamente.

Después del envío debe mostrarse:

**Mensaje enviado correctamente.**

## Resultado obtenido

Prueba exitosa.

---

# 11. Mock

Para simular una función externa se utilizó:

```javascript
jasmine.createSpy()