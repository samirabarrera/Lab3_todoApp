const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../src/app');
const Tarea = require('../../src/models/tarea.model');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Tarea.deleteMany();
});

describe('EJEMPLOS PRACTICOS DE PRUEBAS DE INTEGRACION', () => {

  // EJERCICIO 1: Implementar la prueba para crear una tarea
  test('TODO: POST /api/tareas crea una tarea', async () => {
    // PISTA:
    // 1. Define el objeto `nuevaTarea` con el `title`.
    // 2. Haz una petición `POST` usando `supertest`.
    // 3. Verifica el `statusCode` de la respuesta (debe ser 201).
    // 4. Asegúrate de que el cuerpo de la respuesta contenga el título y un `_id`.
    
    expect(true).toBe(true); // Placeholder - ¡reemplazar!
  });

  // EJERCICIO 2: Implementar la prueba para obtener todas las tareas
  test('TODO: GET /api/tareas devuelve todas las tareas', async () => {
    // PISTA:
    // 1. Crea varias tareas directamente en la base de datos usando `Tarea.create()`.
    // 2. Haz una petición `GET` a la API.
    // 3. Verifica el `statusCode` (200) y que el array devuelto tenga la longitud correcta.
    // 4. Asegúrate de que los títulos de las tareas en la respuesta coincidan con los que creaste.
    
    expect(true).toBe(true); // Placeholder - ¡reemplazar!
  });

  // EJERCICIO 3: Implementar la prueba para obtener una tarea específica
  test('TODO: GET /api/tareas/:id devuelve una tarea específica', async () => {
    // PISTA:
    // 1. Crea una tarea en la base de datos para obtener su `_id`.
    // 2. Haz una petición `GET` a la ruta dinámica `/api/tareas/:id`.
    // 3. Verifica el `statusCode` (200) y que el `title` de la respuesta coincida con el de la tarea que creaste.
    
    expect(true).toBe(true); // Placeholder - ¡reemplazar!
  });

  // ✅ EJERCICIO 4: Implementar la prueba para un ID inexistente
  test('TODO: GET /api/tareas/:id devuelve 404 para un ID inexistente', async () => {
    // PISTA:
    // 1. Crea un ID válido pero que no exista en la base de datos (por ejemplo, `new mongoose.Types.ObjectId()`).
    // 2. Haz una petición `GET` a la API con este ID.
    // 3. Verifica que la respuesta tenga un `statusCode` de 404.
    
    expect(true).toBe(true); // Placeholder - ¡reemplazar!
  });

  // EJERCICIO 5: Implementar la prueba para un campo requerido
  test('TODO: POST /api/tareas valida campos requeridos', async () => {
    // PISTA:
    // 1. Haz una petición `POST` con un objeto vacío o sin el campo `title`.
    // 2. Verifica el `statusCode` de error y que el cuerpo de la respuesta contenga un mensaje de validación.
    
    expect(true).toBe(true); // Placeholder - ¡reemplazar!
  });

  // EJERCICIO 6: Implementar la prueba para una lista vacía
  test('TODO: GET /api/tareas devuelve un array vacío cuando no hay tareas', async () => {
    // PISTA:
    // 1. Asegúrate de que no haya tareas en la base de datos (`afterEach` se encarga de esto).
    // 2. Haz una petición `GET`.
    // 3. Verifica que la respuesta tenga un `statusCode` de 200 y que el cuerpo sea un array vacío.
    
    expect(true).toBe(true); // Placeholder - ¡reemplazar!
  });
});
