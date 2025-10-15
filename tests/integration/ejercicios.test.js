const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../../src/app");
const Tarea = require("../../src/models/tarea.model");

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

describe("🎓 EJERCICIOS PARA ESTUDIANTES", () => {
  // EJERCICIO 1: Completar esta prueba
  test("TODO: Implementar PUT /api/tareas/:id - actualizar tarea", async () => {
    // PISTA:
    // 1. Crear una tarea
    // 2. Hacer PUT con datos actualizados
    // 3. Verificar respuesta y BD
    const tarea = await Tarea.create({ title: "Tarea original" });
    const res = await request(app)
      .put(`/api/tareas/${tarea._id}`)
      .send({ title: "Tarea actualizada", completed: true });

    // TODO: Agregar expects aquí
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Tarea actualizada");
  });

  // EJERCICIO 2: Completar esta prueba
  test("TODO: Implementar DELETE /api/tareas/:id - eliminar tarea", async () => {
    // PISTA:
    // 1. Crear una tarea
    const tarea = await Tarea.create({ title: "Tarea para eliminar" });
    // 2. Hacer DELETE
    const res = await request(app).delete(`/api/tareas/${tarea._id}`);
    // 3. Verificar que se eliminó (404 en GET)
    const getRes = await request(app).get(`/api/tareas/${tarea._id}`);
    expect(getRes.statusCode).toBe(404);
  });

  // EJERCICIO 3: Prueba de validación
  test("TODO: POST /api/tareas con title vacío debe fallar", async () => {
    // PISTA: Enviar { title: "" } y verificar error
    const res = await request(app).post("/api/tareas").send({ title: "" });

    expect(res.statusCode).toBe(400);
    expect(res.body.title).toHaveProperty("error");
    expect(res.body.error).toBe("El campo 'title' es obligatorio");
  });

  // EJERCICIO 4: Prueba con múltiples tareas
  test("TODO: GET /api/tareas debe devolver tareas ordenadas por fecha", async () => {
    // PISTA:
    // 1. Crear varias tareas con delays
    await Tarea.create({ title: "Tarea 1" });
    await new Promise((r) => setTimeout(r, 10)); //delay
    await Tarea.create({ title: "Tarea 2" });
    await new Promise((r) => setTimeout(r, 10)); //delay
    await Tarea.create({ title: "Tarea 3" });

    const res = await request(app).get("/api/tareas");
    // 2. Verificar orden en la respuesta
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // EJERCICIO 5: Prueba de edge case
  test("TODO: GET /api/tareas/:id con ID inválido debe devolver 500", async () => {
    // PISTA: Usar un ID que no sea ObjectId válido (ej: "123")
    const res = await request(app).get("/api/tareas/123");

    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty("error");
    expect(res.body.error).toBe("ID inválido");
  });
});
